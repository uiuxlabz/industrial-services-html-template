# INDUSTRIX — Industrial Services & Manufacturing Template

**Tagline:** Engineering Excellence, Built to Last.

A premium, framework-free HTML template for industrial services and manufacturing companies. Built with vanilla HTML, CSS, and JavaScript -- no dependencies, no build step.

---

## Live Pages

| Page | File | Description |
|------|------|-------------|
| Home | [index.html](index.html) | Hero with background image, stats strip, 4 service cards, project grid, testimonials, CTA banner |
| About | [about.html](about.html) | Company story, team grid, core values |
| Services | [services.html](services.html) | Detailed service cards with alternating layout, 4-step process timeline |
| Contact | [contact.html](contact.html) | Contact form with validation, info cards, map placeholder |

---

## Brand Identity

- **Name:** INDUSTRIX
- **Industry:** Industrial Services & Manufacturing
- **Palette:** Steel Blue `#475569` | Orange Accent `#EA580C` | Dark `#0F172A` | Light `#F1F5F9`
- **Typography:** Outfit (headings) + Inter (body) via Google Fonts
- **Logo:** Custom mark "I" in orange square

---

## Features

- Framework-free -- pure HTML, CSS, vanilla JS
- Fully responsive with breakpoints at 980px and 720px
- Scroll reveal animations via IntersectionObserver
- Mobile hamburger navigation with smooth transitions
- Contact form with client-side validation and success/error states
- Auto-filling copyright year via `[data-year]`
- Header scroll effect with backdrop blur
- `prefers-reduced-motion` respected throughout
- Semantic HTML5 with ARIA attributes
- CSS custom properties design system (colors, typography, spacing, shadows)

---

## Project Structure

```
industrial-services-html-template/
  index.html
  about.html
  services.html
  contact.html
  README.md
  assets/
    css/
      style.css          (900+ lines design system)
    js/
      main.js            ( burger, nav, reveals, forms )
    img/
      img-1920x1080-1.jpg   (hero background)
      img-1920x1080-2.jpg   (about hero)
      img-1920x1080-3.jpg   (story section)
      img-1000x1000-1.jpg   (team / testimonial avatar)
      img-1000x1000-2.jpg   (team / testimonial avatar)
      img-1000x1000-3.jpg   (team / testimonial avatar)
      img-550x350-1.jpg     (project / service card)
      img-550x350-2.jpg     (project / service card)
      img-550x350-3.jpg     (project / service card)
      img-550x350-4.jpg     (project / service card)
      img-550x350-5.jpg     (project / service card)
      img-550x350-6.jpg     (project / service card)
```

---

## How to Use

1. Open `index.html` in any modern browser -- no server required.
2. Replace images in `assets/img/` with your own photography.
3. Edit text content directly in the HTML files.
4. Adjust colors and typography by modifying CSS custom properties in `assets/css/style.css` under `:root`.
5. Deploy to any static hosting (GitHub Pages, Netlify, Vercel, S3).

---

## Customization

All design tokens live in the `:root` block of `style.css`:

```css
--steel:    #475569;   /* Primary brand color */
--orange:   #EA580C;   /* Accent / CTA color */
--dark:     #0F172A;   /* Dark backgrounds */
--light:    #F1F5F9;   /* Light backgrounds */
```

Change these values to rebrand the entire template in seconds.

---

Built with precision. Built to last.
