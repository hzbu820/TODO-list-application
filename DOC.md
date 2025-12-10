# Todo List Solution Documentation

> This document responds directly to the prompts in the challenge README.

## 1. Demand Understanding & Detail Control (需求理解与细节把控)
**Requirement**: "Interpret implied needs and make reasonable decisions."

- **Empty State**: Implemented a "No tasks found" state to guide users when the list is empty or filtered to zero results.
- **Input Validation**: Prevented creating empty tasks to maintain data integrity.
- **Visual Feedback**: Added hover states/focus states to all interactive elements to ensure the app feels responsive.
- **Persistence Strategy**: Implemented `localStorage` sync so users don't lose data on refresh, which is a critical implicit requirement for any usable Todo app.
- **Navigation/Sorting**: Added sorting options (Date vs Priority) because a static list becomes unmanageable as tasks grow.

## 2. Technology Selection & Architecture (技术选型与架构设计)
**Stack**: React + Vite + TailwindCSS

- **React**: Chosen for its component-based architecture, which is perfect for a list of repeated items (`TodoItem`). It creates a predictable state flow (`App` -> `TodoInput`/`TodoList`).
- **Vite**: Selected over Create React App for its superior build speed and modern ESM development server.
- **TailwindCSS**: Chosen to enable rapid UI prototyping. It allows for a custom design system (colors, spacing) without managing large CSS files.
- **No Backend**: Intentionally chose a client-side architecture with `localStorage`. A backend would be overkill for a single-user coding challenge and would complicate deployment/running for the reviewer.

## 3. Implementation & Extension Ability (实现与扩展能力)
**Core Features**:
- ✅ Add, Delete, Toggle Completion.
- ✅ List View.

**Extensions Implemented**:
- ✅ **Priority System**: Tasks can be High (Red), Medium (Amber), or Low (Emerald).
- ✅ **Search**: Real-time text filtering.
- ✅ **Sorting**: Toggle between "Latest" and "Priority" based sorting.
- ✅ **Animations**: Used CSS transitions and keyframes for a polished feel (custom checkbox animation).

## 4. AI Usage Statement (对 AI 的使用)
**Tool Used**: Google Gemini Agent (Antigravity)

**How it helped**:
- **Scaffolding**: Generated the initial project structure and boilerplate React components.
- **Logic Generation**: Wrote the base logic for the `useLocalStorage` hook to handle edge cases (like JSON parsing errors).
- **CSS Animation**: Suggested the keyframe structure for the custom checkmark animation.

**My Thinking & Modification**:
- **Design Overhaul**: The initial AI output was generic. I completely redid the UI to reference modern "Linear-style" aesthetics (minimalist, no emojis, custom fonts) to demonstrate product sense.
- **Bug Fixes**: The AI originally suggested a Tailwind v4 config that broke the build. I manually diagnosed the PostCSS error, cleaned the environment, and corrected the configuration files.
- **Refactoring**: I optimized the filtering logic by moving it into a `useMemo` hook to ensure performance doesn't degrade with many tasks.

## 5. How to Run
```bash
npm install
npm run dev
```
Open `http://localhost:5173`.
