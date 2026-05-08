# 🚗 Sri Subramanya Motor Driving Training School

A professional, responsive static website for **Sri Subramanya Motor Driving Training School**, Bengaluru.

---

## 📁 Project Structure

```
sri-subramanya-driving-school/
├── index.html          ← Main HTML page
├── css/
│   └── styles.css      ← All styles (dark theme, animations, responsive)
├── js/
│   └── main.js         ← Interactivity (navbar, counters, scroll reveal, etc.)
├── assets/
│   └── whatsapp.svg    ← WhatsApp logo (green circle icon)
├── server.py           ← Python local dev server
└── README.md           ← This file
```

---

## 🚀 Getting Started

### Option 1 — Python Server (Recommended)

```bash
python server.py
```

Opens at **http://localhost:8080** automatically.

Custom port:
```bash
python server.py --port 3000
```

Requires Python 3.6+. No external dependencies.

### Option 2 — VS Code Live Server

1. Install the **Live Server** extension by Ritwick Dey in VS Code.
2. Right-click `index.html` → **"Open with Live Server"**.

### Option 3 — Open Directly

Double-click `index.html` to open in your browser.  
*(Note: some browser security policies block local SVG assets — use a server for best results.)*

---

## 📞 Contact Details

| Channel   | Number / Info                  |
|-----------|-------------------------------|
| Phone     | +91 99168 88789               |
| WhatsApp  | +91 99168 88789               |
| Hours     | 9:00 AM – 7:00 PM (Mon–Sun)   |
| Address   | No. 205, Dwarka Nagar, Opp. Panchami Sagar Hotel, Kattigenahalli, Bengaluru 560064 |

---

## 💬 WhatsApp Integration

All WhatsApp links open `https://wa.me/919916888789` with a pre-filled default message:

> *"Welcome! Thank you for choosing us and confirming your booking. We're excited to serve you and will reach out shortly with the next steps."*

WhatsApp links appear in:
- Navbar CTA button
- Hero section buttons
- CTA banner
- Contact section
- Footer
- Floating WhatsApp button (bottom-right)

To update the number or message, search-and-replace in `index.html`:

```
Find:    wa.me/919916888789
Replace: wa.me/91XXXXXXXXXX
```

---

## 🎨 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| HTML       | Semantic HTML5                      |
| CSS        | Custom CSS3 (variables, grid, flex) |
| JavaScript | Vanilla ES6+ (no frameworks)        |
| Icons      | Lucide Icons (CDN)                  |
| Fonts      | Bebas Neue + Outfit (Google Fonts)  |
| Backend    | Python `http.server` (dev only)     |

---

## 🖥️ Features

- ✅ Sticky navbar with scroll-triggered background
- ✅ Mobile hamburger menu
- ✅ Smooth scroll navigation
- ✅ Animated scroll-progress bar
- ✅ Counter animation (3000+, 95%, 22, 15+)
- ✅ Scroll-reveal card animations
- ✅ WhatsApp floating button with pulse animation
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark amber theme

---

## 🌐 Deployment (GitHub Pages)

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set **Source** to `main` branch, `/root` folder.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## ✏️ Customisation

| What to change          | Where                        |
|-------------------------|------------------------------|
| Phone / WhatsApp number | `index.html` (find & replace) |
| Colors / fonts          | `css/styles.css` `:root` block |
| Sections / content      | `index.html`                 |
| Animations / logic      | `js/main.js`                 |
| WhatsApp icon           | `assets/whatsapp.svg`        |

---

*Built for Sri Subramanya Motor Driving Training School, Bengaluru © 2025*
