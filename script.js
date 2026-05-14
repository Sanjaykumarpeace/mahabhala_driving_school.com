/**
 * Mahabhala Driving School – script.js
 * Features: Navbar scroll, mobile menu, reveal animations,
 *           counter animation, testimonial slider, form validation
 */

'use strict';

/* ═══════════════════════════════
   1. NAVBAR – scroll & mobile
═══════════════════════════════ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const backTop   = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    backTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backTop.classList.remove('visible');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ═══════════════════════════════
   2. REVEAL ON SCROLL
═══════════════════════════════ */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Number(delay));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════
   3. COUNTER ANIMATION
═══════════════════════════════ */
const counters = document.querySelectorAll('.stat-num');
let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;
  countersStarted = true;
  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  });
}

// Trigger counters when hero stats come into view
const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) animateCounters();
  }, { threshold: 0.5 });
  statsObserver.observe(statsEl);
}

/* ═══════════════════════════════
   4. TESTIMONIAL SLIDER
═══════════════════════════════ */
const track     = document.getElementById('testimonialTrack');
const tPrev     = document.getElementById('tPrev');
const tNext     = document.getElementById('tNext');
const tDotsWrap = document.getElementById('tDots');

let currentSlide = 0;
const slides = track ? track.querySelectorAll('.testimonial-card') : [];
const total  = slides.length;

// Build dots
if (tDotsWrap && total > 0) {
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.classList.add('t-dot');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    tDotsWrap.appendChild(dot);
  }
}

function goToSlide(index) {
  currentSlide = (index + total) % total;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  tDotsWrap.querySelectorAll('.t-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });
}

if (tPrev) tPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
if (tNext) tNext.addEventListener('click', () => goToSlide(currentSlide + 1));

// Auto-play
let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
if (track) {
  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });
}

// Touch/swipe support
if (track) {
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
  }, { passive: true });
}

/* ═══════════════════════════════
   5. ENROLL FORM VALIDATION
═══════════════════════════════ */
const enrollForm = document.getElementById('enrollForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn  = document.getElementById('submitBtn');
const btnText    = document.getElementById('btnText');
const btnLoader  = document.getElementById('btnLoader');

function showError(fieldId, errId, msg) {
  const field = document.getElementById(fieldId);
  const err   = document.getElementById(errId);
  if (field) field.classList.add('invalid');
  if (err)   err.textContent = msg;
}
function clearError(fieldId, errId) {
  const field = document.getElementById(fieldId);
  const err   = document.getElementById(errId);
  if (field) field.classList.remove('invalid');
  if (err)   err.textContent = '';
}

if (enrollForm) {
  // Live clear on input
  ['fname', 'phone', 'course'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError(id, id + 'Err'));
  });

  enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fname  = document.getElementById('fname').value.trim();
    const phone  = document.getElementById('phone').value.trim();
    const course = document.getElementById('course').value;

    clearError('fname',  'fnameErr');
    clearError('phone',  'phoneErr');
    clearError('course', 'courseErr');
    if (formSuccess) formSuccess.style.display = 'none';

    if (!fname) {
      showError('fname', 'fnameErr', 'Please enter your full name.');
      valid = false;
    }
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      showError('phone', 'phoneErr', 'Enter a valid 10-digit Indian mobile number.');
      valid = false;
    }
    if (!course) {
      showError('course', 'courseErr', 'Please select a course.');
      valid = false;
    }

    if (!valid) return;

    // Simulate async submission
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    submitBtn.disabled = true;

    setTimeout(() => {
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      submitBtn.disabled = false;
      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      enrollForm.reset();
    }, 1600);
  });
}

/* ═══════════════════════════════
   6. SMOOTH ACTIVE NAV HIGHLIGHT
═══════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navAnchors = navLinks ? navLinks.querySelectorAll('a[href^="#"]') : [];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ═══════════════════════════════
   7. GALLERY IMAGE FALLBACKS
═══════════════════════════════ */
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((img) => {
  const wrapper = img.closest('.gallery-image-wrapper');
  if (!wrapper) return;

  const fallback = wrapper.querySelector('.gallery-image-fallback');
  const fallbackLabel = wrapper.dataset.fallbackLabel;
  if (fallback && fallbackLabel) {
    const textEl = fallback.querySelector('.fallback-text');
    if (textEl) textEl.textContent = fallbackLabel;
  }

  const showFallback = () => {
    wrapper.classList.add('image-error');
  };

  img.addEventListener('error', showFallback, { once: true });
  img.addEventListener('load', () => {
    wrapper.classList.remove('image-error');
  });

  // Handle cached broken images on initial render.
  if (img.complete && img.naturalWidth === 0) {
    showFallback();
  }
});

/* ═══════════════════════════════
   8. NAVBAR ALWAYS SCROLLED ON MOBILE
═══════════════════════════════ */
function handleNavbar() {
  if (window.innerWidth <= 768 || window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('resize', handleNavbar);
handleNavbar();
