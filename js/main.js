/* =========================================================
   Sri Subramanya Driving School — main.js
   ========================================================= */

"use strict";

// ---- Initialize Lucide Icons ----
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  initNavbar();
  initMobileMenu();
  initScrollProgress();
  initSmoothScroll();
  initCounters();
  initRevealOnScroll();
});

/* =========================================================
   NAVBAR — sticky + scroll class
   ========================================================= */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load
}

/* =========================================================
   MOBILE MENU — hamburger toggle
   ========================================================= */
function initMobileMenu() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close when a mobile link is clicked
  mobileMenu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });
}

/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  const update = () => {
    const scrolled  = window.scrollY;
    const totalH    = document.documentElement.scrollHeight - window.innerHeight;
    const pct       = totalH > 0 ? (scrolled / totalH) * 100 : 0;
    bar.style.width = pct.toFixed(2) + "%";
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* =========================================================
   SMOOTH SCROLL — nav links
   ========================================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* =========================================================
   COUNTER ANIMATION — Stats section
   ========================================================= */
function initCounters() {
  const counters = document.querySelectorAll(".stat-num[data-target]");
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target  = parseInt(el.dataset.target, 10);
    const suffix  = el.dataset.suffix || "";
    const duration = 1800; // ms
    const step     = Math.ceil(duration / target);
    let current    = 0;

    // Use rAF for smooth animation
    let startTime = null;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed  = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      current        = Math.round(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  // Trigger counters when the stats section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* =========================================================
   REVEAL ON SCROLL — cards, sections
   ========================================================= */
function initRevealOnScroll() {
  // Add .reveal class to target elements
  const selectors = [
    ".feature-item",
    ".curriculum-card",
    ".diff-card",
    ".review-card",
    ".stat-card",
    ".contact-card",
  ];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
