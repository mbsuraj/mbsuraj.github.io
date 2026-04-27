# Implementation Plan: Personal Website

## Overview

Incremental build of a React 18 + TypeScript + Vite personal portfolio site with tab-based navigation, dark/light theming, static data pages, and GitHub Pages deployment. Each task builds on the previous — foundational setup first, then shared components, then pages, then testing, then deployment wiring.

## Tasks

- [x] 1. Scaffold Vite + React + TypeScript project and configure Tailwind CSS
  - Initialize project with `npm create vite@latest . -- --template react-ts`
  - Install dependencies: `tailwindcss @tailwindcss/vite react-router-dom react-icons`
  - Configure `tailwind.config.ts` with `darkMode: "class"`
  - Set up `src/styles/global.css` with Tailwind directives
  - Update `src/main.tsx` to import global styles
  - Install dev dependencies: `vitest @testing-library/react @testing-library/jest-dom jsdom fast-check`
  - Configure Vitest in `vite.config.ts` with jsdom environment
  - _Requirements: 1.1, 6.2, 6.3_

- [x] 2. Create ThemeProvider context and ThemeToggle component
  - [x] 2.1 Implement ThemeContext with `theme` state and `toggleTheme` function
    - Create `src/context/ThemeContext.tsx` with `ThemeContextValue` interface
    - Default theme to `"dark"`, toggle `dark` class on `document.documentElement`
    - _Requirements: 6.2, 6.3, 6.4_
  - [x] 2.2 Implement ThemeToggle component
    - Create `src/components/ThemeToggle.tsx` consuming ThemeContext
    - Render sun/moon icon toggle button
    - _Requirements: 6.1_
  - [ ]* 2.3 Write property test for theme toggle round-trip
    - **Property 5: Theme toggle round-trip**
    - **Validates: Requirements 6.2**

- [x] 3. Create tab registry and TabNavigation component
  - [x] 3.1 Define tab registry data structure
    - Create `src/data/tabRegistry.ts` with `TabEntry` interface and registry array
    - Include entries for Home (`/`), Work Experience (`/work`), Research (`/research`), CV (`/cv`)
    - _Requirements: 1.1, 1.4_
  - [x] 3.2 Implement TabNavigation component
    - Create `src/components/TabNavigation.tsx` rendering `NavLink` components from tab registry
    - Apply active tab styling based on current route
    - _Requirements: 1.2, 1.5_
  - [ ]* 3.3 Write property test for tab registry rendering
    - **Property 1: Tab registry drives rendered tab count**
    - **Validates: Requirements 1.1, 1.4**
  - [ ]* 3.4 Write property test for tab click navigation
    - **Property 2: Tab click navigates to correct route**
    - **Validates: Requirements 1.2**

- [x] 4. Create Footer component
  - [x] 4.1 Implement Footer with social icon links
    - Create `src/components/Footer.tsx` with LinkedIn, GitHub, and email (mailto:mbsuraj.asu@gmail.com) links
    - Use `react-icons` for icons, open links in new tab (`target="_blank"`)
    - _Requirements: 7.1, 7.2, 7.3_
  - [ ]* 4.2 Write property test for footer persistence across tabs
    - **Property 6: Footer persists across all tabs**
    - **Validates: Requirements 7.1**

- [x] 5. Wire App layout with HashRouter, routes, and shared components
  - Create `src/App.tsx` wrapping layout in `HashRouter` and `ThemeProvider`
  - Render Header with ThemeToggle, TabNavigation, route-based content area, and Footer
  - Generate routes dynamically from tab registry
  - Set default route to Home (`/`)
  - _Requirements: 1.2, 1.3, 1.5, 1.6_

- [x] 6. Checkpoint - Verify foundational setup
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Create static data files
  - [x] 7.1 Create work experience data
    - Create `src/data/workExperience.ts` with `WorkEntry` interface and entries for Amazon, Circle K (Senior), Circle K, ProviderTrust, Cairn Oil and Gas in reverse chronological order
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 7.2 Create research data
    - Create `src/data/research.ts` with `PythonPackage` and `Education` interfaces
    - Include MIC (Make-it-Certain) and StationarityToolkit packages
    - Include M.S. from Arizona State University and B.Tech from IIT India
    - _Requirements: 4.1, 4.2_
  - [x] 7.3 Create skills data
    - Create `src/data/skills.ts` with skills array including probabilistic forecasting, scalable ML systems, infrastructure engineering
    - _Requirements: 2.3_

- [x] 8. Implement page components
  - [x] 8.1 Implement HomePage
    - Create `src/pages/HomePage.tsx` displaying name, title, professional summary, and skills list
    - Use a visually distinct creative layout
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  - [x] 8.2 Implement WorkPage
    - Create `src/pages/WorkPage.tsx` mapping over `workExperience` data
    - Render company, title, date range, and accomplishments for each entry
    - _Requirements: 3.1, 3.2, 3.3_
  - [ ]* 8.3 Write property test for work data rendering completeness
    - **Property 3: Data rendering completeness**
    - **Validates: Requirements 3.2**
  - [ ]* 8.4 Write property test for work entries chronological order
    - **Property 4: Work entries display in reverse chronological order**
    - **Validates: Requirements 3.1**
  - [x] 8.5 Implement ResearchPage
    - Create `src/pages/ResearchPage.tsx` rendering packages and education sections
    - _Requirements: 4.1, 4.2_
  - [x] 8.6 Implement CVPage
    - Create `src/pages/CVPage.tsx` with rendered resume content and PDF download button
    - Download button links to `/resume.pdf` in public directory
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 9. Checkpoint - Verify all pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ]* 10. Write unit tests for pages and components
  - [ ]* 10.1 Write unit tests for HomePage
    - Verify name, title, and summary render
    - _Requirements: 2.1, 2.2_
  - [ ]* 10.2 Write unit tests for WorkPage
    - Verify all 5 companies are present
    - _Requirements: 3.3_
  - [ ]* 10.3 Write unit tests for ResearchPage
    - Verify MIC and StationarityToolkit displayed, education credentials present
    - _Requirements: 4.1, 4.2_
  - [ ]* 10.4 Write unit tests for CVPage
    - Verify download button with correct PDF href
    - _Requirements: 5.2_
  - [ ]* 10.5 Write unit tests for theme default and Footer links
    - Verify dark mode default, footer has LinkedIn/GitHub/email with `target="_blank"`
    - _Requirements: 6.3, 7.2, 7.3_
  - [ ]* 10.6 Write unit test for default active tab
    - Verify Home tab is active on initial load
    - _Requirements: 1.3_

- [x] 11. Add placeholder resume PDF and configure deployment
  - [x] 11.1 Add placeholder resume.pdf to public directory
    - Place `resume.pdf` in `public/` folder
    - _Requirements: 5.2, 5.3_
  - [x] 11.2 Create GitHub Actions deploy workflow
    - Create `.github/workflows/deploy.yml` with build and deploy steps
    - Trigger on push to `main`, use `actions/deploy-pages@v4`
    - _Requirements: 8.1, 8.2_

- [x] 12. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with Vitest (minimum 100 iterations per property)
- All content is static TypeScript data — no backend needed
- HashRouter used for GitHub Pages compatibility
