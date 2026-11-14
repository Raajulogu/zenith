# Zenith — Company Reference Document

> **Document Type:** Single Source of Truth for Zenith Verified Company Information  
> **Redesign Project Phase:** 1  
> **Source:** Existing Codebase Audit (`app/page.tsx`, `app/layout.tsx`, `public/assets/`, Git Log history)

---

## 1. Company Overview

- **Brand Name:** Zenith
- **Parent / Operating Entity:** Lumiwaves (represented as "Zenith by Lumiwaves")
- **Industry:** Luxury Smart Home Automation & Architectural Technology
- **Primary Business Scope:** Design, engineering, and installation of premium residential automation systems, architectural lighting, motorized shading, multi-room audio, biometric security, and tactile control panels for luxury villas, penthouses, and architectural residences.
- **Headquarters / Experience Center:** 127, Vellalar Street, Puducherry 605001, India.
- **Copyright Statement:** `© 2026 Zenith by Lumiwaves. All rights reserved.`

---

## 2. Brand Identity & Logo Details

- **Brand Personality:**
  - Architectural, confident, understated, intelligent, serene, and technologically refined.
  - Focuses on how intelligent living *feels*, rather than technical clutter or gadgetry.
- **Core Brand Message:**
  - *"Intelligence, seamlessly integrated."*
  - Supporting brand claims: *"Intelligent Living, Simplified."*, *"The Art of Living Intelligently."*, *"One home. Every possibility."*, *"Your home, in perfect harmony."*
- **Logo Asset:**
  - File: `public/assets/ZENITH-LOGO.png`
  - Dimensions: 5789 × 8192 px (RGBA with transparent background).
  - Active Content Bounding Box: `(X: 266 to 5583, Y: 3178 to 4813)` — ratio ~ 3.25 : 1.
  - Treatment: Clean, modern uppercase wordmark "ZENITH".
  - Theme Application: High-contrast white/light gold on dark backgrounds, dark charcoal/deep gold on light backgrounds. Original proportions, kerning, and architectural styling must be preserved without recreation using generic fonts.

---

## 3. Company Description & Positioning

Zenith delivers bespoke residential automation systems that marry high-end architectural design with dependable, local-first engineering. Zenith systems are designed for luxury homeowners, architects, and interior designers who demand intuitive control without visual clutter or reliance on fragile cloud connections.

Key differentiators verified in the project:
1. **Local-First Architecture:** System functions reliably even if external internet connection is interrupted.
2. **Tactile Black Glass & Brushed Gold Hardware:** Ultra-thin bezels, capacitive touch switches, and wall panels engineered for architectural interiors.
3. **10-Year Hardware Reliability:** Built to outlast consumer-grade gadgets.
4. **Dedicated Automation Specialist:** Direct engineering access for planning, commissioning, and continuous support rather than an automated helpdesk.

---

## 4. Services & Solutions

1. **Residential Automation Ecosystem**
   - Whole-home synchronized scene control (e.g., Morning, Day, Evening, Cinema, Night, Away).
   - Unified control across wall panels, mobile application, and intuitive automation triggers.

2. **Architectural & Circadian Lighting**
   - Circadian rhythm tuning (adjusts color temperature and intensity to match natural sunlight).
   - Ambient, task, and accent lighting integration with smooth, flicker-free dimming (0–100%).
   - Preset mood scenes: Crisp Daylight, Warm Sunset, Cinema Night, Pathway Night.

3. **Motorized Drapery & Window Shading**
   - Whisper-quiet motorized tracks and roller blinds.
   - Solar positioning integration for daylight harvesting and energy management.
   - Privacy and blackout automation for bedrooms and media rooms.

4. **Multi-Zone Climate & Comfort**
   - Multi-zone temperature regulation (heating, cooling, eco-mode).
   - Integration with architectural HVAC, linear diffusers, and concealed thermostats.

5. **Integrated Security & Perimeter Sentry**
   - Biometric door access (encrypted fingerprint, deadbolt integration, and automated relocking).
   - High-definition 2K HDR surveillance cameras with local storage and AI target recognition.
   - Multi-radar perimeter sensing without false alarms.
   - Security modes: Armed Away, Perimeter Only, Night Guard, and deterrence strobe flash.

6. **Lossless Multi-Zone Audio & Home Cinema**
   - High-resolution, multi-room audio streaming (96kHz / 24-bit lossless playback).
   - Coordinated home cinema scenes integrating blackout shades, dimmed lighting, and AV systems.

---

## 5. Product Categories (Hardware Lineup)

The project references specific hardware categories corresponding to assets in `public/assets/`:
1. **Zenith Smart Hub / Central Controller (`prod-hub.jpg`):** Central offline-first automation engine.
2. **Tactile Touch Switch Panels (`prod-panel.jpg`, `prod-switch.jpg`, `zenith-panel.jpg`, `why-panels.jpg`):** Architectural black glass touch panels with brushed gold chamfers.
3. **Architectural Lighting Controllers (`prod-lighting.jpg`):** In-wall and DIN-rail dimmers and tunable white LED drivers.
4. **Biometric Smart Deadbolt Lock (`prod-lock.jpg`):** Keyless biometric entry with automated deadbolt mechanism.
5. **Motorized Curtain & Shade Actuators:** Ultra-quiet motorized tracks.
6. **Radar Presence & Environmental Sensors:** High-precision millimeter-wave sensors detecting subtle human occupancy.

