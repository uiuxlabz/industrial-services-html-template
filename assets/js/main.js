/**
 * INDUSTRIX — Main JavaScript
 * Industrial Services & Manufacturing Template
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     0. Reduced-motion preference
     ---------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ----------------------------------------------------------
     1. DOM-ready helper
     ---------------------------------------------------------- */
  function onReady(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  onReady(function () {
    initBurger();
    initActiveNav();
    initDataYear();
    initReveals();
    initForms();
    initHeaderScroll();
  });

  /* ----------------------------------------------------------
     2. Burger / Mobile Navigation
     ---------------------------------------------------------- */
  function initBurger() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!burger || !mobileNav) return;

    burger.addEventListener('click', function () {
      const isOpen = burger.classList.toggle('active');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        burger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ----------------------------------------------------------
     3. Active Navigation Highlight
     ---------------------------------------------------------- */
  function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');

    allLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  }

  /* ----------------------------------------------------------
     4. Header Scroll Effect
     ---------------------------------------------------------- */
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    function checkScroll() {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     5. [data-year] — Auto-fill copyright year
     ---------------------------------------------------------- */
  function initDataYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ----------------------------------------------------------
     6. IntersectionObserver — Reveal Animations
     ---------------------------------------------------------- */
  function initReveals() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    // If reduced motion, show everything immediately
    if (prefersReducedMotion) {
      revealElements.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     7. [data-form] — Contact / Inquiry Form Handling
     ---------------------------------------------------------- */
  function initForms() {
    document.querySelectorAll('[data-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const okMsg = form.querySelector('.form-ok');
        const errMsg = form.querySelector('.form-err');
        const submitBtn = form.querySelector('button[type="submit"]');

        // Hide previous messages
        if (okMsg) okMsg.style.display = 'none';
        if (errMsg) errMsg.style.display = 'none';

        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(function (field) {
          if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#DC2626';
          } else {
            field.style.borderColor = '';
          }
        });

        // Email validation
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#DC2626';
          }
        }

        if (!isValid) {
          if (errMsg) {
            errMsg.style.display = 'block';
          }
          return;
        }

        // Simulate form submission
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }

        setTimeout(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
          }

          // Show success
          if (okMsg) {
            okMsg.style.display = 'block';
          }

          // Reset form
          form.reset();

          // Auto-hide success after 5s
          setTimeout(function () {
            if (okMsg) okMsg.style.display = 'none';
          }, 5000);
        }, 1200);
      });

      // Clear error state on input
      form.querySelectorAll('input, textarea, select').forEach(function (field) {
        field.addEventListener('input', function () {
          this.style.borderColor = '';
          const errMsg = form.querySelector('.form-err');
          if (errMsg) errMsg.style.display = 'none';
        });
      });
    });
  }

  /* ----------------------------------------------------------
     8. Smooth Scroll for Anchor Links
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = document.querySelector('.header')
          ? document.querySelector('.header').offsetHeight
          : 0;
        const y =
          target.getBoundingClientRect().top + window.scrollY - headerH - 20;
        window.scrollTo({ top: y, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });
})();
