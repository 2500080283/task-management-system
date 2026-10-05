/**
 * TaskFlow Pro - Collaborative Task & Project Management System
 * Enhanced with Separate Admin & User Modules, Pomodoro Focus Timer,
 * Sound Effects, Dark/Light Themes, Animated Popouts, and Audit Trails.
 */

// ============================================================================
// SEED DATA & CONSTANTS
// ============================================================================

const INITIAL_PROJECTS = [
  { id: 'proj-1', title: '🚀 E-Commerce Redesign', desc: 'Next-gen shopping UX, checkout redesign & conversion optimization.', color: '#4f46e5', status: 'Active' },
  { id: 'proj-2', title: '📱 Mobile iOS App v2', desc: 'SwiftUI architecture refactor with offline sync & push notifications.', color: '#0ea5e9', status: 'Active' },
  { id: 'proj-3', title: '📊 Q3 Growth Marketing', desc: 'Product Hunt campaign, referral loop, and onboarding optimization.', color: '#f59e0b', status: 'Active' },
  { id: 'proj-4', title: '⚙️ Cloud Infrastructure', desc: 'Zero-trust IAM security, Kubernetes cluster scaling, and CI/CD pipelines.', color: '#10b981', status: 'Active' }
];

const INITIAL_TEAM_MEMBERS = [
  { id: 'admin', name: 'Admin', role: 'Workspace Administrator', department: 'Management', avatar: 'AD', permission: 'Admin', status: 'online' },
  { id: 'user', name: 'User', role: 'Standard User', department: 'Productivity', avatar: 'US', permission: 'Member', status: 'online' }
];

function getRelativeDate(daysOffset) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

const INITIAL_TASKS = [
  {
    id: 'TSK-101',
    title: 'Architect dynamic micro-frontend state store',
    desc: 'Implement lightweight reactive state bus between shopping cart and product catalog components.',
    projectId: 'proj-1',
    status: 'in-progress',
    priority: 'Urgent',
    deadline: getRelativeDate(1), // Tomorrow
    assigneeId: 'admin',
    subtasks: [
      { id: 'sub-1', title: 'Define event bus interfaces', done: true },
      { id: 'sub-2', title: 'Add optimistic UI cache', done: true },
      { id: 'sub-3', title: 'Write integration test specs', done: false }
    ],
    comments: [
      { id: 'c-1', author: 'Admin', text: 'Checked the PR draft. Performance benchmarks look 30% faster!', time: '2 hours ago' },
      { id: 'c-2', author: 'User', text: 'Finishing up optimistic rollbacks today.', time: '45 mins ago' }
    ]
  },
  {
    id: 'TSK-102',
    title: 'Redesign one-click checkout experience',
    desc: 'Revamp mobile checkout funnel with Apple Pay, Google Pay, and localized tax calculations.',
    projectId: 'proj-1',
    status: 'review',
    priority: 'High',
    deadline: getRelativeDate(3),
    assigneeId: 'user',
    subtasks: [
      { id: 'sub-4', title: 'Figma high-fidelity prototypes', done: true },
      { id: 'sub-5', title: 'Design system tokens validation', done: true },
      { id: 'sub-6', title: 'Accessibility contrast review', done: true }
    ],
    comments: [
      { id: 'c-3', author: 'User', text: 'Ready for stakeholder sign-off in review column.', time: 'Yesterday' }
    ]
  },
  {
    id: 'TSK-103',
    title: 'Implement push notifications & background sync',
    desc: 'Integrate APNs and background fetch handler for real-time order tracking updates on iOS.',
    projectId: 'proj-2',
    status: 'todo',
    priority: 'High',
    deadline: getRelativeDate(5),
    assigneeId: 'admin',
    subtasks: [
      { id: 'sub-7', title: 'Configure APNs certificates', done: true },
      { id: 'sub-8', title: 'Build background task runner', done: false }
    ],
    comments: []
  },
  {
    id: 'TSK-104',
    title: 'Benchmark Kubernetes cluster autoscaling latency',
    desc: 'Simulate 50k concurrent checkout requests to verify horizontal pod autoscaler thresholds.',
    projectId: 'proj-4',
    status: 'done',
    priority: 'Medium',
    deadline: getRelativeDate(-2), // Completed
    assigneeId: 'user',
    subtasks: [
      { id: 'sub-9', title: 'Run k6 load test suite', done: true },
      { id: 'sub-10', title: 'Document Grafana metric spikes', done: true }
    ],
    comments: [
      { id: 'c-4', author: 'User', text: 'Scaled gracefully up to 75k RPS under 180ms p99.', time: '2 days ago' }
    ]
  },
  {
    id: 'TSK-105',
    title: 'Audit SOC-2 compliance for user data vault',
    desc: 'Verify AES-256 encryption at rest and rotate KMS root credential keys before external audit.',
    projectId: 'proj-4',
    status: 'todo',
    priority: 'Urgent',
    deadline: getRelativeDate(0), // Due Today
    assigneeId: 'admin',
    subtasks: [
      { id: 'sub-11', title: 'Review IAM role permissions', done: false },
      { id: 'sub-12', title: 'Export CloudTrail audit hashes', done: false }
    ],
    comments: []
  },
  {
    id: 'TSK-106',
    title: 'Draft Product Hunt launch campaign & demo video',
    desc: 'Create animated teaser GIFs, interactive product walkthroughs, and draft maker commentary.',
    projectId: 'proj-3',
    status: 'in-progress',
    priority: 'High',
    deadline: getRelativeDate(4),
    assigneeId: 'user',
    subtasks: [
      { id: 'sub-13', title: 'Record 60s product screencast', done: true },
      { id: 'sub-14', title: 'Write introductory blog post', done: false }
    ],
    comments: []
  },
  {
    id: 'TSK-107',
    title: 'Migrate legacy CSS to container queries & modern tokens',
    desc: 'Refactor complex product cards to utilize native CSS container queries for ultra-fluid responsive layouts.',
    projectId: 'proj-1',
    status: 'done',
    priority: 'Low',
    deadline: getRelativeDate(-5),
    assigneeId: 'admin',
    subtasks: [
      { id: 'sub-15', title: 'Audit breakpoint regressions', done: true }
    ],
    comments: []
  },
  {
    id: 'TSK-108',
    title: 'Setup automated customer referral rewards webhook',
    desc: 'Trigger referral credit vouchers automatically upon successful friend verification.',
    projectId: 'proj-3',
    status: 'backlog',
    priority: 'Medium',
    deadline: getRelativeDate(9),
    assigneeId: 'user',
    subtasks: [],
    comments: []
  }
];

const INITIAL_AUDIT_LOGS = [
  { id: 'aud-1', action: 'CREATE', type: 'task', text: 'Task "TSK-101" created in E-Commerce Redesign', user: 'Admin', time: '10 mins ago' },
  { id: 'aud-2', action: 'STATUS', type: 'task', text: 'Task "TSK-104" moved to Completed', user: 'User', time: '2 hours ago' },
  { id: 'aud-3', action: 'UPDATE', type: 'project', text: 'Project "Mobile iOS App v2" updated', user: 'Admin', time: '5 hours ago' },
  { id: 'aud-4', action: 'LOGIN', type: 'system', text: 'Workspace admin session initialized', user: 'Admin', time: 'Today' }
];

// ============================================================================
// AUDIO SOUND EFFECTS (WEB AUDIO API SYNTHESIZER)
// ============================================================================

class SoundFX {
  constructor() {
    this.enabled = localStorage.getItem('taskflow_sound') !== 'false';
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('taskflow_sound', this.enabled);
    return this.enabled;
  }

  play(type) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === 'click') {
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.04);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'complete') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);       // C5
        osc.frequency.setValueAtTime(659.25, now + 0.07); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.14); // G5
        osc.frequency.setValueAtTime(1046.5, now + 0.22); // C6
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'drop') {
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.06);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'alert') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(587.33, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      // Audio playback silently suppressed
    }
  }
}

// ============================================================================
// MAIN APPLICATION CLASS
// ============================================================================

class TaskFlowApp {
  constructor() {
    this.soundFX = new SoundFX();
    this.projects = this.loadProjects();
    this.teamMembers = this.loadTeamMembers();
    this.tasks = this.loadTasks();
    this.auditLogs = this.loadAuditLogs();

    // Session & User State
    this.currentUser = this.teamMembers.find(m => m.permission === 'Admin') || this.teamMembers[0];

    // Navigation & Filters
    this.currentView = 'kanbanView';
    this.activeProjectId = 'all';
    this.searchQuery = '';
    this.priorityFilter = 'all';
    this.tableSort = { field: 'deadline', direction: 'asc' };

    // Calendar state
    this.calCurrentDate = new Date();

    // Editing State (Task Modal)
    this.editingTaskId = null;
    this.tempSubtasks = [];
    this.tempComments = [];

    // Pomodoro Timer State
    this.pomoMode = 'focus'; // focus (25m) | shortBreak (5m) | longBreak (15m)
    this.pomoDurations = { focus: 25 * 60, shortBreak: 5 * 60, longBreak: 15 * 60 };
    this.pomoTimeLeft = this.pomoDurations.focus;
    this.pomoTimerId = null;
    this.pomoIsRunning = false;
    this.pomoCompletedSessions = 0;

    // Confetti particles
    this.confettiCanvas = document.getElementById('confettiCanvas');
    this.confettiCtx = this.confettiCanvas?.getContext('2d');
    this.particles = [];

    this.initTheme();
    this.initElements();
    this.bindEvents();
    this.initDragAndDrop();
    this.render();
  }

  // ==========================================================================
  // PERSISTENCE & DATA MANAGEMENT
  // ==========================================================================
  loadProjects() {
    try {
      const stored = localStorage.getItem('taskflow_projects');
      return stored ? JSON.parse(stored) : INITIAL_PROJECTS;
    } catch (e) {
      return INITIAL_PROJECTS;
    }
  }

  saveProjects() {
    try {
      localStorage.setItem('taskflow_projects', JSON.stringify(this.projects));
    } catch (e) {
      console.error(e);
    }
  }