---

## 6. Contact & Experience Center Details

- **Telephone:** `+91 98765 43210`
- **Email:** `hello@lumiwaves.in`
- **Showroom / Experience Center:**
  - Zenith Experience Center by Lumiwaves
  - 127, Vellalar Street, Puducherry 605001, India.
  - Offers private consultations and hands-on demonstrations of switch panels, circadian lighting, and security systems.

---

## 7. Existing Routes & Navigation

### Current Routes:
- `/` (Single-page landing experience with modal consultation flow)

### Section Anchors in Navigation:
- `#hero` (Hero + Core Philosophy)
- `#why-zenith` (Core Value Pillars & Differentiators)
- `#control` (Interactive Room Showcase: Lighting, Climate, Shading, Audio)
- `#security` (Live Security Sentry: Biometric Lock, 2K Camera, Radar)
- Modal: `Book A Demo` / Private Consultation

### Primary Conversion Actions:
- **Primary CTA:** "Book A Demo" / "Schedule Private Consultation"
- **Secondary CTA:** "Experience Smart Home" (smooth-scrolls to interactive showcase)

---

## 8. Integrations & Technical Functionality

- **Framework:** Next.js 16.4.0 (App Router, Turbopack, React 19.3.0)
- **Styling:** Tailwind CSS v4, custom CSS variables, responsive fluid typography.
- **Icons:** `lucide-react` (v1.55.0)
- **State Management:** React client-side state (`useState`, `useEffect`) driving:
  - Mobile menu toggle
  - Theme switching (to be enhanced to persistent light/dark tokens)
  - Interactive smart-home scene simulation
  - Security lock toggle with 6-second auto-relock timeout
  - Strobe deterrence flash effect
  - Interactive consultation booking form with validation and confirmation screen
- **APIs & CMS:** Currently client-simulated. No third-party API keys or external database dependencies exist in the repository.

---

## 9. SEO & Metadata

- **Page Title:** `Zenith — Luxury Smart Home Automation | Lumiwaves`
- **Meta Description:** `Transform your residence into a smarter, safer, and effortless sanctuary with Zenith's luxury residential automation ecosystem.`
- **Target Audience:** Luxury homeowners, modern architects, interior designers, villa developers.

---

## 10. Existing Asset Inventory (`public/assets/`)

| Asset Name | Resolution | Format | Role & Content |
|---|---|---|---|
| `ZENITH-LOGO.png` | 5789 × 8192 | PNG (RGBA) | Master brand logo (transparent background) |
| `control-home.jpg` | 1376 × 768 | JPEG | Luxury penthouse living room with ambient lighting |
| `security-smart.jpg` | 1376 × 768 | JPEG | Twilight modern villa with exterior illumination |
| `hero-lifestyle.jpg` | 1376 × 768 | JPEG | Ultra-luxury penthouse interior overlooking city skyline |
| `hero-house.jpg` | 1600 × 1008 | JPEG | Modern architectural residence exterior at sunset |
| `zenith-house.jpg` | 1280 × 1024 | JPEG | Contemporary villa architecture with glass facades |
| `zenith-room.jpg` | 912 × 1200 | JPEG | Luxury interior living space with architectural lighting |
| `exp-room.jpg` | 1600 × 1008 | JPEG | Living room scene suitable for lighting & mode changes |
| `zenith-panel.jpg` | 912 × 1200 | JPEG | Wall-mounted tactile glass switch panel |
| `why-panels.jpg` | 1408 × 1200 | JPEG | Switch panel close-up detailing chamfered gold finish |
| `prod-hub.jpg` | 768 × 768 | JPEG | Smart central automation controller hardware |
| `prod-panel.jpg` | 768 × 768 | JPEG | Multi-button architectural touch panel |
| `prod-switch.jpg` | 768 × 768 | JPEG | Architectural switch plate |
| `prod-lighting.jpg` | 768 × 768 | JPEG | Smart lighting fixture and driver module |
| `prod-lock.jpg` | 768 × 768 | JPEG | Biometric smart door lock hardware |
| `story-1.jpg` | 900 × 700 | JPEG | Morning routine / breakfast bar with natural sunlight |
| `story-2.jpg` | 900 × 700 | JPEG | Evening dining & entertaining ambiance |
| `story-3.jpg` | 900 × 700 | JPEG | Relaxed night scene in private bedroom suite |

---

## 11. Missing Information Requiring User Confirmation

1. **Legal Business Entity:** Exact registered business name (e.g., Lumiwaves Technologies Pvt. Ltd.) and tax/registration identifiers.
2. **Social Media URLs:** Exact profile links for Instagram, LinkedIn, YouTube, and X (Twitter).
3. **Form Submissions Endpoint:** Whether consultation requests should dispatch emails (e.g. via Resend, SendGrid) or integrate with a CRM (e.g. HubSpot, Zoho).
4. **Additional Subpages:** Whether separate dedicated routes (`/about`, `/services`, `/solutions/[slug]`, `/portfolio`, `/contact`) should be generated alongside the comprehensive homepage.

*All documented facts above are strictly verified from existing project files without fabrication.*

