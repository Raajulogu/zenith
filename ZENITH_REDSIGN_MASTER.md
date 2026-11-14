# ZENITH — COMPLETE WEBSITE REDESIGN MASTER SPECIFICATION

**Project:** Zenith Website Redesign  
**Phase:** 1 — Design, UI/UX, Responsive Implementation  
**Future Phase:** 2 — Animation and Motion Design  
**Priority:** Premium Design, Mobile-First Experience, Smart Home Storytelling

---

# 1. PROJECT VISION

We are completely rebuilding the Zenith website's visual identity and user experience.

This is not a minor redesign, theme update, or component refresh.

We want a premium, sophisticated, modern, architectural, and intelligent-home website that represents Zenith as a high-quality smart-home and home automation brand.

The website must communicate what intelligent living actually feels like.

We do not want a generic technology company website containing ordinary service cards, icons, gradients, and stock illustrations.

We want visitors to experience the possibilities of an intelligently automated home through:

- Premium architectural photography.
- Sophisticated visual storytelling.
- Immersive smart-home demonstrations.
- Interactive lighting and automation scenes.
- Elegant typography.
- Minimal and intentional layouts.
- Excellent mobile experiences.
- Carefully designed light and dark themes.

**Core brand message:**

"Intelligence, seamlessly integrated."

The overall experience should make visitors feel that Zenith understands architecture, premium living, technology, and comfort.

---

# 2. EXISTING PROJECT AUDIT AND INFORMATION PRESERVATION

Before changing anything, inspect the complete existing project.

Understand and document:

- Framework and technology stack.
- Project structure.
- Existing routes and pages.
- Company information.
- Brand identity.
- Existing logo and assets.
- Services and solutions.
- Product categories.
- Contact information.
- Company address and locations.
- Existing images and videos.
- SEO metadata.
- Existing APIs and integrations.
- CMS and database functionality.
- Contact forms and other business functionality.
- Existing navigation and internal links.

## Company reference document

Create:

`docs/zenith-company-reference.md`

Document all verified company information recovered from the project.

Include:

1. Company overview.
2. Brand identity and logo details.
3. Company description and positioning.
4. Services and solutions.
5. Product categories.
6. Contact information.
7. Locations and business details.
8. Existing routes and page content.
9. Integrations and technical functionality.
10. SEO information.
11. Existing asset locations.
12. Missing information requiring confirmation.

Do not invent company details, services, addresses, statistics, certifications, testimonials, partnerships, or achievements.

Clearly mark unavailable information as requiring confirmation.

## Important preservation instructions

Create a backup or Git checkpoint before modifying the project.

We want to remove and replace the old visual implementation:

- Old page layouts.
- Old component designs.
- Old visual styles.
- Old section arrangements.
- Old typography.
- Old color systems.
- Old decorative elements.

However, do not indiscriminately delete:

- Backend logic.
- API integrations.
- Database functionality.
- Existing business logic.
- CMS integrations.
- Company information.
- Existing functional contact forms.
- Required routes.
- Existing assets that are still useful.

Preserve required functionality while rebuilding the presentation layer.

---

# 3. SMART HOME COMPETITOR AND DESIGN RESEARCH

Before implementation, research premium smart-home and home automation websites.

Study the following brands:

## Savant
https://www.savant.com/

Study:
- Premium brand presentation.
- Luxury lifestyle storytelling.
- Architectural photography.
- Typography.
- Section composition.

## Control4
https://www.control4.com/

Study:
- Service presentation.
- Smart-home solution explanations.
- Navigation.
- Product communication.
- Customer-focused storytelling.

## Lutron
https://www.lutron.com/

Study:
- Architectural minimalism.
- Lighting presentation.
- Premium visual hierarchy.
- Clean layouts.
- Interior photography.

## Crestron
https://www.crestron.com/

Study:
- Advanced technology presentation.
- Integrated systems.
- Professional positioning.
- Residential automation storytelling.

## Josh.ai
https://www.josh.ai/

Study:
- Intelligent living presentation.
- AI and voice automation communication.
- Minimalist interface.
- Lifestyle-focused storytelling.

## Additional design references

Explore premium architectural, interior design, and smart-home website references on:

https://dribbble.com/tags/smart-home-website

https://www.awwwards.com/

## Research documentation

Create:

`docs/zenith-design-research.md`

For each reference, document:

- Design strengths.
- Design weaknesses.
- Header and navigation.
- Hero composition.
- Typography.
- Color usage.
- Image presentation.
- Service sections.
- CTA placement.
- Mobile experience.
- Useful design principles.

