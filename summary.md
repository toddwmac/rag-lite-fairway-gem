# Project Summary: Private Fairway Support Kiosk
**Date**: February 1, 2026
**Architecture**: Kiosk / Self-Service
**Status**: LIVE (Ready for Vercel)

## 1. Architectural Pivot
We successfully refactored the application from a "General Research Tool" to a specialized "Support Kiosk".
*   **Old Model**: Sidebar with file pickers, complex persona tuning, "Analyst" view.
*   **New Model**: Touch-first "Quick Actions", auto-loaded context, "Support Agent" persona.

## 2. Optimization Phase (Final Polish)
*   **Markdown Standardization**: 
    *   Converted raw JSON/TXT data into structured Markdown (`SOP.md`, `Troubleshooting_Synth.md`).
    *   **Benefit**: Reduced token usage, improved AI comprehension of "Steps" and "Headers", and removed "hallucination bait" (irrelevant metadata).
*   **Deprecation of PDF**:
    *   Removed `pdf-parse` library and logic.
    *   **Benefit**: Faster build times, zero risk of Vercel function timeouts, and smaller bundle size.
*   **UI Refinements**:
    *   Added `react-markdown` for clear formatting of troubleshooting steps.
    *   Implemented "Input Auto-Clear" for snappy kiosk feel.
    *   Added custom "Applied AI Labs" footer branding.

## 3. Key Learnings & Decisions
*   **Context Strategy**: For a kiosk, asking users to "select files" is bad UX. We now auto-load *all* files in `/data` on mount. This ensures the AI always has the full troubleshooting manual.
*   **Prompt Engineering**:
    *   **Anonymous Citations**: Users trust "The System Protocols" more than "According to file-v2.txt". We updated the system prompt to forbid filename mentions.
    *   **External Fallback**: We added a strict rule: if the answer isn't in the docs, the AI *must* explicitly state it is checking general knowledge.

## 4. Current Feature Set
*   **Quick Actions**: Projector, Connection, Shot Data, Software Freeze, Putting, System Reboot.
*   **Reset Protocol**: One-click session clear to ensure privacy for the next user.
*   **Branding**: Fully aligned with Private Fairway (Green/Gold).

## 5. Next Steps
*   **Deployment**: Push to Vercel production.
*   **Data Expansion**: Add more `.md` files to `/data` as new procedures are written.