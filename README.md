# Choice Foods Website

Premium corporate website for **Choice Foods Group**, showcasing the company's global food operations, capabilities, impact, press, partnerships, and corporate information.

---

## 📌 Project Overview

The Choice Foods website is designed as a premium, editorial-style corporate experience with a strong focus on:

* Global food operations
* Seafood capabilities
* Product development
* Private label partnerships
* Global presence
* Social impact
* Sustainability
* Education
* Press & thought leadership
* Business partnerships

The website uses modern animation and responsive design while preserving the company's official content, branding, imagery, and media.

---

## 🌐 Main Pages

| Page            | Purpose                                                |
| --------------- | ------------------------------------------------------ |
| Home            | Company overview and primary brand experience          |
| About           | Company history, people, places and process            |
| Capabilities    | Value Added, Recipe Development and Private Label      |
| Impact          | People, education, sustainability and community impact |
| Press           | News, media and thought leadership                     |
| Leadership      | Leadership information                                 |
| Partner With Us | Business partnership and enquiry experience            |
| Contact         | Contact and enquiry functionality                      |

---

## 🎨 Design Direction

The website follows a premium editorial/corporate design language.

### Visual Principles

* Premium
* Minimal
* Editorial
* Cinematic
* Modern
* High-end corporate
* Strong typography
* Large imagery
* Generous whitespace
* Smooth transitions
* Subtle micro-interactions

### Avoid

* Excessive gradients
* Neon colors
* Excessive glassmorphism
* Generic stock imagery
* Unnecessary rounded cards
* Heavy shadows
* Excessive animation
* Unnecessary UI elements

---

# 🎬 Animation System

The website may use:

* GSAP
* GSAP ScrollTrigger
* Lenis Smooth Scroll
* CSS transitions
* Image reveal animations
* Text reveal animations
* Parallax effects
* Magnetic buttons
* Page transitions

## Important

Do **not** initialize the same animation library multiple times.

Before adding GSAP or Lenis:

1. Check whether it already exists.
2. Reuse the existing instance.
3. Do not create a second Lenis instance.
4. Do not duplicate ScrollTrigger initialization.

---

# 🖼️ Image & Media Rules

All official Choice Foods imagery should be preserved.

### Rules

* Use existing approved images whenever possible.
* Do not replace official images with random stock images.
* Do not generate fake company images.
* Do not change official logos.
* Do not fabricate image URLs.
* Do not remove existing media without approval.

### Broken Image Debugging

If an image does not appear:

1. Inspect the HTML.
2. Inspect the image `src`.
3. Inspect `srcset`.
4. Inspect CSS `background-image`.
5. Inspect imported assets.
6. Check WordPress media paths.
7. Check browser Network errors.
8. Check JavaScript image manipulation.
9. Check `opacity`.
10. Check `visibility`.
11. Check `display`.
12. Check `z-index`.
13. Check `overflow`.
14. Check GSAP/ScrollTrigger animation states.

Only after identifying the actual problem should the image reference be changed.

---

# 🌍 Global Presence

Current documented locations include:

* Andhra Pradesh, India
* New Jersey, USA
* Pennsylvania, USA

Do not add additional locations unless officially provided.

---

# ⚙️ Capabilities

The website documents the following capabilities:

### Value Added

Value-added seafood products for retail and foodservice.

### Recipe Development

Product concepts developed around customer preferences, pricing targets and category opportunities.

### Private Label

Customized private-label programs for retail partners.

### Quality Control & Traceability

Includes structured QA/QC systems, traceability, laboratory testing and food-safety procedures.

### Production & Processing Systems

Includes advanced cooking, chilling, freezing and high-volume production systems.

### Logistics & Distribution

Coordinated production, shipping and distribution operations.

---

# 🌱 Impact

The Impact experience includes:

* Our Impact
* Building Safe, Supportive Workplaces
* Investing in Educational Opportunities in India
* Long-Term Accountability
* Worker and Community Engagement
* Supporting Education & Development
* Sustainability
* Holistic Learning
* Creativity & Critical Thinking
* Health & Wholeness

Documented impact figures must remain accurate.

Do not modify or invent statistics.

---

# 📰 Press & News

The Press section contains official company-related stories and external media references.

Existing content must be preserved.

Do not invent:

* Articles
* Publications
* Awards
* Interviews
* Statistics
* External links

External article links should point to the original source whenever available.

---

# 🤝 Partner With Us

The partnership experience supports business enquiries related to:

* Private Label
* Product Development
* Foodservice
* Distribution
* Long-term supply relationships
* Other business enquiries

The partnership form should remain functional and responsive.

---

# 🧩 Development Rules

### Code Quality

* Keep components reusable.
* Keep JavaScript modular.
* Avoid unnecessary dependencies.
* Avoid duplicate code.
* Avoid duplicate animation initialization.
* Prefer reusable CSS classes.
* Maintain semantic HTML.
* Keep responsive behavior intact.

### Updating Existing Sections

Never rewrite the entire website to fix one section.

Follow this process:

1. Inspect the existing implementation.
2. Identify the exact problem.
3. Modify only the affected files/components.
4. Preserve existing content.
5. Preserve existing media.
6. Preserve existing branding.
7. Test desktop.
8. Test tablet.
9. Test mobile.
10. Check browser console.

---

# 📱 Responsive Design

The website must work correctly on:

* Desktop
* La
