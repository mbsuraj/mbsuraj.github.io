# Requirements Document

## Introduction

A professional personal portfolio website for Bhanu Suraj Malla, an Applied Scientist / Data Scientist. The website serves as a digital presence showcasing work experience, research contributions, and a downloadable CV. It features a modular tab-based navigation system for easy content management, dark/light theme switching, and a professional footer with social links.

## Glossary

- **Website**: The personal portfolio web application
- **Tab_System**: The navigation component that renders page sections based on a configurable tab registry
- **Theme_Switcher**: The UI control that toggles between dark mode and light mode color schemes
- **Footer**: The persistent bottom section displaying social icon links
- **Home_Page**: The landing tab with a creative introduction and professional summary
- **Work_Page**: The tab displaying professional work experience entries
- **Research_Page**: The tab displaying research projects and published Python packages
- **CV_Page**: The tab displaying resume content with a download option for a PDF file

## Requirements

### Requirement 1: Tab-Based Navigation System

**User Story:** As a site visitor, I want to navigate between content sections using tabs, so that I can easily find the information I need.

#### Acceptance Criteria

1. THE Tab_System SHALL render navigation tabs from a configurable tab registry data structure.
2. WHEN a visitor clicks a tab, THE Tab_System SHALL update the browser URL to the tab's route path and display the corresponding page content, visually indicating the active tab.
3. WHEN the Website loads, THE Tab_System SHALL display the Home_Page tab as the default active tab.
4. WHEN a developer adds or removes an entry from the tab registry, THE Tab_System SHALL render the updated set of tabs without requiring changes to the navigation component code.
5. WHEN a visitor navigates directly to a tab URL via bookmark or shared link, THE Tab_System SHALL display the corresponding page content and visually indicate the active tab.
6. WHEN a visitor uses browser back or forward buttons, THE Tab_System SHALL navigate to the previously visited tab.

### Requirement 2: Home Page

**User Story:** As a site visitor, I want to see a creative and professional landing page, so that I get a strong first impression of Bhanu as an applied scientist.

#### Acceptance Criteria

1. THE Home_Page SHALL display the name "Bhanu Suraj Malla" and the title "Applied Scientist / Data Scientist".
2. THE Home_Page SHALL display a professional summary highlighting key expertise areas including probabilistic forecasting, scalable ML systems, and infrastructure engineering.
3. THE Home_Page SHALL display a curated list of core technical skills.
4. THE Home_Page SHALL present content using a visually distinct, creative layout that differentiates it from the other tabs.

### Requirement 3: Work Experience Page

**User Story:** As a site visitor, I want to view detailed work experience, so that I can understand Bhanu's professional background and accomplishments.

#### Acceptance Criteria

1. THE Work_Page SHALL display work experience entries in reverse chronological order.
2. THE Work_Page SHALL display for each entry: company name, job title, date range, and a list of key accomplishments.
3. THE Work_Page SHALL include entries for Amazon Inc., Circle K (Senior Data Scientist), Circle K (Data Scientist), ProviderTrust, and Cairn Oil and Gas.

### Requirement 4: Research Page

**User Story:** As a site visitor, I want to explore research contributions and published packages, so that I can evaluate Bhanu's technical depth and open-source work.

#### Acceptance Criteria

1. THE Research_Page SHALL display published Python packages including MIC (Make-it-Certain) and StationarityToolkit with descriptions of each.
2. THE Research_Page SHALL display education credentials including the Master's in Business Analytics from Arizona State University and the Bachelor's in Petroleum Engineering with Finance from IIT India.

### Requirement 5: CV Page with Download

**User Story:** As a site visitor, I want to view and download the CV, so that I can save a copy for reference or sharing.

#### Acceptance Criteria

1. THE CV_Page SHALL display a rendered view of the resume content.
2. THE CV_Page SHALL provide a download button that initiates a download of the CV as a PDF file.
3. WHEN a visitor clicks the download button, THE CV_Page SHALL deliver the PDF file to the visitor's browser.

### Requirement 6: Dark and Light Mode Toggle

**User Story:** As a site visitor, I want to switch between dark and light color themes, so that I can view the site in my preferred visual style.

#### Acceptance Criteria

1. THE Theme_Switcher SHALL provide a visible toggle control accessible from all tabs.
2. WHEN a visitor activates the Theme_Switcher, THE Website SHALL switch all page elements between dark mode and light mode color schemes.
3. THE Website SHALL default to dark mode on initial load.
4. WHEN the visitor switches themes, THE Website SHALL apply the new theme without a full page reload.

### Requirement 7: Footer with Social Links

**User Story:** As a site visitor, I want to access social and contact links from any page, so that I can connect with Bhanu through preferred channels.

#### Acceptance Criteria

1. THE Footer SHALL be visible on all tabs.
2. THE Footer SHALL display icon links for LinkedIn, GitHub, and email (mailto:mbsuraj.asu@gmail.com).
3. WHEN a visitor clicks a Footer icon link, THE Website SHALL open the corresponding URL in a new browser tab.

### Requirement 8: Deployment

**User Story:** As the site owner, I want the website to be automatically deployed to GitHub Pages when I push changes, so that the live site stays up to date.

#### Acceptance Criteria

1. THE Website SHALL be hosted at `https://mbsuraj.github.io`.
2. WHEN changes are pushed to the `main` branch, THE Website SHALL be automatically built and deployed via GitHub Actions.