  loadTeamMembers() {
    try {
      const stored = localStorage.getItem('taskflow_members');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.some(m => m.id === 'usr-1' || m.name === 'Alex Rivera')) {
          localStorage.setItem('taskflow_members', JSON.stringify(INITIAL_TEAM_MEMBERS));
          return INITIAL_TEAM_MEMBERS;
        }
        return parsed;
      }
      return INITIAL_TEAM_MEMBERS;
    } catch (e) {
      return INITIAL_TEAM_MEMBERS;
    }
  }

  saveTeamMembers() {
    try {
      localStorage.setItem('taskflow_members', JSON.stringify(this.teamMembers));
    } catch (e) {
      console.error(e);
    }
  }

  loadTasks() {
    try {
      const stored = localStorage.getItem('taskflow_tasks');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.some(t => t.assigneeId === 'usr-1' || t.assigneeId === 'usr-4')) {
          localStorage.setItem('taskflow_tasks', JSON.stringify(INITIAL_TASKS));
          return INITIAL_TASKS;
        }
        return parsed;
      }
      return INITIAL_TASKS;
    } catch (e) {
      return INITIAL_TASKS;
    }
  }

  saveTasks() {
    try {
      localStorage.setItem('taskflow_tasks', JSON.stringify(this.tasks));
    } catch (e) {
      console.error(e);
    }
  }

  loadAuditLogs() {
    try {
      const stored = localStorage.getItem('taskflow_audit_logs');
      return stored ? JSON.parse(stored) : INITIAL_AUDIT_LOGS;
    } catch (e) {
      return INITIAL_AUDIT_LOGS;
    }
  }

  logAction(action, type, text) {
    const newLog = {
      id: `aud-${Date.now()}`,
      action,
      type,
      text,
      user: this.currentUser.name,
      time: 'Just now'
    };
    this.auditLogs.unshift(newLog);
    if (this.auditLogs.length > 80) this.auditLogs.pop();
    try {
      localStorage.setItem('taskflow_audit_logs', JSON.stringify(this.auditLogs));
    } catch (e) {
      console.error(e);
    }
    if (this.currentView === 'adminView') this.renderAdminAuditLogs();
  }

  isAdmin() {
    return this.currentUser && this.currentUser.permission === 'Admin';
  }

  // ==========================================================================
  // THEME INITIALIZATION
  // ==========================================================================
  initTheme() {
    const savedTheme = localStorage.getItem('taskflow_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('taskflow_theme', next);

    const sun = document.getElementById('themeIconSun');
    const moon = document.getElementById('themeIconMoon');
    if (sun && moon) {
      sun.style.display = next === 'dark' ? 'none' : 'block';
      moon.style.display = next === 'dark' ? 'block' : 'none';
    }
    this.soundFX.play('click');
    if (this.currentView === 'analyticsView') this.renderAnalytics();
  }

  // ==========================================================================
  // ELEMENT REFERENCES
  // ==========================================================================
  initElements() {
    // Navigation
    this.sidebar = document.getElementById('sidebar');
    this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
    this.closeSidebarBtn = document.getElementById('closeSidebarBtn');
    this.navItems = document.querySelectorAll('.nav-item');
    this.projectsListNav = document.getElementById('projectsListNav');
    this.totalTasksCountBadge = document.getElementById('totalTasksCountBadge');
    this.myAssignedCountBadge = document.getElementById('myAssignedCountBadge');

    // Sidebar User Session
    this.sidebarUserFooter = document.getElementById('sidebarUserFooter');
    this.sidebarUserAvatar = document.getElementById('sidebarUserAvatar');
    this.sidebarUserStatusDot = document.getElementById('sidebarUserStatusDot');
    this.sidebarUserName = document.getElementById('sidebarUserName');
    this.sidebarUserRoleBadge = document.getElementById('sidebarUserRoleBadge');
    this.quickRoleSwitchBtn = document.getElementById('quickRoleSwitchBtn');
    this.rolePillIcon = document.getElementById('rolePillIcon');
    this.rolePillText = document.getElementById('rolePillText');

    // Top Bar Controls
    this.taskSearchInput = document.getElementById('taskSearchInput');
    this.priorityFilterSelect = document.getElementById('priorityFilterSelect');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.notificationBellBtn = document.getElementById('notificationBellBtn');
    this.notificationTray = document.getElementById('notificationTray');
    this.notificationList = document.getElementById('notificationList');
    this.notificationBadgeCount = document.getElementById('notificationBadgeCount');
    this.markAllReadBtn = document.getElementById('markAllReadBtn');
    this.requestBrowserNotifBtn = document.getElementById('requestBrowserNotifBtn');
    this.shareWorkspaceBtn = document.getElementById('shareWorkspaceBtn');

    // Dialogs & Modals
    this.taskModal = document.getElementById('taskModal');
    this.closeTaskModalBtn = document.getElementById('closeTaskModalBtn');
    this.cancelTaskModalBtn = document.getElementById('cancelTaskModalBtn');
    this.taskForm = document.getElementById('taskForm');
    this.openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
    this.modalDeleteTaskBtn = document.getElementById('modalDeleteTaskBtn');
    this.modalShareTaskBtn = document.getElementById('modalShareTaskBtn');
    this.modalToggleDoneBtn = document.getElementById('modalToggleDoneBtn');
    this.modalToggleDoneText = document.getElementById('modalToggleDoneText');

    this.subtasksList = document.getElementById('subtasksList');
    this.newSubtaskInput = document.getElementById('newSubtaskInput');
    this.addSubtaskBtn = document.getElementById('addSubtaskBtn');
    this.subtasksRatio = document.getElementById('subtasksRatio');
    this.subtasksProgressFill = document.getElementById('subtasksProgressFill');

    this.commentsStream = document.getElementById('commentsStream');
    this.newCommentInput = document.getElementById('newCommentInput');
    this.postCommentBtn = document.getElementById('postCommentBtn');

    this.newProjectModal = document.getElementById('newProjectModal');
    this.openNewProjectBtn = document.getElementById('openNewProjectBtn');
    this.closeNewProjectModalBtn = document.getElementById('closeNewProjectModalBtn');
    this.cancelProjectModalBtn = document.getElementById('cancelProjectModalBtn');
    this.newProjectForm = document.getElementById('newProjectForm');

    this.shareModal = document.getElementById('shareModal');
    this.closeShareModalBtn = document.getElementById('closeShareModalBtn');
    this.copyShareLinkBtn = document.getElementById('copyShareLinkBtn');
    this.exportJsonBtn = document.getElementById('exportJsonBtn');
    this.copyMarkdownSummaryBtn = document.getElementById('copyMarkdownSummaryBtn');

    this.addMemberModal = document.getElementById('addMemberModal');
    this.closeAddMemberModalBtn = document.getElementById('closeAddMemberModalBtn');
    this.cancelAddMemberBtn = document.getElementById('cancelAddMemberBtn');
    this.addMemberForm = document.getElementById('addMemberForm');

    this.confirmModal = document.getElementById('confirmModal');
    this.confirmProceedBtn = document.getElementById('confirmProceedBtn');
    this.confirmCancelBtn = document.getElementById('confirmCancelBtn');
    this.closeConfirmModalBtn = document.getElementById('closeConfirmModalBtn');

    this.permissionGuardModal = document.getElementById('permissionGuardModal');
    this.closePermissionGuardBtn = document.getElementById('closePermissionGuardBtn');
    this.stayAsMemberBtn = document.getElementById('stayAsMemberBtn');
    this.elevateToAdminBtn = document.getElementById('elevateToAdminBtn');

    // Popouts
    this.quickPeekPopout = document.getElementById('quickPeekPopout');
    this.closeQuickPeekBtn = document.getElementById('closeQuickPeekBtn');
    this.userProfilePopout = document.getElementById('userProfilePopout');

    // Floating Quick Dock
    this.dockNewTaskBtn = document.getElementById('dockNewTaskBtn');
    this.dockMyWorkBtn = document.getElementById('dockMyWorkBtn');
    this.dockKanbanBtn = document.getElementById('dockKanbanBtn');
    this.dockAdminBtn = document.getElementById('dockAdminBtn');

    // Calendar Navigation
    this.calPrevMonthBtn = document.getElementById('calPrevMonthBtn');
    this.calNextMonthBtn = document.getElementById('calNextMonthBtn');
    this.calTodayBtn = document.getElementById('calTodayBtn');
    this.calCurrentMonthLabel = document.getElementById('calCurrentMonthLabel');
    this.calendarDaysBody = document.getElementById('calendarDaysBody');

    // Toast
    this.toastNotification = document.getElementById('toastNotification');
  }

  // ==========================================================================
  // EVENT BINDINGS
  // ==========================================================================
  bindEvents() {
    // Mobile Sidebar Toggle
    this.mobileMenuBtn?.addEventListener('click', () => {
      this.sidebar.classList.toggle('open');
      this.soundFX.play('click');
    });

    this.closeSidebarBtn?.addEventListener('click', () => {
      this.sidebar.classList.remove('open');
    });

    // View Switching
    this.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetView = item.dataset.view;
        this.switchView(targetView);
        if (window.innerWidth <= 1024) this.sidebar.classList.remove('open');
      });
    });

    // Floating Dock Buttons
    this.dockNewTaskBtn?.addEventListener('click', () => this.openCreateTaskModal('todo'));
    this.dockMyWorkBtn?.addEventListener('click', () => this.switchView('userDashboardView'));
    this.dockKanbanBtn?.addEventListener('click', () => this.switchView('kanbanView'));
    this.dockAdminBtn?.addEventListener('click', () => this.switchView('adminView'));

    // Search & Filter
    this.taskSearchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.render();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== this.taskSearchInput && !document.querySelector('dialog[open]')) {
        e.preventDefault();
        this.taskSearchInput.focus();
      } else if (e.key.toLowerCase() === 'n' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !document.querySelector('dialog[open]')) {
        e.preventDefault();
        this.openCreateTaskModal('todo');
      } else if (e.key === 'Escape') {
        this.quickPeekPopout?.classList.remove('show');
        this.userProfilePopout?.classList.remove('show');
        this.notificationTray?.classList.remove('open');
      }
    });

    this.priorityFilterSelect?.addEventListener('change', (e) => {
      this.priorityFilter = e.target.value;
      this.soundFX.play('click');
      this.render();
    });

    // Theme & Sound Toggles
    this.themeToggleBtn?.addEventListener('click', () => this.toggleTheme());
    this.soundToggleBtn?.addEventListener('click', () => {
      const isEnabled = this.soundFX.toggle();
      const onIcon = document.getElementById('soundIconOn');
      const offIcon = document.getElementById('soundIconOff');
      if (onIcon && offIcon) {
        onIcon.style.display = isEnabled ? 'block' : 'none';
        offIcon.style.display = isEnabled ? 'none' : 'block';
      }
      this.showToast(isEnabled ? 'Sound effects enabled' : 'Sound effects muted');
      if (isEnabled) this.soundFX.play('click');
    });

    // Role Switcher Pill in Top Bar
    this.quickRoleSwitchBtn?.addEventListener('click', () => {
      this.toggleAdminRole();
    });

    // Sidebar User Session Popout
    this.sidebarUserFooter?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openUserProfilePopout();
    });

    // Notification Dropdown
    this.notificationBellBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.notificationTray.classList.toggle('open');
      this.renderNotifications();
      this.soundFX.play('click');
    });

    document.addEventListener('click', (e) => {
      if (!this.notificationTray.contains(e.target) && e.target !== this.notificationBellBtn) {
        this.notificationTray.classList.remove('open');
      }
      if (!this.userProfilePopout.contains(e.target) && !this.sidebarUserFooter.contains(e.target)) {
        this.userProfilePopout.classList.remove('show');
      }
      if (!this.quickPeekPopout.contains(e.target) && !e.target.closest('.quick-peek-trigger')) {
        this.quickPeekPopout.classList.remove('show');
      }
    });

    this.markAllReadBtn?.addEventListener('click', () => {
      this.showToast('All deadline warnings cleared.');
      this.notificationBadgeCount.style.display = 'none';
      this.notificationTray.classList.remove('open');
      this.soundFX.play('click');
    });

    this.requestBrowserNotifBtn?.addEventListener('click', () => {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            this.showToast('System alerts enabled! Impending deadlines will notify you.');
            new Notification('TaskFlow Pro Alerts Active', { body: 'You are subscribed to sprint deadline updates.' });
          } else {
            this.showToast('Browser notifications were not granted.');
          }
        });
      } else {
        this.showToast('Native system notifications not supported in this browser.');
      }
    });

    // Column Quick Add Buttons
    document.querySelectorAll('.col-quick-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const colStatus = btn.dataset.status;
        this.openCreateTaskModal(colStatus);
      });
    });

    // Task Modal Handlers
    this.openNewTaskModalBtn?.addEventListener('click', () => this.openCreateTaskModal('todo'));
    this.closeTaskModalBtn?.addEventListener('click', () => this.taskModal.close());
    this.cancelTaskModalBtn?.addEventListener('click', () => this.taskModal.close());
    this.taskForm?.addEventListener('submit', (e) => this.handleTaskFormSubmit(e));
    this.modalDeleteTaskBtn?.addEventListener('click', () => this.handleDeleteCurrentTask());

    this.modalToggleDoneBtn?.addEventListener('click', () => {
      if (!this.editingTaskId) return;
      const task = this.tasks.find(t => t.id === this.editingTaskId);
      if (!task) return;

      const isNowDone = task.status !== 'done';
      task.status = isNowDone ? 'done' : 'in-progress';
      this.saveTasks();

      if (isNowDone) {
        this.soundFX.play('complete');
        this.triggerConfetti();
        this.showToast(`🎉 "${task.title}" completed!`);
        this.logAction('STATUS', 'task', `Task "${task.title}" marked as Completed`);
      } else {
        this.soundFX.play('click');
        this.showToast(`Task reopened and moved to In Progress.`);
        this.logAction('STATUS', 'task', `Task "${task.title}" reopened`);
      }

      this.taskModal.close();
      this.render();
    });

    // Subtasks and Comments inside modal
    this.addSubtaskBtn?.addEventListener('click', () => this.handleAddSubtask());
    this.newSubtaskInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleAddSubtask();
      }
    });

    this.postCommentBtn?.addEventListener('click', () => this.handlePostComment());

    // Share Modal
    this.shareWorkspaceBtn?.addEventListener('click', () => {
      this.soundFX.play('click');
      this.shareModal.showModal();
    });
    this.closeShareModalBtn?.addEventListener('click', () => this.shareModal.close());
    this.copyShareLinkBtn?.addEventListener('click', () => {
      navigator.clipboard?.writeText(document.getElementById('shareLinkInput').value);
      this.showToast('Workspace share link copied!');
      this.soundFX.play('click');
    });

    this.exportJsonBtn?.addEventListener('click', () => {
      const exportData = {
        exportedAt: new Date().toISOString(),
        tasks: this.tasks,
        projects: this.projects,
        members: this.teamMembers,
        auditLogs: this.auditLogs
      };
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `taskflow-backup-${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast('Workspace JSON exported successfully.');
      this.logAction('EXPORT', 'system', 'Workspace JSON backup exported');
      this.soundFX.play('click');
    });

    this.copyMarkdownSummaryBtn?.addEventListener('click', () => {
      const summary = this.generateMarkdownSummary();
      navigator.clipboard?.writeText(summary);
      this.showToast('Markdown sprint digest copied to clipboard!');
      this.soundFX.play('click');
    });

    // Project Modal
    this.openNewProjectBtn?.addEventListener('click', () => {
      this.soundFX.play('click');
      this.newProjectModal.showModal();
    });
    this.closeNewProjectModalBtn?.addEventListener('click', () => this.newProjectModal.close());
    this.cancelProjectModalBtn?.addEventListener('click', () => this.newProjectModal.close());
    this.newProjectForm?.addEventListener('submit', (e) => this.handleNewProjectSubmit(e));

    // Admin Add Member Modal
    document.getElementById('adminAddMemberBtn')?.addEventListener('click', () => {
      if (!this.isAdmin()) {
        this.openPermissionGuard();
        return;
      }
      this.soundFX.play('click');
      this.addMemberModal.showModal();
    });
    this.closeAddMemberModalBtn?.addEventListener('click', () => this.addMemberModal.close());
    this.cancelAddMemberBtn?.addEventListener('click', () => this.addMemberModal.close());
    this.addMemberForm?.addEventListener('submit', (e) => this.handleAddMemberSubmit(e));

    // Permission Guard Modal actions
    this.closePermissionGuardBtn?.addEventListener('click', () => this.permissionGuardModal.close());
    this.stayAsMemberBtn?.addEventListener('click', () => this.permissionGuardModal.close());
    this.elevateToAdminBtn?.addEventListener('click', () => {
      this.permissionGuardModal.close();
      const adminUser = this.teamMembers.find(m => m.permission === 'Admin') || this.teamMembers[0];
      if (adminUser) {
        this.currentUser = adminUser;
        this.updateUserSessionUI();
        this.showToast(`Elevated session to Admin mode`);
        this.switchView('adminView');
      }
    });

    // Calendar Month Navigation
    this.calPrevMonthBtn?.addEventListener('click', () => {
      this.calCurrentDate.setMonth(this.calCurrentDate.getMonth() - 1);
      this.soundFX.play('click');
      this.renderCalendar();
    });
    this.calNextMonthBtn?.addEventListener('click', () => {
      this.calCurrentDate.setMonth(this.calCurrentDate.getMonth() + 1);
      this.soundFX.play('click');
      this.renderCalendar();
    });
    this.calTodayBtn?.addEventListener('click', () => {
      this.calCurrentDate = new Date();
      this.soundFX.play('click');
      this.renderCalendar();
    });

    // Table Column Sorting
    document.getElementById('thTitle')?.addEventListener('click', () => this.sortTable('title'));
    document.getElementById('thProject')?.addEventListener('click', () => this.sortTable('projectId'));
    document.getElementById('thPriority')?.addEventListener('click', () => this.sortTable('priority'));
    document.getElementById('thDeadline')?.addEventListener('click', () => this.sortTable('deadline'));
    document.getElementById('thStatus')?.addEventListener('click', () => this.sortTable('status'));

    // Admin Sub-tabs Navigation
    document.querySelectorAll('.admin-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));
        tabBtn.classList.add('active');
        const target = tabBtn.dataset.tab;
        document.getElementById(target)?.classList.add('active');
        this.soundFX.play('click');
      });
    });

    // Admin Governance & Policies actions
    document.getElementById('adminClearAuditBtn')?.addEventListener('click', () => {
      this.showConfirmDialog('Clear Audit Logs', 'Are you sure you want to permanently erase the system audit trail?', () => {
        this.auditLogs = [];
        this.saveAuditLogs();
        this.renderAdminAuditLogs();
        this.showToast('Audit trail cleared.');
      });
    });

    document.getElementById('adminPurgeCompletedBtn')?.addEventListener('click', () => {
      this.showConfirmDialog('Purge Completed Tasks', 'Delete all completed tasks from workspace? This cannot be undone.', () => {
        const countBefore = this.tasks.length;
        this.tasks = this.tasks.filter(t => t.status !== 'done');
        this.saveTasks();
        this.logAction('PURGE', 'task', `Purged ${countBefore - this.tasks.length} completed tasks`);
        this.render();
        this.showToast(`Purged ${countBefore - this.tasks.length} completed tasks.`);
      });
    });

    document.getElementById('adminEscalateOverdueBtn')?.addEventListener('click', () => {
      let escalatedCount = 0;
      this.tasks.forEach(t => {
        if (t.status !== 'done') {
          const urgency = this.calculateDeadlineUrgency(t.deadline, false);
          if (urgency.cls === 'overdue' && t.priority !== 'Urgent') {
            t.priority = 'Urgent';
            escalatedCount++;
          }
        }
      });
      this.saveTasks();
      this.render();
      this.showToast(`Escalated ${escalatedCount} overdue tasks to Urgent!`);
      this.logAction('ESCALATE', 'task', `Escalated ${escalatedCount} overdue tasks to Urgent`);
    });

    document.getElementById('adminResetDataBtn')?.addEventListener('click', () => {
      this.showConfirmDialog('Reset to Demo Data', 'Reset all tasks, projects, and users back to factory demo state?', () => {
        localStorage.clear();
        this.projects = INITIAL_PROJECTS;
        this.teamMembers = INITIAL_TEAM_MEMBERS;
        this.tasks = INITIAL_TASKS;
        this.auditLogs = INITIAL_AUDIT_LOGS;
        this.currentUser = this.teamMembers[0];
        this.saveProjects();
        this.saveTeamMembers();
        this.saveTasks();
        this.saveAuditLogs();
        this.updateUserSessionUI();
        this.render();
        this.showToast('Workspace reset to factory demo state.');
      });
    });

    // Pomodoro Timer Controls
    document.querySelectorAll('.pomo-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.pomo-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.pomoMode = tab.dataset.mode;
        this.resetPomodoro();
        this.soundFX.play('click');
      });
    });

    document.getElementById('pomoStartPauseBtn')?.addEventListener('click', () => {
      this.togglePomodoro();
    });

    document.getElementById('pomoResetBtn')?.addEventListener('click', () => {
      this.resetPomodoro();
      this.soundFX.play('click');
    });

    // Scratchpad auto-save
    const scratchpad = document.getElementById('personalScratchpadText');
    if (scratchpad) {
      scratchpad.value = localStorage.getItem(`taskflow_scratchpad_${this.currentUser.id}`) || '';
      scratchpad.addEventListener('input', (e) => {
        localStorage.setItem(`taskflow_scratchpad_${this.currentUser.id}`, e.target.value);
      });
    }

    // Quick Peek Popout Actions
    this.closeQuickPeekBtn?.addEventListener('click', () => {
      this.quickPeekPopout.classList.remove('show');
    });

    window.addEventListener('resize', () => {
      if (this.currentView === 'analyticsView') this.renderAnalytics();
    });
  }

  // ==========================================================================
  // VIEW SWITCHING
  // ==========================================================================
  switchView(targetView) {
    if (targetView === 'adminView' && !this.isAdmin()) {
      this.openPermissionGuard();
      return;
    }

    this.navItems.forEach(n => {
      n.classList.toggle('active', n.dataset.view === targetView);
    });

    this.currentView = targetView;
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(targetView)?.classList.add('active');

    this.soundFX.play('click');

    if (targetView === 'calendarView') this.renderCalendar();
    if (targetView === 'analyticsView') this.renderAnalytics();
    if (targetView === 'userDashboardView') this.renderUserDashboard();
    if (targetView === 'adminView') this.renderAdminConsole();
  }

  // ==========================================================================
  // ROLE & USER MANAGEMENT
  // ==========================================================================
  toggleAdminRole() {
    if (this.isAdmin()) {
      // Demote to standard user persona
      const member = this.teamMembers.find(m => m.permission === 'Member') || this.teamMembers[1];
      this.currentUser = member;
      this.showToast(`Switched to User mode (${member.name})`);
    } else {
      // Elevate to Admin persona
      const admin = this.teamMembers.find(m => m.permission === 'Admin') || this.teamMembers[0];
      this.currentUser = admin;
      this.showToast(`Elevated session to Admin mode (${admin.name})`);
    }
    this.updateUserSessionUI();
    this.soundFX.play('click');
    this.render();
  }

  updateUserSessionUI() {
    const isAdm = this.isAdmin();

    // Update Sidebar footer
    this.sidebarUserAvatar.textContent = this.currentUser.avatar;
    this.sidebarUserAvatar.className = `user-avatar ${isAdm ? 'user-avatar-admin' : ''}`;
    this.sidebarUserName.textContent = this.currentUser.name;
    this.sidebarUserRoleBadge.textContent = isAdm ? '👑 Admin' : '👤 Member';
    this.sidebarUserRoleBadge.className = `user-role-badge ${isAdm ? 'admin' : ''}`;

    // Update Status dot
    this.sidebarUserStatusDot.className = `user-status-dot ${this.currentUser.status || 'online'}`;

    // Update Top bar switch pill
    this.quickRoleSwitchBtn.className = `role-switch-pill ${isAdm ? 'admin-active' : ''}`;
    this.rolePillIcon.textContent = isAdm ? '👑' : '👤';
    this.rolePillText.textContent = isAdm ? 'Admin Mode' : 'Member Mode';

    // Reload scratchpad for current user
    const scratchpad = document.getElementById('personalScratchpadText');
    if (scratchpad) {
      scratchpad.value = localStorage.getItem(`taskflow_scratchpad_${this.currentUser.id}`) || '';
    }

    // If non-admin is currently looking at adminView, switch to My Work
    if (!isAdm && this.currentView === 'adminView') {
      this.switchView('userDashboardView');
    }
  }

  openUserProfilePopout() {
    const popout = this.userProfilePopout;
    const rect = this.sidebarUserFooter.getBoundingClientRect();
    popout.style.left = `${rect.right + 10}px`;
    popout.style.bottom = '20px';

    document.getElementById('popoutAvatar').textContent = this.currentUser.avatar;
    document.getElementById('popoutAvatar').className = `user-avatar ${this.isAdmin() ? 'user-avatar-admin' : ''}`;
    document.getElementById('popoutName').textContent = this.currentUser.name;
    document.getElementById('popoutRoleTitle').textContent = `${this.currentUser.role} (${this.currentUser.permission})`;

    // Populate Persona list
    const roleList = document.getElementById('roleSelectList');
    roleList.innerHTML = '';
    this.teamMembers.forEach(member => {
      const li = document.createElement('li');
      li.className = `role-select-item ${member.id === this.currentUser.id ? 'selected' : ''}`;
      li.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <div class="user-avatar" style="width:24px; height:24px; font-size:0.65rem;">${member.avatar}</div>
          <span>${member.name}</span>
        </div>
        <span style="font-size:0.7rem; font-weight:700; color:var(--text-muted);">${member.permission}</span>
      `;
      li.addEventListener('click', () => {
        this.currentUser = member;
        this.updateUserSessionUI();
        this.showToast(`Switched active user to ${member.name}`);
        this.soundFX.play('click');
        popout.classList.remove('show');
        this.render();
      });
      roleList.appendChild(li);
    });

    popout.classList.toggle('show');
  }

  openPermissionGuard() {
    this.soundFX.play('alert');
    this.permissionGuardModal.showModal();
  }

  showConfirmDialog(title, message, onProceed) {
    document.getElementById('confirmModalTitle').textContent = title;
    document.getElementById('confirmModalMessage').textContent = message;

    const proceedHandler = () => {
      this.confirmModal.close();
      this.confirmProceedBtn.removeEventListener('click', proceedHandler);
      this.soundFX.play('click');
      onProceed();
    };

    this.confirmProceedBtn.addEventListener('click', proceedHandler);
    this.confirmCancelBtn.onclick = () => {
      this.confirmModal.close();
      this.confirmProceedBtn.removeEventListener('click', proceedHandler);
    };
    this.closeConfirmModalBtn.onclick = () => {
      this.confirmModal.close();
      this.confirmProceedBtn.removeEventListener('click', proceedHandler);
    };

    this.confirmModal.showModal();
  }

  // ==========================================================================
  // DRAG AND DROP SCHEDULING (KANBAN & CALENDAR)
  // ==========================================================================
  initDragAndDrop() {
    const columns = document.querySelectorAll('.column-droppable');

    columns.forEach(col => {
      col.addEventListener('dragover', (e) => {
        e.preventDefault();
        col.classList.add('drag-over');
      });

      col.addEventListener('dragleave', (e) => {
        if (!col.contains(e.relatedTarget)) {
          col.classList.remove('drag-over');
        }
      });

      col.addEventListener('drop', (e) => {
        e.preventDefault();
        col.classList.remove('drag-over');
        const taskId = e.dataTransfer.getData('text/plain');
        const newStatus = col.dataset.status;

        const task = this.tasks.find(t => t.id === taskId);
        if (task && task.status !== newStatus) {
          const oldStatus = task.status;
          task.status = newStatus;
          this.saveTasks();

          if (newStatus === 'done') {
            this.soundFX.play('complete');
            this.triggerConfetti();
            this.showToast(`🎯 Great job! "${task.title}" completed!`);
          } else {
            this.soundFX.play('drop');
            this.showToast(`Moved task to ${newStatus.toUpperCase()}`);
          }

          this.logAction('STATUS', 'task', `Task "${task.title}" moved from ${oldStatus} to ${newStatus}`);
          this.render();
        }
      });
    });
  }

  attachTaskDrag(cardEl, taskId) {
    cardEl.setAttribute('draggable', 'true');
    cardEl.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', taskId);
      cardEl.classList.add('dragging');
      this.soundFX.play('click');
    });
    cardEl.addEventListener('dragend', () => {
      cardEl.classList.remove('dragging');
    });
  }

  // ==========================================================================
  // RENDERING ENGINE
  // ==========================================================================
  render() {
    this.renderProjectsNav();
    this.renderActiveProjectBanner();
    this.renderKanban();
    this.renderTableList();
    this.renderNotifications();
    this.updateUserSessionUI();

    this.totalTasksCountBadge.textContent = this.tasks.length;

    // My Assigned count badge
    const myTasksCount = this.tasks.filter(t => t.assigneeId === this.currentUser.id && t.status !== 'done').length;
    this.myAssignedCountBadge.textContent = myTasksCount;

    if (this.currentView === 'calendarView') this.renderCalendar();
    if (this.currentView === 'analyticsView') this.renderAnalytics();
    if (this.currentView === 'userDashboardView') this.renderUserDashboard();
    if (this.currentView === 'adminView') this.renderAdminConsole();
  }

  getFilteredTasks() {
    return this.tasks.filter(task => {
      const matchesProject = (this.activeProjectId === 'all') || (task.projectId === this.activeProjectId);
      const matchesSearch = task.title.toLowerCase().includes(this.searchQuery) ||
                            (task.desc && task.desc.toLowerCase().includes(this.searchQuery)) ||
                            task.id.toLowerCase().includes(this.searchQuery);
      const matchesPriority = (this.priorityFilter === 'all') || (task.priority === this.priorityFilter);
      return matchesProject && matchesSearch && matchesPriority;
    });
  }

  renderProjectsNav() {
    this.projectsListNav.innerHTML = '';

    const allLi = document.createElement('li');
    allLi.className = `project-nav-item ${this.activeProjectId === 'all' ? 'active' : ''}`;
    allLi.innerHTML = `
      <span class="project-color-dot" style="background: var(--text-muted);"></span>
      <span>All Projects</span>
      <span class="project-task-count">${this.tasks.length}</span>
    `;
    allLi.addEventListener('click', () => {
      this.activeProjectId = 'all';
      this.soundFX.play('click');
      this.render();
    });
    this.projectsListNav.appendChild(allLi);

    this.projects.forEach(p => {
      const count = this.tasks.filter(t => t.projectId === p.id).length;
      const li = document.createElement('li');
      li.className = `project-nav-item ${this.activeProjectId === p.id ? 'active' : ''}`;
      li.innerHTML = `
        <span class="project-color-dot" style="background: ${p.color};"></span>
        <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.title}</span>
        <span class="project-task-count">${count}</span>
      `;
      li.addEventListener('click', () => {
        this.activeProjectId = p.id;
        this.soundFX.play('click');
        this.render();
      });
      this.projectsListNav.appendChild(li);
    });
  }

  renderActiveProjectBanner() {
    const bannerTitle = document.getElementById('bannerProjectTitle');
    const bannerDesc = document.getElementById('bannerProjectDesc');
    const bannerColor = document.getElementById('bannerProjectColor');
    const bannerProgressPercent = document.getElementById('bannerProgressPercent');
    const bannerProgressFill = document.getElementById('bannerProgressFill');

    const relevantTasks = this.getFilteredTasks();
    const completedTasks = relevantTasks.filter(t => t.status === 'done');
    const percent = relevantTasks.length ? Math.round((completedTasks.length / relevantTasks.length) * 100) : 0;

    if (this.activeProjectId === 'all') {
      bannerTitle.textContent = 'All Workspace Projects';
      bannerDesc.textContent = `${relevantTasks.length} tasks in view &bull; ${completedTasks.length} completed &bull; ${percent}% resolution rate`;
      bannerColor.style.background = 'var(--primary)';
    } else {
      const proj = this.projects.find(p => p.id === this.activeProjectId);
      bannerTitle.textContent = proj ? proj.title : 'Active Project';
      bannerDesc.textContent = proj ? `${proj.desc} (${proj.status || 'Active'})` : '';
      bannerColor.style.background = proj ? proj.color : 'var(--primary)';
    }

    bannerProgressPercent.textContent = `${percent}%`;
    bannerProgressFill.style.width = `${percent}%`;
  }

  // ==========================================================================
  // KANBAN VIEW
  // ==========================================================================
  renderKanban() {
    const statuses = ['backlog', 'todo', 'in-progress', 'review', 'done'];
    const filtered = this.getFilteredTasks();

    statuses.forEach(status => {
      const colEl = document.getElementById(`drop-${status}`);
      const countEl = document.getElementById(`count${this.capitalize(status)}`);
      if (!colEl) return;

      colEl.innerHTML = '';
      const colTasks = filtered.filter(t => t.status === status);
      if (countEl) countEl.textContent = colTasks.length;

      colTasks.forEach(task => {
        const card = this.createTaskCardElement(task);
        colEl.appendChild(card);
      });
    });
  }

  createTaskCardElement(task) {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.id = `card-${task.id}`;

    const project = this.projects.find(p => p.id === task.projectId);
    const assignee = this.teamMembers.find(u => u.id === task.assigneeId) || this.teamMembers[0];

    const subCount = task.subtasks ? task.subtasks.length : 0;
    const subDone = task.subtasks ? task.subtasks.filter(s => s.done).length : 0;
    const subPercent = subCount > 0 ? (subDone / subCount) * 100 : 0;

    const deadlineInfo = this.calculateDeadlineUrgency(task.deadline, task.status === 'done');

    card.innerHTML = `
      <div class="task-card-header">
        <span class="badge-priority priority-${task.priority}">${task.priority}</span>
        <span class="task-project-pill" style="color: ${project ? project.color : 'var(--text-muted)'}">${project ? project.title.split(' ')[1] || project.title : ''}</span>
      </div>
      <div class="task-card-title">${task.title}</div>
      ${subCount > 0 ? `
        <div class="task-subtasks-preview">
          <span>${subDone}/${subCount}</span>
          <div class="subtasks-mini-bar">
            <div class="subtasks-mini-fill" style="width: ${subPercent}%;"></div>
          </div>
        </div>
      ` : ''}
      <div class="task-card-footer">
        <div class="task-deadline-tag ${deadlineInfo.cls}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${deadlineInfo.text}
        </div>
        <div class="card-quick-actions">
          <button class="quick-peek-trigger" title="Quick Peek Popout">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
          </button>
          <div class="assignee-avatar-mini" title="${assignee.name} (${assignee.role})">${assignee.avatar}</div>
        </div>
      </div>
    `;

    this.attachTaskDrag(card, task.id);

    // Click on Quick Peek icon triggers Popout
    card.querySelector('.quick-peek-trigger').addEventListener('click', (e) => {
      e.stopPropagation();
      this.openQuickPeek(task, card);
    });

    card.addEventListener('click', () => {
      this.openTaskModal(task.id);
    });

    return card;
  }

  openQuickPeek(task, anchorEl) {
    const popout = this.quickPeekPopout;
    const rect = anchorEl.getBoundingClientRect();

    let top = rect.top + window.scrollY;
    let left = rect.right + 12;

    if (left + 330 > window.innerWidth) {
      left = rect.left - 330;
    }
    if (top + 220 > window.innerHeight) {
      top = Math.max(10, window.innerHeight - 240);
    }

    popout.style.top = `${top}px`;
    popout.style.left = `${left}px`;

    const assignee = this.teamMembers.find(u => u.id === task.assigneeId)?.name || 'Unassigned';
    document.getElementById('peekPriority').textContent = task.priority;
    document.getElementById('peekPriority').className = `badge-priority priority-${task.priority}`;
    document.getElementById('peekTitle').textContent = task.title;
    document.getElementById('peekDesc').textContent = task.desc || 'No description provided for this task.';
    document.getElementById('peekMeta').textContent = `Assigned to: ${assignee} • Due: ${task.deadline}`;

    // Complete button
    const doneBtn = document.getElementById('peekToggleDoneBtn');
    doneBtn.textContent = task.status === 'done' ? 'Reopen' : 'Complete';
    doneBtn.onclick = () => {
      task.status = task.status === 'done' ? 'in-progress' : 'done';
      this.saveTasks();
      if (task.status === 'done') {
        this.soundFX.play('complete');
        this.triggerConfetti();
        this.showToast(`🎉 "${task.title}" completed!`);
      } else {
        this.soundFX.play('click');
      }
      popout.classList.remove('show');
      this.render();
    };

    // Snooze +1 Day button
    const snoozeBtn = document.getElementById('peekSnoozeBtn');
    snoozeBtn.onclick = () => {
      const cur = new Date(task.deadline || new Date());
      cur.setDate(cur.getDate() + 1);
      task.deadline = cur.toISOString().split('T')[0];
      this.saveTasks();
      this.soundFX.play('click');
      this.showToast(`Snoozed +1 day to ${task.deadline}`);
      popout.classList.remove('show');
      this.render();
    };

    // Open full modal button
    const openBtn = document.getElementById('peekOpenFullBtn');
    openBtn.onclick = () => {
      popout.classList.remove('show');
      this.openTaskModal(task.id);
    };

    popout.classList.add('show');
    this.soundFX.play('click');
  }

  calculateDeadlineUrgency(dateStr, isDone) {
    if (isDone) return { text: 'Completed', cls: 'text-success' };
    if (!dateStr) return { text: 'No Date', cls: '' };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const due = new Date(dateStr);
    due.setHours(0, 0, 0, 0);

    const diffDays = Math.round((due - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: `Overdue by ${Math.abs(diffDays)}d`, cls: 'overdue' };
    } else if (diffDays === 0) {
      return { text: 'Due Today', cls: 'due-soon' };
    } else if (diffDays === 1) {
      return { text: 'Due Tomorrow', cls: 'due-soon' };
    } else {
      return { text: `Due in ${diffDays}d`, cls: '' };
    }
  }

  // ==========================================================================
  // CALENDAR VIEW (DRAG RESCHEDULING ON ALL CELLS)
  // ==========================================================================
  renderCalendar() {
    if (!this.calendarDaysBody) return;

    const year = this.calCurrentDate.getFullYear();
    const month = this.calCurrentDate.getMonth();
    const monthName = this.calCurrentDate.toLocaleString('default', { month: 'long' });
    this.calCurrentMonthLabel.textContent = `${monthName} ${year}`;

    this.calendarDaysBody.innerHTML = '';

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const totalDaysPrevMonth = new Date(year, month, 0).getDate();

    const todayStr = new Date().toISOString().split('T')[0];

    // Helper to wire up drag & drop rescheduling on ANY date cell
    const wireCalendarCell = (cell, dateStr) => {
      cell.dataset.date = dateStr;

      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        cell.classList.add('drag-over');
      });

      cell.addEventListener('dragleave', (e) => {
        if (!cell.contains(e.relatedTarget)) {
          cell.classList.remove('drag-over');
        }
      });

      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        cell.classList.remove('drag-over');
        const taskId = e.dataTransfer.getData('text/plain');
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
          task.deadline = dateStr;
          this.saveTasks();
          this.soundFX.play('drop');
          this.showToast(`📅 Rescheduled "${task.title}" to ${dateStr}`);
          this.logAction('SCHEDULE', 'task', `Rescheduled "${task.title}" to ${dateStr}`);
          this.render();
        }
      });
    };

    // Previous month filler days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const prevDateNum = totalDaysPrevMonth - i;
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      const dateStr = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(prevDateNum).padStart(2, '0')}`;

      const cell = document.createElement('div');
      cell.className = 'cal-date-cell cal-other-month';
      cell.innerHTML = `<span class="cal-date-num">${prevDateNum}</span>`;
      wireCalendarCell(cell, dateStr);
      this.calendarDaysBody.appendChild(cell);
    }

    // Current month days
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const currentDayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = currentDayStr === todayStr;

      const cell = document.createElement('div');
      cell.className = `cal-date-cell ${isToday ? 'cal-today' : ''}`;
      cell.innerHTML = `<span class="cal-date-num">${day}</span>`;
      wireCalendarCell(cell, currentDayStr);

      // Tasks matching this deadline
      const matchingTasks = this.getFilteredTasks().filter(t => t.deadline === currentDayStr);
      matchingTasks.forEach(task => {
        const pill = document.createElement('div');
        pill.className = 'cal-task-pill';
        const project = this.projects.find(p => p.id === task.projectId);
        pill.style.borderLeftColor = project ? project.color : 'var(--primary)';
        pill.textContent = task.title;
        pill.title = `${task.title} (${task.priority})`;

        this.attachTaskDrag(pill, task.id);
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openTaskModal(task.id);
        });

        cell.appendChild(pill);
      });

      this.calendarDaysBody.appendChild(cell);
    }

    // Next month filler days (up to 35 or 42)
    const filledCells = firstDayIndex + totalDaysInMonth;
    const remaining = (filledCells > 35 ? 42 : 35) - filledCells;
    for (let d = 1; d <= remaining; d++) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      const dateStr = `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

      const cell = document.createElement('div');
      cell.className = 'cal-date-cell cal-other-month';
      cell.innerHTML = `<span class="cal-date-num">${d}</span>`;
      wireCalendarCell(cell, dateStr);
      this.calendarDaysBody.appendChild(cell);
    }
  }

  // ==========================================================================
  // TABLE / PRIORITIZED DIRECTORY VIEW (WITH SORTING)
  // ==========================================================================
  sortTable(field) {
    if (this.tableSort.field === field) {
      this.tableSort.direction = this.tableSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.tableSort.field = field;
      this.tableSort.direction = 'asc';
    }
    this.soundFX.play('click');
    this.renderTableList();
  }

  renderTableList() {
    const tbody = document.getElementById('tasksTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    let filtered = [...this.getFilteredTasks()];

    // Sorting
    const { field, direction } = this.tableSort;
    filtered.sort((a, b) => {
      let valA = a[field] || '';
      let valB = b[field] || '';
      if (field === 'priority') {
        const order = { Urgent: 4, High: 3, Medium: 2, Low: 1 };
        valA = order[valA] || 0;
        valB = order[valB] || 0;
      }
      if (valA < valB) return direction === 'asc' ? -1 : 1;
      if (valA > valB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    document.getElementById('tableFilterCount').textContent = `Showing ${filtered.length} tasks`;

    filtered.forEach(task => {
      const project = this.projects.find(p => p.id === task.projectId);
      const assignee = this.teamMembers.find(u => u.id === task.assigneeId) || this.teamMembers[0];
      const isDone = task.status === 'done';
      const deadlineInfo = this.calculateDeadlineUrgency(task.deadline, isDone);

      const subCount = task.subtasks ? task.subtasks.length : 0;
      const subDone = task.subtasks ? task.subtasks.filter(s => s.done).length : 0;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="checkbox-round ${isDone ? 'checked' : ''}" data-taskid="${task.id}">
            ${isDone ? '&check;' : ''}
          </div>
        </td>
        <td>
          <strong style="${isDone ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}</strong>
          ${subCount > 0 ? `<div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 500;">${subDone}/${subCount} checklist steps completed</div>` : ''}
        </td>
        <td>
          <span style="font-size: 0.8rem; font-weight: 700; color: ${project ? project.color : 'inherit'}">${project ? project.title : 'Unassigned'}</span>
        </td>
        <td>
          <span class="badge-priority priority-${task.priority}">${task.priority}</span>
        </td>
        <td>
          <span class="task-deadline-tag ${deadlineInfo.cls}">${deadlineInfo.text}</span>
        </td>
        <td>
          <span style="text-transform: capitalize; font-size: 0.8rem; font-weight: 700;">${task.status}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            <div class="assignee-avatar-mini">${assignee.avatar}</div>
            <span style="font-size: 0.8rem; font-weight: 600;">${assignee.name}</span>
          </div>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-outline btn-sm table-edit-btn" data-taskid="${task.id}">Edit</button>
        </td>
      `;

      tr.querySelector('.checkbox-round').addEventListener('click', (e) => {
        e.stopPropagation();
        task.status = isDone ? 'in-progress' : 'done';
        this.saveTasks();
        if (task.status === 'done') {
          this.soundFX.play('complete');
          this.triggerConfetti();
          this.showToast(`🎉 "${task.title}" completed!`);
        } else {
          this.soundFX.play('click');
        }
        this.render();
      });

      tr.querySelector('.table-edit-btn').addEventListener('click', () => {
        this.openTaskModal(task.id);
      });

      tbody.appendChild(tr);
    });
  }

  // ==========================================================================
  // PROGRESS ANALYTICS & HIGH-DPI CANVAS CHARTS
  // ==========================================================================
  renderAnalytics() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.status === 'done').length;
    const active = total - completed;
    const urgent = this.tasks.filter(t => t.priority === 'Urgent' && t.status !== 'done').length;

    document.getElementById('metricTotalTasks').textContent = total;
    document.getElementById('metricCompletedTasks').textContent = completed;
    document.getElementById('metricCompletionRate').textContent = `${total ? Math.round((completed / total) * 100) : 0}% sprint resolution`;
    document.getElementById('metricActiveTasks').textContent = active;
    document.getElementById('metricUrgentTasks').textContent = urgent;

    this.drawPriorityChart();
    this.drawVelocityChart();
    this.renderTeamWorkload();
  }

  setupCanvasDPI(canvas, width, height) {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
  }

  drawPriorityChart() {
    const canvas = document.getElementById('priorityChartCanvas');
    if (!canvas) return;
    const width = 520;
    const height = 240;
    const ctx = this.setupCanvasDPI(canvas, width, height);

    ctx.clearRect(0, 0, width, height);

    const counts = { Urgent: 0, High: 0, Medium: 0, Low: 0 };
    this.tasks.forEach(t => {
      if (counts[t.priority] !== undefined) counts[t.priority]++;
    });

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#f8fafc' : '#0f172a';
    const mutedColor = isDark ? '#94a3b8' : '#64748b';

    const categories = [
      { name: 'Urgent', count: counts.Urgent, color: '#ef4444' },
      { name: 'High', count: counts.High, color: '#f59e0b' },
      { name: 'Medium', count: counts.Medium, color: '#4f46e5' },
      { name: 'Low', count: counts.Low, color: '#64748b' }
    ];

    const padding = { top: 25, right: 20, bottom: 35, left: 35 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const maxCount = Math.max(...categories.map(c => c.count), 5);
    const barW = chartW / categories.length - 28;

    categories.forEach((cat, i) => {
      const x = padding.left + i * (chartW / categories.length) + 14;
      const barH = (cat.count / maxCount) * chartH;
      const y = (height - padding.bottom) - barH;

      ctx.fillStyle = cat.color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, barH, [6, 6, 0, 0]) : ctx.rect(x, y, barW, barH);
      ctx.fill();

      // Top count label
      ctx.fillStyle = textColor;
      ctx.font = 'bold 12px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${cat.count} tasks`, x + barW / 2, y - 6);

      // Category label
      ctx.fillStyle = mutedColor;
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.fillText(cat.name, x + barW / 2, height - 12);
    });
  }

  drawVelocityChart() {
    const canvas = document.getElementById('velocityChartCanvas');
    if (!canvas) return;
    const width = 520;
    const height = 240;
    const ctx = this.setupCanvasDPI(canvas, width, height);

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#f8fafc' : '#0f172a';
    const mutedColor = isDark ? '#94a3b8' : '#64748b';
    const trackColor = isDark ? '#1e293b' : '#e2e8f0';

    const padding = { top: 25, right: 35, bottom: 30, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const projs = this.projects;
    const barH = (chartH / projs.length) - 12;

    projs.forEach((p, idx) => {
      const pTasks = this.tasks.filter(t => t.projectId === p.id);
      const done = pTasks.filter(t => t.status === 'done').length;
      const pct = pTasks.length ? done / pTasks.length : 0;

      const y = padding.top + idx * (chartH / projs.length);

      // Track
      ctx.fillStyle = trackColor;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(padding.left + 90, y, chartW - 145, barH, 4) : ctx.rect(padding.left + 90, y, chartW - 145, barH);
      ctx.fill();

      // Fill
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(padding.left + 90, y, (chartW - 145) * pct, barH, 4) : ctx.rect(padding.left + 90, y, (chartW - 145) * pct, barH);
      ctx.fill();

      // Project label
      ctx.fillStyle = textColor;
      ctx.font = 'bold 11px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'right';
      const shortTitle = p.title.split(' ')[1] || p.title.substring(0, 10);
      ctx.fillText(shortTitle, padding.left + 80, y + barH / 2 + 4);

      // Percent
      ctx.textAlign = 'left';
      ctx.fillStyle = mutedColor;
      ctx.fillText(`${Math.round(pct * 100)}% (${done}/${pTasks.length})`, padding.left + chartW - 45, y + barH / 2 + 4);
    });
  }

  renderTeamWorkload() {
    const grid = document.getElementById('teamWorkloadGrid');
    if (!grid) return;

    grid.innerHTML = '';
    this.teamMembers.forEach(member => {
      const memberTasks = this.tasks.filter(t => t.assigneeId === member.id);
      const completed = memberTasks.filter(t => t.status === 'done').length;

      const item = document.createElement('div');
      item.className = 'workload-item';
      item.innerHTML = `
        <div class="user-avatar" style="width: 36px; height: 36px;">${member.avatar}</div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">${member.name}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">${member.role}</div>
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); margin-top: 0.2rem;">
            ${memberTasks.length} tasks (${completed} completed)
          </div>
        </div>
      `;
      grid.appendChild(item);
    });
  }

  // ==========================================================================
  // VIEW 5: USER FUNCTIONALITY MODULE ("My Work" Personal Workspace)
  // ==========================================================================
  renderUserDashboard() {
    const activeTasksContainer = document.getElementById('myTasksListContainer');
    const completedContainer = document.getElementById('myCompletedTasksContainer');
    const myFocusBadge = document.getElementById('myFocusStatsBadge');
    const myCompletedLabel = document.getElementById('myCompletedCountLabel');
    const pomoTaskSelect = document.getElementById('pomoTaskSelect');

    if (!activeTasksContainer) return;

    // Filter to current logged-in user
    const userTasks = this.tasks.filter(t => t.assigneeId === this.currentUser.id);
    const activeTasks = userTasks.filter(t => t.status !== 'done');
    const completedTasks = userTasks.filter(t => t.status === 'done');

    myFocusBadge.textContent = `${activeTasks.length} Active`;
    myCompletedLabel.textContent = `${completedTasks.length} resolved`;

    // Populate Active Tasks
    activeTasksContainer.innerHTML = '';
    if (activeTasks.length === 0) {
      activeTasksContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          🎉 No active tasks assigned to you right now! Enjoy your day or create a new task.
        </div>
      `;
    } else {
      activeTasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'my-task-item';
        const project = this.projects.find(p => p.id === task.projectId);
        const deadlineInfo = this.calculateDeadlineUrgency(task.deadline, false);

        item.innerHTML = `
          <div class="my-task-left">
            <div class="checkbox-round" title="Mark Task Done">&nbsp;</div>
            <div>
              <div class="my-task-title">${task.title}</div>
              <div class="my-task-meta">
                <span class="badge-priority priority-${task.priority}">${task.priority}</span>
                <span>&bull; ${project ? project.title : ''}</span>
                <span class="task-deadline-tag ${deadlineInfo.cls}">&bull; ${deadlineInfo.text}</span>
              </div>
            </div>
          </div>
          <div style="display:flex; gap:0.4rem;">
            <button class="btn btn-outline btn-sm my-focus-btn">Focus</button>
            <button class="btn btn-outline btn-sm my-edit-btn">Edit</button>
          </div>
        `;

        item.querySelector('.checkbox-round').addEventListener('click', () => {
          task.status = 'done';
          this.saveTasks();
          this.soundFX.play('complete');
          this.triggerConfetti();
          this.showToast(`🎉 "${task.title}" completed!`);
          this.render();
        });

        item.querySelector('.my-focus-btn').addEventListener('click', () => {
          if (pomoTaskSelect) pomoTaskSelect.value = task.id;
          this.showToast(`Linked "${task.title}" to Pomodoro timer.`);
          this.soundFX.play('click');
        });

        item.querySelector('.my-edit-btn').addEventListener('click', () => {
          this.openTaskModal(task.id);
        });

        activeTasksContainer.appendChild(item);
      });
    }

    // Populate Completed Tasks
    completedContainer.innerHTML = '';
    if (completedTasks.length === 0) {
      completedContainer.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); font-size: 0.8rem;">No completed tasks in current session.</div>`;
    } else {
      completedTasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'my-task-item';
        item.style.opacity = '0.7';
        item.innerHTML = `
          <div class="my-task-left">
            <div class="checkbox-round checked">&check;</div>
            <div>
              <div class="my-task-title" style="text-decoration: line-through;">${task.title}</div>
              <div class="my-task-meta">Completed by you</div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm my-reopen-btn">Reopen</button>
        `;
        item.querySelector('.my-reopen-btn').addEventListener('click', () => {
          task.status = 'in-progress';
          this.saveTasks();
          this.soundFX.play('click');
          this.showToast(`Task reopened: "${task.title}"`);
          this.render();
        });
        completedContainer.appendChild(item);
      });
    }

    // Populate Pomodoro task selector dropdown
    if (pomoTaskSelect) {
      const currentSelected = pomoTaskSelect.value;
      pomoTaskSelect.innerHTML = `<option value="">-- Select a task to focus on --</option>` +
        activeTasks.map(t => `<option value="${t.id}" ${t.id === currentSelected ? 'selected' : ''}>${t.title}</option>`).join('');
    }
  }

  // ==========================================================================
  // POMODORO FOCUS TIMER ENGINE
  // ==========================================================================
  togglePomodoro() {
    const btn = document.getElementById('pomoStartPauseBtn');
    if (this.pomoIsRunning) {
      // Pause
      clearInterval(this.pomoTimerId);
      this.pomoIsRunning = false;
      btn.textContent = 'Resume Focus';
      document.getElementById('pomoStateLabel').textContent = 'Paused';
      this.soundFX.play('click');
    } else {
      // Start
      this.pomoIsRunning = true;
      btn.textContent = 'Pause Focus';
      document.getElementById('pomoStateLabel').textContent = this.pomoMode === 'focus' ? 'Focusing...' : 'Resting...';
      this.soundFX.play('click');

      this.pomoTimerId = setInterval(() => {
        if (this.pomoTimeLeft > 0) {
          this.pomoTimeLeft--;
          this.updatePomodoroDisplay();
        } else {
          // Timer finished
          clearInterval(this.pomoTimerId);
          this.pomoIsRunning = false;
          btn.textContent = 'Start Focus';
          this.soundFX.play('complete');
          this.triggerConfetti();

          if (this.pomoMode === 'focus') {
            this.pomoCompletedSessions++;
            document.getElementById('pomoSessionsCounter').textContent = `${this.pomoCompletedSessions} Sessions`;
            this.showToast('🔔 Great focus session completed! Take a 5-minute break.');
            this.logAction('FOCUS', 'system', `Completed 25m Pomodoro focus sprint`);
          } else {
            this.showToast('Break finished! Ready to tackle your next task?');
          }
          this.resetPomodoro();
        }
      }, 1000);
    }
  }

  resetPomodoro() {
    clearInterval(this.pomoTimerId);
    this.pomoIsRunning = false;
    this.pomoTimeLeft = this.pomoDurations[this.pomoMode];
    document.getElementById('pomoStartPauseBtn').textContent = 'Start Focus';
    document.getElementById('pomoStateLabel').textContent = 'Ready to Focus';
    this.updatePomodoroDisplay();
  }

  updatePomodoroDisplay() {
    const mins = Math.floor(this.pomoTimeLeft / 60);
    const secs = this.pomoTimeLeft % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const digitsEl = document.getElementById('pomoTimeDigits');
    if (digitsEl) digitsEl.textContent = formatted;

    // Update circular SVG stroke
    const circle = document.getElementById('pomoCircleProgress');
    if (circle) {
      const total = this.pomoDurations[this.pomoMode];
      const circumference = 2 * Math.PI * 90; // 565.48
      const offset = circumference - (this.pomoTimeLeft / total) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  }

  // ==========================================================================
  // VIEW 6: ADMIN FUNCTIONALITY MODULE ("Admin Console")
  // ==========================================================================
  renderAdminConsole() {
    this.renderAdminUsers();
    this.renderAdminProjects();
    this.renderAdminAuditLogs();
  }

  renderAdminUsers() {
    const tbody = document.getElementById('adminUsersTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    document.getElementById('adminUserCountLabel').textContent = `${this.teamMembers.length} Members`;

    this.teamMembers.forEach(member => {
      const assignedCount = this.tasks.filter(t => t.assigneeId === member.id).length;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="display:flex; align-items:center; gap:0.65rem;">
            <div class="user-avatar" style="width:32px; height:32px; font-size:0.75rem;">${member.avatar}</div>
            <div>
              <strong style="color:var(--text-main);">${member.name}</strong>
              <div style="font-size:0.72rem; color:var(--text-muted);">${member.department || 'General'}</div>
            </div>
          </div>
        </td>
        <td>
          <span style="font-size:0.825rem; font-weight:600;">${member.role}</span>
        </td>
        <td>
          <span class="user-role-badge ${member.permission === 'Admin' ? 'admin' : ''}">${member.permission}</span>
        </td>
        <td>
          <span style="font-size:0.8rem; font-weight:700;">${assignedCount} active tasks</span>
        </td>
        <td>
          <span style="font-size:0.8rem;">🟢 Active</span>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-outline btn-sm admin-role-toggle-btn" data-id="${member.id}">
            ${member.permission === 'Admin' ? 'Demote to Member' : 'Promote to Admin'}
          </button>
          ${member.id !== this.currentUser.id ? `
            <button class="btn btn-outline btn-sm text-danger admin-remove-user-btn" data-id="${member.id}">&times; Remove</button>
          ` : ''}
        </td>
      `;

      tr.querySelector('.admin-role-toggle-btn')?.addEventListener('click', () => {
        member.permission = member.permission === 'Admin' ? 'Member' : 'Admin';
        this.saveTeamMembers();
        this.showToast(`Updated ${member.name}'s permission to ${member.permission}`);
        this.logAction('ROLE', 'user', `Changed ${member.name} role to ${member.permission}`);
        this.renderAdminUsers();
        this.updateUserSessionUI();
      });

      tr.querySelector('.admin-remove-user-btn')?.addEventListener('click', () => {
        this.showConfirmDialog('Remove Member', `Remove ${member.name} from the workspace? Assigned tasks will be unassigned.`, () => {
          this.teamMembers = this.teamMembers.filter(m => m.id !== member.id);
          this.saveTeamMembers();
          this.logAction('DELETE', 'user', `Removed user ${member.name}`);
          this.render();
          this.showToast(`Removed ${member.name}.`);
        });
      });

      tbody.appendChild(tr);
    });
  }

  renderAdminProjects() {
    const tbody = document.getElementById('adminProjectsTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    this.projects.forEach(project => {
      const pTasks = this.tasks.filter(t => t.projectId === project.id);
      const doneTasks = pTasks.filter(t => t.status === 'done');
      const pct = pTasks.length ? Math.round((doneTasks.length / pTasks.length) * 100) : 0;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span class="project-color-dot" style="background:${project.color}; width:12px; height:12px;"></span>
            <strong style="color:var(--text-main);">${project.title}</strong>
          </div>
        </td>
        <td style="font-size:0.775rem; color:var(--text-muted); max-width:240px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          ${project.desc}
        </td>
        <td>
          <span style="font-size:0.8rem; font-weight:700;">${pTasks.length} tasks</span>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <div class="progress-track" style="width:100px; height:6px;">
              <div class="progress-fill" style="width:${pct}%; background:${project.color};"></div>
            </div>
            <span style="font-size:0.75rem; font-weight:700;">${pct}%</span>
          </div>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-outline btn-sm text-danger admin-delete-proj-btn" data-id="${project.id}">Delete</button>
        </td>
      `;

      tr.querySelector('.admin-delete-proj-btn')?.addEventListener('click', () => {
        this.showConfirmDialog('Delete Project', `Permanently delete project "${project.title}" and remove its tasks?`, () => {
          this.projects = this.projects.filter(p => p.id !== project.id);
          this.tasks = this.tasks.filter(t => t.projectId !== project.id);
          this.saveProjects();
          this.saveTasks();
          this.logAction('DELETE', 'project', `Deleted project "${project.title}"`);
          this.render();
          this.showToast(`Deleted project "${project.title}".`);
        });
      });

      tbody.appendChild(tr);
    });
  }

  renderAdminAuditLogs() {
    const stream = document.getElementById('adminAuditLogStream');
    if (!stream) return;

    stream.innerHTML = '';
    if (this.auditLogs.length === 0) {
      stream.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">No audit logs recorded yet.</div>`;
      return;
    }

    this.auditLogs.slice(0, 30).forEach(log => {
      const item = document.createElement('div');
      item.className = 'audit-log-item';
      item.innerHTML = `
        <div class="audit-left">
          <span class="audit-action-tag audit-tag-${log.type || 'system'}">${log.action}</span>
          <div>
            <div style="font-weight:700; color:var(--text-main); font-size:0.825rem;">${log.text}</div>
            <div style="font-size:0.7rem; color:var(--text-muted);">Actor: ${log.user}</div>
          </div>
        </div>
        <span class="audit-timestamp">${log.time}</span>
      `;
      stream.appendChild(item);
    });
  }

  handleAddMemberSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('newMemberName').value.trim();
    const role = document.getElementById('newMemberRole').value.trim();
    const permission = document.getElementById('newMemberPermission').value;

    if (!name || !role) return;

    const initials = name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().substring(0, 2);

    const newMember = {
      id: `usr-${Date.now()}`,
      name,
      role,
      department: 'Team',
      avatar: initials,
      permission,
      status: 'online'
    };

    this.teamMembers.push(newMember);
    this.saveTeamMembers();
    this.addMemberModal.close();
    this.addMemberForm.reset();

    this.soundFX.play('complete');
    this.showToast(`Added ${name} to workspace team.`);
    this.logAction('CREATE', 'user', `Added team member ${name} (${role})`);
    this.render();
  }

  // ==========================================================================
  // NOTIFICATIONS ENGINE
  // ==========================================================================
  renderNotifications() {
    this.notificationList.innerHTML = '';

    const alerts = [];
    this.tasks.forEach(task => {
      if (task.status === 'done') return;

      const urgency = this.calculateDeadlineUrgency(task.deadline, false);
      if (urgency.cls === 'overdue') {
        alerts.push({
          type: 'overdue',
          icon: '🚨',
          title: `Overdue Task: ${task.title}`,
          meta: urgency.text,
          taskId: task.id
        });
      } else if (urgency.cls === 'due-soon') {
        alerts.push({
          type: 'urgent',
          icon: '⏰',
          title: `Deadline Imminent: ${task.title}`,
          meta: urgency.text,
          taskId: task.id
        });
      }
    });

    this.notificationBadgeCount.textContent = alerts.length;
    this.notificationBadgeCount.style.display = alerts.length ? 'flex' : 'none';

    if (alerts.length === 0) {
      this.notificationList.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
          No impending deadline warnings. You are completely on schedule!
        </div>
      `;
      return;
    }

    alerts.forEach(alert => {
      const item = document.createElement('div');
      item.className = `tray-item ${alert.type === 'overdue' ? 'urgent' : ''}`;
      item.innerHTML = `
        <div class="tray-icon">${alert.icon}</div>
        <div>
          <div class="tray-content-title">${alert.title}</div>
          <div class="tray-content-meta">${alert.meta}</div>
        </div>
      `;
      item.addEventListener('click', () => {
        this.openTaskModal(alert.taskId);
        this.notificationTray.classList.remove('open');
      });
      this.notificationList.appendChild(item);
    });
  }

  // ==========================================================================
  // TASK DETAILS MODAL & COLLABORATIVE EDITING
  // ==========================================================================
  openCreateTaskModal(defaultStatus = 'todo') {
    this.editingTaskId = null;
    this.tempSubtasks = [];
    this.tempComments = [];
    this.taskForm.reset();

    document.getElementById('modalStatusBadge').textContent = 'Creating New Task';
    document.getElementById('modalToggleDoneBtn').style.display = 'none';
    document.getElementById('modalDeleteTaskBtn').style.display = 'none';

    // Populate Project Select
    const projSelect = document.getElementById('taskProjectSelect');
    projSelect.innerHTML = this.projects.map(p => `<option value="${p.id}">${p.title}</option>`).join('');

    // Populate Assignee Select
    const assigneeSelect = document.getElementById('taskAssigneeSelect');
    assigneeSelect.innerHTML = this.teamMembers.map(u => `<option value="${u.id}" ${u.id === this.currentUser.id ? 'selected' : ''}>${u.name} (${u.role})</option>`).join('');

    document.getElementById('taskStatusSelect').value = defaultStatus;
    document.getElementById('taskDeadlineInput').value = getRelativeDate(2);
    document.getElementById('modalDeadlineCountdown').textContent = 'Due in 2 days';

    this.renderModalSubtasks(null);
    this.renderModalComments(null);

    this.soundFX.play('click');
    this.taskModal.showModal();
  }

  openTaskModal(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) return;

    this.editingTaskId = taskId;

    document.getElementById('modalStatusBadge').textContent = task.status.toUpperCase();
    document.getElementById('modalToggleDoneBtn').style.display = 'block';
    document.getElementById('modalDeleteTaskBtn').style.display = 'inline-flex';
    document.getElementById('modalToggleDoneText').textContent = task.status === 'done' ? 'Reopen Task' : 'Mark as Completed';

    // Populate Project Select
    const projSelect = document.getElementById('taskProjectSelect');
    projSelect.innerHTML = this.projects.map(p => `<option value="${p.id}" ${p.id === task.projectId ? 'selected' : ''}>${p.title}</option>`).join('');

    // Populate Assignee Select
    const assigneeSelect = document.getElementById('taskAssigneeSelect');
    assigneeSelect.innerHTML = this.teamMembers.map(u => `<option value="${u.id}" ${u.id === task.assigneeId ? 'selected' : ''}>${u.name} (${u.role})</option>`).join('');

    document.getElementById('taskTitleInput').value = task.title;
    document.getElementById('taskDescInput').value = task.desc || '';
    document.getElementById('taskStatusSelect').value = task.status;
    document.getElementById('taskPrioritySelect').value = task.priority;
    document.getElementById('taskDeadlineInput').value = task.deadline || '';

    const urgency = this.calculateDeadlineUrgency(task.deadline, task.status === 'done');
    const deadlineCountdown = document.getElementById('modalDeadlineCountdown');
    deadlineCountdown.textContent = urgency.text;
    deadlineCountdown.className = `deadline-countdown-badge ${urgency.cls}`;

    this.renderModalSubtasks(task);
    this.renderModalComments(task);

    this.soundFX.play('click');
    this.taskModal.showModal();
  }

  renderModalSubtasks(task) {
    this.subtasksList.innerHTML = '';
    const subtasks = task ? (task.subtasks || []) : this.tempSubtasks;
    const doneCount = subtasks.filter(s => s.done).length;

    this.subtasksRatio.textContent = `${doneCount}/${subtasks.length}`;
    this.subtasksProgressFill.style.width = subtasks.length ? `${(doneCount / subtasks.length) * 100}%` : '0%';

    if (subtasks.length === 0) {
      this.subtasksList.innerHTML = '<li style="color: var(--text-muted); font-size: 0.775rem;">No checklist steps added yet.</li>';
      return;
    }

    subtasks.forEach((sub, idx) => {
      const li = document.createElement('li');
      li.className = `subtask-item ${sub.done ? 'completed' : ''}`;
      li.innerHTML = `
        <input type="checkbox" ${sub.done ? 'checked' : ''} data-idx="${idx}">
        <span style="flex: 1;">${sub.title}</span>
        <button type="button" class="btn-icon-subtle delete-subtask-btn" data-idx="${idx}">&times;</button>
      `;

      li.querySelector('input').addEventListener('change', (e) => {
        sub.done = e.target.checked;
        if (task) this.saveTasks();
        this.renderModalSubtasks(task);
        this.renderKanban();
      });

      li.querySelector('.delete-subtask-btn').addEventListener('click', () => {
        subtasks.splice(idx, 1);
        if (task) this.saveTasks();
        this.renderModalSubtasks(task);
        this.renderKanban();
      });

      this.subtasksList.appendChild(li);
    });
  }

  handleAddSubtask() {
    const val = this.newSubtaskInput.value.trim();
    if (!val) return;

    if (this.editingTaskId) {
      const task = this.tasks.find(t => t.id === this.editingTaskId);
      if (!task) return;
      if (!task.subtasks) task.subtasks = [];
      task.subtasks.push({ id: `sub-${Date.now()}`, title: val, done: false });
      this.saveTasks();
      this.renderModalSubtasks(task);
    } else {
      this.tempSubtasks.push({ id: `sub-${Date.now()}`, title: val, done: false });
      this.renderModalSubtasks(null);
    }

    this.newSubtaskInput.value = '';
    this.soundFX.play('click');
  }

  renderModalComments(task) {
    this.commentsStream.innerHTML = '';
    const comments = task ? (task.comments || []) : this.tempComments;

    if (comments.length === 0) {
      this.commentsStream.innerHTML = '<div style="color: var(--text-muted); font-size: 0.775rem;">No team comments yet.</div>';
      return;
    }

    comments.forEach(c => {
      const bubble = document.createElement('div');
      bubble.className = 'comment-bubble';
      bubble.innerHTML = `
        <div class="comment-author-row">
          <span>${c.author}</span>
          <span style="font-weight: 500; color: var(--text-muted);">${c.time}</span>
        </div>
        <div>${c.text}</div>
      `;
      this.commentsStream.appendChild(bubble);
    });
  }

  handlePostComment() {
    const text = this.newCommentInput.value.trim();
    if (!text) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: `${this.currentUser.name} (${this.currentUser.role})`,
      text,
      time: 'Just now'
    };

    if (this.editingTaskId) {
      const task = this.tasks.find(t => t.id === this.editingTaskId);
      if (!task) return;
      if (!task.comments) task.comments = [];
      task.comments.push(newComment);
      this.saveTasks();
      this.renderModalComments(task);
      this.logAction('COMMENT', 'task', `Commented on "${task.title}"`);
    } else {
      this.tempComments.push(newComment);
      this.renderModalComments(null);
    }

    this.newCommentInput.value = '';
    this.soundFX.play('click');
    this.showToast('Comment posted!');
  }

  handleTaskFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('taskTitleInput').value.trim();
    const desc = document.getElementById('taskDescInput').value.trim();
    const projectId = document.getElementById('taskProjectSelect').value;
    const status = document.getElementById('taskStatusSelect').value;
    const priority = document.getElementById('taskPrioritySelect').value;
    const deadline = document.getElementById('taskDeadlineInput').value;
    const assigneeId = document.getElementById('taskAssigneeSelect').value;

    if (!title) return;

    if (this.editingTaskId) {
      // Update existing
      const task = this.tasks.find(t => t.id === this.editingTaskId);
      if (task) {
        task.title = title;
        task.desc = desc;
        task.projectId = projectId;
        task.status = status;
        task.priority = priority;
        task.deadline = deadline;
        task.assigneeId = assigneeId;
      }
      this.showToast('Task updated successfully!');
      this.logAction('UPDATE', 'task', `Updated task "${title}"`);
    } else {
      // Create new
      const newTask = {
        id: `TSK-${Math.floor(100 + Math.random() * 900)}`,
        title,
        desc,
        projectId,
        status,
        priority,
        deadline,
        assigneeId,
        subtasks: [...this.tempSubtasks],
        comments: [...this.tempComments]
      };
      this.tasks.unshift(newTask);
      this.showToast(`Created new task: "${title}"`);
      this.logAction('CREATE', 'task', `Created new task "${title}"`);
    }

    this.soundFX.play('click');
    this.saveTasks();
    this.taskModal.close();
    this.render();
  }

  handleDeleteCurrentTask() {
    if (!this.editingTaskId) return;

    // Check member delete policy
    const policyAllow = document.getElementById('policyAllowMemberDelete')?.checked;
    if (!this.isAdmin() && !policyAllow) {
      this.showToast('Administrative policy restricts task deletion to Workspace Admins.');
      return;
    }

    this.showConfirmDialog('Delete Task', 'Are you sure you want to permanently delete this task from the workspace?', () => {
      const task = this.tasks.find(t => t.id === this.editingTaskId);
      this.tasks = this.tasks.filter(t => t.id !== this.editingTaskId);
      this.saveTasks();
      this.taskModal.close();
      this.showToast('Task removed from workspace.');
      if (task) this.logAction('DELETE', 'task', `Deleted task "${task.title}"`);
      this.render();
    });
  }

  // Create Project
  handleNewProjectSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('newProjectTitle').value.trim();
    const desc = document.getElementById('newProjectDesc').value.trim();
    const color = document.getElementById('newProjectColor').value;

    if (!title) return;

    const newProject = {
      id: `proj-${Date.now()}`,
      title,
      desc,
      color,
      status: 'Active'
    };

    this.projects.push(newProject);
    this.activeProjectId = newProject.id;
    this.saveProjects();

    this.newProjectModal.close();
    this.newProjectForm.reset();
    this.soundFX.play('complete');
    this.showToast(`Created Project "${title}"`);
    this.logAction('CREATE', 'project', `Created project "${title}"`);
    this.render();
  }

  // Generate Markdown Summary Digest
  generateMarkdownSummary() {
    let md = `# TaskFlow Workspace Sprint Digest (${new Date().toLocaleDateString()})\n\n`;
    this.projects.forEach(p => {
      md += `## ${p.title}\n${p.desc}\n\n`;
      const pTasks = this.tasks.filter(t => t.projectId === p.id);
      if (pTasks.length === 0) {
        md += `*No active tasks.*\n\n`;
      } else {
        pTasks.forEach(t => {
          const assignee = this.teamMembers.find(u => u.id === t.assigneeId)?.name || 'Unassigned';
          md += `- [${t.status === 'done' ? 'x' : ' '}] **${t.title}** (${t.priority} | Due: ${t.deadline} | @${assignee})\n`;
        });
        md += `\n`;
      }
    });
    return md;
  }

  // ==========================================================================
  // CONFETTI CELEBRATION (NATIVE ZERO-DEPENDENCY)
  // ==========================================================================
  triggerConfetti() {
    if (!this.confettiCanvas || !this.confettiCtx) return;

    this.confettiCanvas.width = window.innerWidth;
    this.confettiCanvas.height = window.innerHeight;

    const colors = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    this.particles = [];

    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        life: 1.0
      });
    }

    const animate = () => {
      if (this.particles.length === 0) {
        this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
        return;
      }

      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

      this.particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.42; // Gravity
        p.rotation += p.vr;
        p.life -= 0.018;

        if (p.life > 0) {
          this.confettiCtx.save();
          this.confettiCtx.translate(p.x, p.y);
          this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
          this.confettiCtx.fillStyle = p.color;
          this.confettiCtx.globalAlpha = p.life;
          this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          this.confettiCtx.restore();
        } else {
          this.particles.splice(idx, 1);
        }
      });

      if (this.particles.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  showToast(message) {
    if (!this.toastNotification) return;
    this.toastNotification.textContent = message;
    this.toastNotification.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastNotification.classList.remove('show');
    }, 3200);
  }

  capitalize(str) {
    return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  }
}

// Instantiate on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  window.taskFlowApp = new TaskFlowApp();
});
