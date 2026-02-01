# Project Summary: Private Fairway Support Kiosk
**Date**: February 1, 2026
**Architecture**: Kiosk / Self-Service
**Status**: LIVE (Local Testing Passed)

## 1. Architectural Pivot
We successfully refactored the application from a "General Research Tool" to a specialized "Support Kiosk".
*   **Old Model**: Sidebar with file pickers, complex persona tuning, "Analyst" view.
*   **New Model**: Touch-first "Quick Actions", auto-loaded context, "Support Agent" persona.

## 2. Key Learnings & Decisions
*   **Context Strategy**: For a kiosk, asking users to "select files" is bad UX. We now auto-load *all* files in `/data` on mount. This ensures the AI always has the full troubleshooting manual.
*   **Visual Rendering**: Raw text output is insufficient for technical support. We integrated `react-markdown` to ensure steps (1, 2, 3...) and UI elements (**Settings > About**) are rendered clearly.
*   **Prompt Engineering**:
    *   **Anonymous Citations**: Users trust "The System Protocols" more than "According to file-v2.txt". We updated the system prompt to forbid filename mentions.
    *   **External Fallback**: We added a strict rule: if the answer isn't in the docs, the AI *must* explicitly state it is checking general knowledge. This prevents confusion between "Official Facility Rules" and "General Golf Knowledge".
*   **Componentization**: Moving to `KioskHeader`, `QuickActions`, and `ChatInterface` allows for easier maintenance and potential future expansion (e.g., adding a "Book a Lesson" quick action).

## 3. Current Feature Set
*   **Quick Actions**: Projector, Connection, Shot Data, Software Freeze, Putting, System Reboot.
*   **Reset Protocol**: One-click session clear to ensure privacy for the next user.
*   **Branding**: Fully aligned with Private Fairway (Green/Gold) with Applied AI Labs attribution.

## 4. Next Steps
*   **Deployment**: Push to Vercel production.
*   **Data Expansion**: Add more PDFs to the `/data` folder to cover "Tournament Setup" and "League Rules".
