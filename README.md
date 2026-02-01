# Private Fairway: Member Support Kiosk

**Version**: 2.0 (Kiosk Edition)
**Status**: Live / Production Ready
**Powered By**: Next.js 16, Vercel AI SDK, Claude 3 Haiku

## Overview
This application is a self-service troubleshooting kiosk designed for **Private Fairway Golf Simulators**. It replaces the need for members to call support for common issues like projector freezes, connection drops, or software glitches.

The interface is optimized for **tablets/touchscreens** and prioritizes speed and direct answers over complex research.

## Key Features
*   **Quick Action Grid**: One-tap buttons for the top 6 most common issues (Projector, Connection, Shots, etc.).
*   **Auto-Context RAG**: Automatically injects all available troubleshooting SOPs (PDFs, Text) into the AI context. No file selection required.
*   **Hybrid Intelligence**: 
    *   *Primary*: Answers strictly from the provided facility SOPs.
    *   *Fallback*: Uses general knowledge if the issue isn't in the guides (with a strict disclaimer).
*   **Kiosk UX**: Large touch targets, simplified inputs, and a "Reset Session" button for the next member.

## Tech Stack
*   **Frontend**: Next.js 16 (App Router), Tailwind CSS v4.
*   **Backend**: Vercel AI SDK streaming response.
*   **Model**: Anthropic Claude 3 Haiku (Fast, low latency).
*   **Data Source**: Local `/data` directory containing Markdown and PDF SOPs.
*   **Styling**: Private Fairway Brand (Deep Green `#1b4d3e`, Gold `#c5a059`).

## Local Setup

1.  **Clone & Install**:
    ```bash
    git clone [repo-url]
    npm install
    ```

2.  **Environment Variables**:
    Create a `.env.local` file:
    ```
    ANTHROPIC_API_KEY=sk-ant-api03-...
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

## Branding
*   **Primary Color**: `#1b4d3e` (Private Fairway Green)
*   **Accent Color**: `#c5a059` (Gold/Champagne)
*   **Font**: Montserrat (Headers), Inter (Body)
*   **Attribution**: "Built by Applied AI Labs" in the footer.