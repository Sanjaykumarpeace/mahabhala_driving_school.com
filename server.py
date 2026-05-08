"""
Sri Subramanya Driving School — server.py
A lightweight Python HTTP server to serve the static site locally.
Run:  python server.py
Then open: http://localhost:8080
"""

import http.server
import socketserver
import os
import sys
import webbrowser
import threading
import signal

# ── Configuration ────────────────────────────────────────────────────────────

PORT       = 8080
HOST       = "localhost"
# Serve files from the same directory as this script
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))

# ── Coloured terminal output ──────────────────────────────────────────────────

RESET  = "\033[0m"
BOLD   = "\033[1m"
CYAN   = "\033[96m"
GREEN  = "\033[92m"
YELLOW = "\033[93m"
RED    = "\033[91m"
AMBER  = "\033[38;5;214m"

def banner():
    print(f"""
{AMBER}{BOLD}╔══════════════════════════════════════════════════════╗
║   SRI SUBRAMANYA MOTOR DRIVING TRAINING SCHOOL       ║
║   Local Development Server                           ║
╚══════════════════════════════════════════════════════╝{RESET}
""")

# ── Custom Request Handler ────────────────────────────────────────────────────

class SriSubramanyaHandler(http.server.SimpleHTTPRequestHandler):
    """Serve static files from BASE_DIR with nice logging."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, fmt, *args):
        status_code = args[1] if len(args) > 1 else "???"
        color = GREEN if str(status_code).startswith("2") else (
                YELLOW if str(status_code).startswith("3") else RED
        )
        print(
            f"  {CYAN}[REQUEST]{RESET}  "
            f"{self.command:<6}  "
            f"{color}{status_code}{RESET}  "
            f"{self.path}"
        )

    def end_headers(self):
        # Enable cross-origin requests for local development
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

# ── Server bootstrap ──────────────────────────────────────────────────────────

def open_browser(url: str, delay: float = 1.0):
    """Open browser after a short delay so the server is ready."""
    def _open():
        import time
        time.sleep(delay)
        webbrowser.open(url)
    threading.Thread(target=_open, daemon=True).start()


def run():
    banner()

    os.chdir(BASE_DIR)

    url = f"http://{HOST}:{PORT}"

    try:
        with socketserver.TCPServer((HOST, PORT), SriSubramanyaHandler) as httpd:
            httpd.allow_reuse_address = True

            print(f"  {GREEN}✓{RESET}  Server running at  {BOLD}{CYAN}{url}{RESET}")
            print(f"  {GREEN}✓{RESET}  Serving files from {BOLD}{BASE_DIR}{RESET}")
            print(f"\n  {YELLOW}Press Ctrl+C to stop the server.{RESET}\n")

            # Auto-open browser
            open_browser(url)

            # Graceful shutdown on Ctrl-C
            def _shutdown(sig, frame):
                print(f"\n\n  {YELLOW}Shutting down server…{RESET}")
                httpd.shutdown()
                sys.exit(0)

            signal.signal(signal.SIGINT, _shutdown)

            httpd.serve_forever()

    except OSError as exc:
        if exc.errno == 98:   # Address already in use (Linux)
            print(f"\n  {RED}✗  Port {PORT} is already in use.{RESET}")
            print(f"  Try:  python server.py --port 8081\n")
        else:
            raise


# ── CLI entrypoint ────────────────────────────────────────────────────────────

if __name__ == "__main__":
    # Simple --port flag support
    if "--port" in sys.argv:
        idx = sys.argv.index("--port")
        try:
            PORT = int(sys.argv[idx + 1])
        except (IndexError, ValueError):
            print(f"{RED}Invalid port value.{RESET}")
            sys.exit(1)

    run()
