# TaskFlow Pro - Collaborative Task & Project Management Suite

> A state-of-the-art, fluid collaborative task and project management suite engineered for modern product teams, featuring Kanban drag-and-drop scheduling, personal focus modules, role-based admin controls, and interactive popout animations.

---

## ✨ Features & Architecture

### 🛡️ Dedicated Admin Module (Admin Console)
- **Team & Role Management**: View, invite, promote (`Admin`, `Manager`, `Member`), or remove team members with instant permission synchronization.
- **Project Portfolio Governance**: Full CRUD control over project scope, accent themes, status, and task workload tracking.
- **Real-Time System Audit Trail**: Immutable, chronological audit log capturing every task mutation, drag-and-drop action, role elevation, and data export.
- **Workspace Governance & Operational Policies**:
  - Enforce mandatory deadlines on task creation.
  - Granular deletion permissions (restrict task deletion to Admins).
  - Audio feedback & synthesized sound toggle.
  - Auto-archiving controls and one-click data backup / demo reset.
- **Bulk Administrative Operations**: Purge completed tasks in bulk, escalate overdue tasks to Urgent, and reassign workloads.

### 👤 Dedicated User Module ("My Work" Personal Workspace)
- **Personal Daily Agenda**: Curated focus view tailored to the currently active user, grouped by Urgent, In Progress, Upcoming, and Resolved.
- **Integrated Pomodoro Focus Timer**:
  - 25m Focus / 5m Short Break / 15m Long Break intervals with animated circular SVG progress rings.
  - Link active tasks directly to the timer for focused execution.
  - Audio chimes and confetti animations upon completion.
- **Daily Standup Scratchpad**: Auto-saved local scratchpad for meeting notes, blockers, and quick thoughts.
- **Live Availability Status**: Choose current working state (`🟢 Available`, `⚡ Deep Focus`, `📅 In Meetings`, `⚪ Away`) reflected across team avatars.

### 🎨 Visual Aesthetics, Micro-Animations & Popouts
- **Dark Mode & Light Mode**: Smooth theme transitions with tailored CSS custom properties and high-contrast glassmorphic surfaces.
- **Interactive Quick Peek Popouts**: Hover or click task triggers to inspect subtasks, snooze deadlines by +1 day, toggle status, or jump to full edit mode without leaving your workflow.
- **Persona & Role Switcher Popout**: Instant persona switching directly from the user footer to test team member and admin perspectives.
- **Floating Quick-Action Dock**: Floating bottom dock for rapid navigation between New Task, My Work, Kanban Board, and Admin Console.
- **Web Audio API Synthesizer**: Native zero-dependency sound feedback for clicks, drops, deadline alerts, and celebratory task completion.
- **Celebratory Confetti Engine**: Native canvas particle physics explosion on task and Pomodoro completion.

### 📋 Core Task Management
- **Interactive Kanban Board**: HTML5 drag-and-drop across Backlog, To Do, In Progress, In Review, and Completed columns.
- **Drag-and-Drop Calendar Scheduler**: Monthly scheduling view allowing users to drag tasks onto any date cell to reschedule deadlines.
- **Prioritized Tasks Directory**: Sortable table view with instant inline checkboxes and sorting across Title, Project, Priority, and Deadlines.
- **Retina-Ready Analytics & Velocity**: High-DPI canvas charts rendering priority distributions and project velocity without blurriness.
- **Collaborative Sharing & Export**: Download full workspace JSON backups or copy Markdown sprint digests to clipboard.

---

## ⌨️ Keyboard Shortcuts
- `/` - Focus quick task search bar
- `N` - Open New Task creation modal
- `Escape` - Dismiss any active modal, drawer, or popout

---

## 🚀 Getting Started

### Local Development
To run locally using any static web server:
```bash
# Using Node.js npx serve
npx -y serve .

# Or using Python
python -m http.server 3000
```
Open `http://localhost:3000` (or `http://localhost:5000`) in your web browser.

---

## 🌐 Deploy to Vercel

Deploy directly to Vercel with zero configuration:

```bash
npx -y vercel
```
Or connect this GitHub repository on [Vercel Dashboard](https://vercel.com) and deploy automatically on every push!

---

## 📄 License
MIT License. Crafted with modern web technologies.