Our intended creative combination:

- Savant: Luxury and lifestyle presentation.
- Lutron: Architectural minimalism.
- Control4: Clear solution communication.
- Crestron: Advanced technology presentation.
- Josh.ai: Intelligent living storytelling.

Do not copy any existing website.

Use research to create a unique Zenith design identity.

---

# 4. ZENITH BRAND IDENTITY

## Brand personality

Zenith must communicate:

- Premium quality.
- Intelligent living.
- Modern architecture.
- Sophisticated technology.
- Comfort and convenience.
- Innovation.
- Trust and reliability.
- Seamless integration.

The interface should feel elegant, confident, minimal, and professional.

## Avoid these design patterns

- Generic SaaS website templates.
- Excessive gradients.
- Excessive glassmorphism.
- Overused glowing effects.
- Too many rounded cards.
- Random floating decorative elements.
- Unnecessary icons.
- Excessive shadows.
- Bright blue technology-themed interfaces.
- Cheap stock illustrations.
- Repetitive section layouts.
- Oversized decorative typography without purpose.

## Logo

Use the actual Zenith logo already supplied in the project.

The existing logo has a black background with golden Zenith lettering.

Preserve its:
- Identity.
- Original proportions.
- Typography.
- Brand recognition.

Do not recreate the logo using ordinary text.

Use the appropriate logo asset in both light and dark themes.

---

# 5. COLOR SYSTEM

Create a centralized design token system.

Use the existing black-and-gold logo as the branding reference.

## Brand gold

- Primary gold: #C6A45C
- Light gold: #D8BE83
- Deep gold: #96743A

## Light theme

- Main background: #F7F6F2
- Secondary background: #EFEEE9
- Primary text: #171717
- Secondary text: #66645F
- Borders: #E2DFD7
- Surface: #FFFFFF

## Dark theme

- Main background: #111111
- Secondary background: #191919
- Primary text: #F5F3EE
- Secondary text: #A6A39C
- Borders: #30302D
- Surface: #1D1D1B

These are starting design tokens. Refine them if necessary.

## Gold usage

Use gold intentionally for:

- Primary CTA buttons.
- Small navigation highlights.
- Section labels.
- Thin decorative dividers.
- Selected interaction states.
- Important visual accents.

Do not use gold everywhere.

The website must look premium even when individual sections contain no gold.

---

# 6. LIGHT AND DARK MODE

Both themes are mandatory.

Implement:

- Light mode.
- Dark mode.
- System preference support.
- Manual theme switcher.
- Persistent theme preference.
- Theme-aware reusable components.
- Appropriate contrast.
- Consistent colors across all routes.
- Correct image treatment.

Do not simply invert the entire interface.

Each theme must be intentionally designed.

The Zenith logo must remain recognizable and readable in both themes.

---

# 7. MOBILE-FIRST RESPONSIVE DESIGN

Design for mobile first, then progressively enhance for larger screens.

Test:

- 360px.
- 390px.
- 430px.
- 768px.
- 1024px.
- 1440px.
- 1920px.

Requirements:

- Responsive navigation.
- Accessible mobile menu.
- Comfortable touch targets.
- No horizontal overflow.
- Readable typography.
- Appropriate image cropping.
- Responsive grids.
- Correct section spacing.
- Mobile-friendly CTA placement.
- No desktop-only interactions.
- No cramped content.
- No oversized elements on small screens.

Mobile must feel like an intentionally designed premium experience, not a compressed desktop layout.

---

# 8. TYPOGRAPHY

Use a sophisticated typography system.

Explore:

- Manrope.
- Inter.
- DM Sans.
- Plus Jakarta Sans.
- A refined editorial serif where appropriate.

Use an elegant display typeface for major headings and a highly readable sans-serif for body content.

Avoid using too many font families.

Establish consistent styles for:

- Display headings.
- Page headings.
- Section headings.
- Body content.
- Labels.
- Navigation.
- Buttons.

Use appropriate line heights, letter spacing, and responsive font sizes.

---

# 9. IMAGE AND VISUAL DIRECTION

Photography is a major part of the Zenith identity.

Use premium architectural and lifestyle photography.

Preferred subjects:

- Modern luxury residences.
- Contemporary living rooms.
- Integrated lighting systems.
- Smart lighting scenes.
- Motorized curtains and blinds.
- Modern kitchens.
- Home theatres.
- Architectural interiors.
- Sophisticated control interfaces.
- Premium bedroom environments.

