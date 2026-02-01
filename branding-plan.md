# Branding Plan: Private Fairway Kiosk (IMPLEMENTED)
**Project**: Self-Service Troubleshooting UI
**Client**: Private Fairway (www.privatefairway.com)
**Status**: COMPLETE

## 1. Visual Identity
*   **App Name**: `Private Fairway: Member Support`
*   **Core Aesthetic**: "Exclusive Golf Lounge" — dark greens, rich golds, clean creams.
*   **Primary Color**: `#1b4d3e` (Deep Forest Green) - Used for Headers, User Bubbles, Primary Buttons.
*   **Accent Color**: `#c5a059` (Champagne Gold) - Used for Icons, Focus States, Highlights.
*   **Background**: `#f9f8f4` (Cream/Off-White) - Softer than pure white for better readability in dim simulator rooms.
*   **Typography**: 
    *   *Headings*: `Montserrat` (Bold, Uppercase)
    *   *Body*: `Inter` (Clean readability)

## 2. Component Design
*   **Kiosk Header**: 
    *   Simple text logo (uppercase).
    *   High-contrast "Reset Session" button for quick turnaround.
*   **Quick Action Grid**: 
    *   Large touch targets (cards).
    *   Icon-heavy for quick scanning (Projector, Wifi, Power icons).
*   **Chat Interface**:
    *   **User**: Green Bubble (`#1b4d3e`) with White Text.
    *   **AI**: White Bubble with Black Text and subtle Green borders.
    *   **Markdown**: Bold text for **Actions**, Lists for Steps.

## 3. Attribution (Footer)
*   **Developer**: Applied AI Labs.
*   **Placement**: Bottom center, fixed or scrolled.
*   **Style**: Small logo (38px), rounded corners, thin border, high contrast.
*   **Link**: Opens `www.appliedailabs.com` in new tab.

## 4. Technical Implementation
*   **Tailwind Config**: Colors applied via arbitrary values (e.g., `bg-[#1b4d3e]`) for precision matching without polluting the global theme config for a single-page app.
*   **Fonts**: Loaded via `next/font/google` in `layout.tsx`.