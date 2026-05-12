# 🚗 Mahabhala Driving School — Website

A complete, production-ready static website for **Mahabhala Driving School**, located at JM Complex, Kattigenahalli, Opp. REVA College Main Road, Jala Hobli, Yelahanka, Bengaluru – 560064.

---

## 📁 Project Structure

```
mahabhala-driving-school/
├── index.html      ← Main HTML (all sections)
├── style.css       ← Full CSS (variables, layout, animations, responsive)
├── script.js       ← JavaScript (navbar, slider, counter, form, scroll)
└── README.md       ← This file
```

---

## 🌟 Features

| Feature | Description |
|---|---|
| **Sticky Navbar** | Transparent → solid on scroll; mobile hamburger menu |
| **Hero Section** | Full-screen with animated car, counter stats, CTA buttons |
| **Marquee Strip** | Infinite scrolling services ticker |
| **About Section** | School info, features, visual card layout |
| **Courses Grid** | 4 course cards (Basic Car, Premium Car, Two-Wheeler, Refresher) with pricing |
| **Why Us** | 6 feature cards on dark background |
| **Testimonials** | Auto-playing slider with dots, prev/next, touch swipe |
| **Enroll Form** | Validated enquiry form with success state |
| **Location Section** | Contact info + embedded Google Maps iframe |
| **Footer** | Full-column footer with links, social, address |
| **WhatsApp Button** | Floating quick-contact button |
| **Back to Top** | Appears on scroll |
| **Reveal Animations** | Intersection Observer scroll-triggered fade-ins |
| **Counter Animation** | Animated stats (1500+ students, 10 years, 98% pass rate) |
| **Fully Responsive** | Mobile-first, tested at 320px to 1440px+ |

---

## 🎨 Design System

### Colors
```css
--amber:    #f59e0b  /* Primary accent */
--amber-dk: #d97706  /* Hover states */
--black:    #0d0d0d  /* Hero, footer, dark sections */
--light-bg: #f5f0e8  /* About, testimonials, location */
--white:    #fafafa  /* Cards, body */
```

### Typography
- **Display / Headings:** Bebas Neue (Google Fonts)
- **Italic Accent:** Playfair Display Italic
- **Body / UI:** DM Sans

### Aesthetic Direction
**Bold Industrial + Warm Amber** — Heavy typographic headers in Bebas Neue, amber gold accents on dark backgrounds, geometric grid overlays, road-inspired visual motifs.

---

## 🚀 Getting Started

### Option 1: Open directly (no server needed)
```bash
# Simply double-click index.html in your file manager
# OR open in browser:
open index.html
```

### Option 2: Local development server
```bash
# Using Python
python3 -m http.server 3000
# Then visit: http://localhost:3000

# Using Node.js (npx)
npx serve .
```

### Option 3: Deploy to hosting
Upload all 3 files (`index.html`, `style.css`, `script.js`) to any static host:
- **Netlify** — Drag & drop the folder at netlify.com/drop
- **Vercel** — `vercel deploy`
- **GitHub Pages** — Push to a `gh-pages` branch
- **cPanel / Shared Hosting** — Upload via File Manager to `public_html/`

---

## ✏️ Customisation Guide

### Update Contact Number
Search and replace all instances of `+919876543210` in `index.html` with the real phone number.

### Update Google Maps Embed
In `index.html`, find the `<iframe>` inside `.map-embed` and replace the `src` with the actual embed URL from:
> Google Maps → Share → Embed a map → Copy HTML → paste the `src` URL

### Update Course Pricing
Find the `.course-price` blocks in `index.html` and update the `₹` values.

### Change Business Name / Logo
Update the `.logo` sections in both the `<nav>` and `<footer>`.

### Add Real Phone Number for WhatsApp
```html
<!-- Change 919876543210 to: 91 + actual 10-digit number -->
<a href="https://wa.me/919876543210" ...>
```

### Add Google Analytics
Paste your GA4 script tag just before `</head>` in `index.html`.

---

## 📋 Sections Overview

| Section | ID | Purpose |
|---|---|---|
| Navbar | `#navbar` | Fixed navigation + CTA |
| Hero | `#hero` | First impression, stats, CTAs |
| About | `#about` | School story, credentials |
| Courses | `#courses` | 4 programme cards with pricing |
| Why Us | `#why-us` | Trust signals, USPs |
| Testimonials | `#gallery` | Student reviews slider |
| Enroll | `#enroll` | Lead capture form |
| Contact / Map | `#contact` | Address, hours, embed map |
| Footer | — | Links, social, copyright |

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 📍 Business Information

**Mahabhala Driving School**  
JM Complex, Kattigenahalli,  
Opp. REVA College Main Road, Jala Hobli,  
Yelahanka, Bengaluru, Karnataka – 560064  

📌 Google Maps: https://maps.app.goo.gl/9XZzawybM5vmDdy37

---

## 📄 License

This website was custom built for Mahabhala Driving School. All rights reserved © 2025 Mahabhala Driving School.