Avoid:

- Generic circuit boards.
- Random electronics.
- Unrelated smart devices.
- Robot illustrations.
- Repeated images.
- Low-quality stock imagery.

Use consistent cropping, image ratios, and image treatments.

Optimize assets and loading performance.

Where possible, use high-quality images from legitimate sources or existing approved assets.

Do not fabricate project photography or represent stock imagery as an actual Zenith installation.

---

# 10. WEBSITE STRUCTURE

Inspect existing routes and company information before deciding the final structure.

Preserve all relevant existing pages and routes.

Where supported by the actual business information, create or redesign:

- Home.
- About.
- Services.
- Individual solution pages.
- Projects or portfolio.
- Contact.
- Other existing business pages.

Do not create empty placeholder pages or invent unsupported offerings.

## HOME PAGE

### A. Navigation

Create:

- Actual Zenith logo.
- Minimal navigation.
- Clear menu structure.
- Primary consultation/contact CTA.
- Theme switcher.
- Responsive mobile navigation.

### B. Hero section

Create a strong architectural hero experience.

Suggested headline:

"Intelligence, seamlessly integrated."

Supporting copy should communicate Zenith's actual services and value.

Include:

- Primary CTA.
- Secondary CTA.
- Strong image composition.
- Clear typography hierarchy.
- Premium architectural photography.

Explore asymmetrical editorial layouts, large typography, and intentional whitespace.

Avoid generic centered text over a random gradient.

### C. Brand introduction

Introduce Zenith and explain its approach to intelligent living.

Use concise, premium copy based on verified company information.

### D. Services and solutions

Present actual services offered by Zenith.

Use varied compositions.

Do not turn every service into an identical icon-and-text card.

### E. Smart-home experience showcase

This is a mandatory major homepage section.

Detailed requirements are defined in Section 11.

### F. Technology and integration

Explain how the actual supported solutions work together.

Use visual storytelling.

### G. Why Zenith

Communicate verified company strengths, expertise, approach, and differentiators.

Do not fabricate statistics or achievements.

### H. Projects / portfolio

If real project information and photography exist, present them through an architectural portfolio layout.

Do not create fake projects.

### I. Contact / consultation CTA

Create a strong conversion section.

Include the actual contact options and working integrations.

### J. Footer

Create a refined footer with:

- Verified company information.
- Navigation.
- Contact details.
- Relevant social links.
- Appropriate legal links, if available.

---

# 11. IMMERSIVE SMART-HOME EXPERIENCE

## Concept

Create a memorable interactive section titled:

"One home. Every possibility."

Alternative:

"Your home, in perfect harmony."

This section must demonstrate what smart-home automation actually does inside a residential environment.

Do not limit the experience to ordinary service cards or static product descriptions.

The visitor must be able to explore how the same room changes across different automation scenarios.

## Scene selection

Create these scene options:

1. Day Mode.
2. Evening Mode.
3. Movie Mode.
4. Night Mode.
5. Away Mode.

Each scene must have:

- Unique ID.
- Scene title.
- Short description.
- Appropriate image asset.
- Lighting state.
- Curtain state.
- Other relevant supported device states.
- Scene-specific visual information.

## Day Mode

Visual state:

- Bright natural daylight.
- Open curtains.
- Balanced indoor lighting.
- Bright, welcoming atmosphere.

## Evening Mode

Visual state:

- Warm ambient lighting.
- Partially closed curtains.
- Comfortable evening atmosphere.
- Appropriate accent lighting.

## Movie Mode

Visual state:

- Main lights dimmed.
- Ambient accent lighting.
- Curtains closed.
- Cinema-friendly environment.

## Night Mode

Visual state:

- Very dim warm pathway lights.
- Main lights switched off.
- Comfortable bedroom environment.
- Low-intensity lighting where appropriate.

## Away Mode

Visual state:

- Lights switched off.
- Curtains configured appropriately.
- Security and monitoring represented only where supported by the actual service offering.

## Visual composition

The room must remain the hero.

Use:

- Large architectural image.
- Clear scene selection controls.
- Selected scene indicator.
- Scene description.
- Visual device state indicators.
- Minimal supporting interface.

The visitor must understand that the same room changes according to the selected mode.

Ideally, use different photographs of the same room under different lighting conditions.

If matching images are unavailable, use carefully selected consistent compositions rather than unrelated photographs.

Do not place excessive floating dashboards over the room.

## Interactive behavior

Implement genuine frontend interactivity using application state.

When the visitor selects a scene:

- Update the selected scene.
- Update the corresponding room image.
- Update the description.
- Update lighting information.
- Update curtain information.
- Update other applicable device states.

The experience must work without a page reload.

Use a reusable data-driven architecture.

Example conceptual structure:

SmartHomeScene:

- id
- title
- description
- image
- lighting
- curtains
- temperature (only when relevant)
- devices

Keep scene data separate from presentation components.

This is a website demonstration, not a real connection to home automation hardware.

Clearly distinguish simulated states from actual device integrations.

## Responsive behavior

Desktop:

- Large visual room composition.
- Scene controls placed alongside or below the image.
- Clear visual hierarchy.

Mobile:

- Large room image.
- Accessible scene selector.
- Horizontally scrollable scene options where appropriate.
- Scene details below the image.
- Comfortable touch targets.

The experience must work in both light and dark themes.

---

# 12. ADDITIONAL SMART-HOME STORYTELLING

Do not restrict visual demonstrations to the main interactive section.

Where supported by Zenith's actual services, showcase:

## Smart lighting

Show how lighting adapts to different activities and times of day.

## Automated curtains and blinds

Show natural daylight management and automated privacy.

## Home theatre

Show a cinema-ready environment with coordinated lighting and curtains.

## Climate control

Only if supported by the actual business offering.

## Smart security

Only if supported by the actual business offering.

## Centralized home control

Show how different home systems can work together.

## Scene-based automation

Explain how one user action can trigger multiple coordinated home settings.

Each section should explain the actual customer benefit through visual storytelling.

Use varied compositions to avoid repetitive layouts.

The website should feel like exploring a premium smart home rather than browsing an ordinary product catalogue.

---

# 13. DESIGN SYSTEM AND COMPONENT ARCHITECTURE

Build a maintainable, reusable design system.

Centralize:

- Color tokens.
- Typography.
- Spacing.
- Container widths.
- Grid system.
- Button variants.
- Navigation.
- Section components.
- Image treatments.
- Forms.
- Theme-aware surfaces.
- Responsive breakpoints.

Keep components modular.

Avoid unnecessary component fragmentation.

Maintain consistency across all pages.

---

# 14. FUTURE ANIMATION-READY ARCHITECTURE

This requirement is extremely important.

We do NOT want elaborate animations in Phase 1.

However, the initial code must be structured so Phase 2 animations can be added without rebuilding the entire website.

The first implementation must be motion-ready.

## Component separation

For the smart-home experience, use a modular structure such as:

- SmartHomeExperience.
- SmartHomeSceneViewer.
- SmartHomeSceneSelector.
- SmartHomeSceneDetails.
- SmartHomeDeviceIndicators.

Adapt this structure to the existing project architecture where appropriate.

## State-driven rendering

Use application state as the single source of truth.

The selected scene should determine:

- Room image.
- Lighting presentation.
- Curtain state.
- Device indicators.
- Scene description.
- Selected control.

Avoid direct DOM manipulation.

## Semantic styling hooks

Create meaningful classes or equivalent styling hooks:

- scene-image.
- scene-overlay.
- lighting-layer.
- curtain-layer.
- device-indicator.
- scene-content.
- scene-selector.

These must be attached to actual meaningful elements.

## Future animation targets

Keep the implementation ready for:

- Scene image crossfades.
- Lighting intensity transitions.
- Curtain opening and closing.
- Staggered content reveals.
- Scroll-triggered section entrances.
- Image parallax.
- Smooth scene transitions.
- Button micro-interactions.
- Page transitions.
- Device-state transitions.

## CSS variable support

Where appropriate, use CSS variables for visual states:

- Lighting intensity.
- Scene brightness.
- Overlay opacity.
- Image presentation.
- Other scene-dependent visual properties.

Keep these values driven by the selected scene state.

## Motion library

Do not install unnecessary animation libraries in Phase 1.

The architecture should allow future GSAP or Framer Motion integration if suitable for the project.

Do not create unnecessary abstraction layers just for hypothetical animation.

## Accessibility

- Respect prefers-reduced-motion.
- Maintain keyboard accessibility.
- Provide visible focus states.
- Maintain sufficient contrast.
- Ensure scene controls are accessible.

## Performance

- Optimize images.
- Avoid loading every large image unnecessarily.
- Use appropriate image loading strategies.
- Avoid excessive JavaScript.
- Maintain good mobile performance.

**Important principle:** Phase 2 should enhance the existing components, not require rebuilding the website's structure.

---

# 15. FUNCTIONAL REQUIREMENTS

Preserve required existing functionality.

Ensure:

- Navigation works.
- Internal links work.
- Contact forms work.
- Existing API integrations remain functional.
- CTA destinations are correct.
- Theme switching works.
- Theme preference persists.
- Mobile navigation works.
- Smart-home scene selection works.
- Existing business functionality remains intact.
- Existing SEO information is retained or appropriately improved.
- No broken routes.
- No missing assets.
- No console errors.

Do not replace real functionality with decorative mockups.

---

# 16. ANIMATION SCOPE — PHASE 2 ONLY

Do not implement complex animations during this phase.

Explicitly exclude:

- Complex GSAP timelines.
- Scroll-triggered animation systems.
- Parallax effects.
- Elaborate page transitions.
- Particle effects.
- Large motion effects.
- Decorative animation systems.

Phase 1 priorities:

1. Layout.
2. Typography.
3. Color.
4. Photography.
5. Visual hierarchy.
6. Smart-home interactive experience.
7. Mobile responsiveness.
8. Light and dark themes.
9. Functional correctness.
10. Future animation compatibility.

Simple functional transitions and interaction feedback are acceptable.

---

# 17. QUALITY ASSURANCE

Before completion, review the entire website.

Check:

## Design

- Every page.
- Every section.
- Typography.
- Spacing.
- Image quality.
- Visual hierarchy.
- Brand consistency.

## Responsiveness

- 360px.
- 390px.
- 430px.
- 768px.
- 1024px.
- 1440px.
- 1920px.

## Themes

- Light mode.
- Dark mode.
- System preference.
- Manual theme switching.
- Persistent selection.

## Interactive experience

- All five scene options.
- Image updates.
- Device state updates.
- Scene descriptions.
- Mobile controls.
- Keyboard accessibility.

## Functionality

- Navigation.
- Forms.
- CTA links.
- API integrations.
- Existing routes.
- SEO.
- Console errors.
- Missing assets.

Do not declare the project complete just because the homepage looks attractive on desktop.

Every relevant page must feel like part of the same premium brand.

---

# 18. EXECUTION CHECKPOINTS

Work in the following order.

## Checkpoint 1 — Project audit

Inspect the project.

Create the backup.

Create `docs/zenith-company-reference.md`.

Verify that company information and existing functionality are preserved.

## Checkpoint 2 — Competitor research

Study the listed smart-home brands.

Create `docs/zenith-design-research.md`.

Establish the final Zenith design direction.

## Checkpoint 3 — Design foundation

Create the theme tokens, typography, responsive system, component architecture, and navigation.

## Checkpoint 4 — Homepage

Implement the complete homepage.

Prioritize:
- Hero.
- Brand introduction.
- Services.
- Interactive smart-home showcase.
- Technology storytelling.
- Why Zenith.
- Projects.
- CTA.
- Footer.

Get the homepage approved in mobile, desktop, light mode, and dark mode.

## Checkpoint 5 — Remaining pages

Implement all relevant existing pages using the approved design system.

## Checkpoint 6 — QA

Test all pages, interactions, screen sizes, themes, and functionality.

Resolve issues before completion.

## Phase 2 — Animation

After Phase 1 is approved, introduce advanced motion design and transitions.

---

# 19. FINAL ACCEPTANCE CRITERIA

Phase 1 is complete only when:

1. Existing company information is documented and preserved.
2. Existing required functionality is retained.
3. Competitor research is documented.
4. A unique Zenith visual identity is implemented.
5. The complete relevant website is redesigned.
6. Light and dark themes work correctly.
7. Mobile-first responsiveness is verified.
8. Smart-home scene demonstrations are interactive.
9. All five automation scenes work.
10. Scene data and presentation are separated.
11. Components are reusable.
12. The architecture is ready for future animations.
13. No complex animations have been implemented.
14. No fake hardware connectivity is claimed.
15. All important routes and functionality are tested.

---

# FINAL CREATIVE DIRECTION

We are not building another ordinary home automation website.

We are building a digital identity for Zenith.

The website must communicate:

- Intelligent living.
- Architectural beauty.
- Premium comfort.
- Seamless technology.
- Sophisticated automation.

Do not merely describe smart-home features.

Show visitors how their everyday living environment can transform.

Let them explore different lighting scenes, room experiences, and automation possibilities.

The website should feel like stepping into a premium intelligent home.

**Research first. Document everything. Establish the brand. Design carefully. Implement responsively. Prepare for motion.**

Phase 1 must be exceptional even without animations.