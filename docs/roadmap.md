# Tasks Planner Roadmap

## Phase 1 — Core Task Management

### Task 1 — Create Tasks
- [x] Create task form
- [x] Validate task title
- [x] Add task to the list
- [x] Add automated tests

### Task 2 — View Tasks
- [x] Display task list
- [x] Display task title
- [x] Add empty state
- [x] Add accessible task list structure
- [x] Add automated tests

### Task 3 — Complete Tasks
- [x] Add task completion state
- [x] Add checkbox interaction
- [x] Allow clicking the task title to toggle completion
- [x] Visually distinguish completed tasks
- [x] Allow completed tasks to be marked as pending
- [x] Add unique task IDs
- [x] Add automated tests

### Task 4 — Edit Tasks
- [x] Add task editing interaction
- [x] Allow users to update the task title
- [x] Validate edited tasks
- [x] Add automated tests

### Task 5 — Delete Tasks
- [x] Add task deletion interaction
- [x] Remove deleted tasks from the list
- [x] Consider confirmation for accidental deletion
- [x] Add automated tests

---

## Phase 2 — Persistence

### Task 6 — Backend Setup
- [x] Create Node.js backend
- [x] Configure TypeScript
- [x] Configure Express
- [x] Add backend development scripts
- [x] Add `/health` endpoint
- [x] Add backend tests

### Task 7 — Task REST API
- [ ] Implement `GET /tasks`
- [ ] Implement `POST /tasks`
- [ ] Implement `PATCH /tasks/:id`
- [ ] Implement `DELETE /tasks/:id`
- [ ] Add request validation
- [ ] Add error handling
- [ ] Add API tests

### Task 8 — PostgreSQL
- [ ] Set up PostgreSQL locally
- [ ] Configure Docker for local development
- [ ] Define the task database schema
- [ ] Configure database connection
- [ ] Add ORM
- [ ] Add database migrations
- [ ] Persist task creation
- [ ] Persist task updates
- [ ] Persist task deletion

### Task 9 — Connect Frontend and Backend
- [ ] Replace local task state as the source of truth
- [ ] Fetch tasks from the API
- [ ] Create tasks through the API
- [ ] Update tasks through the API
- [ ] Delete tasks through the API
- [ ] Add loading states
- [ ] Add API error states
- [ ] Add integration tests

### Task 10 — Production Persistence
- [ ] Deploy the backend
- [ ] Set up a hosted PostgreSQL database
- [ ] Configure production environment variables
- [ ] Connect the production frontend to the API
- [ ] Verify production CRUD behavior

---

## Phase 3 — Task Organization

### Task 11 — Categorize Tasks
- [ ] Add categories to tasks
- [ ] Display task categories
- [ ] Allow users to change categories
- [ ] Add tests

### Task 12 — Filter Tasks
- [ ] Filter by completion status
- [ ] Filter by category
- [ ] Update the task list based on filters
- [ ] Allow filters to be cleared
- [ ] Add tests

---

## Phase 4 — Task Details

### Task 13 — Task Details
- [ ] Add task description
- [ ] Add due date
- [ ] Add priority
- [ ] Add tags
- [ ] Add subtasks

---

## Phase 5 — Search

### Task 14 — Task Search
- [ ] Search tasks by title
- [ ] Search tasks by description
- [ ] Combine search with filters
- [ ] Add tests

---

## Phase 6 — User Accounts

### Task 15 — Authentication
- [ ] Add user registration
- [ ] Add login
- [ ] Add authentication
- [ ] Associate tasks with users
- [ ] Restrict task access to the authenticated user
- [ ] Add authentication tests

---

## Engineering & Quality

These concerns will evolve throughout the project rather than being treated as a single feature.

### Testing
- [x] Unit/component testing with Jest and React Testing Library
- [ ] Backend/API testing
- [ ] End-to-end testing
- [ ] Test CI pipeline

### CI/CD
- [x] GitHub Actions CI
- [x] Run tests on pull requests
- [x] Validate production build
- [x] Protect `main` with required checks
- [x] Vercel preview deployments
- [x] Production deployment from `main`

### Accessibility
- [x] Semantic HTML
- [x] Accessible labels
- [x] Keyboard-accessible interactions
- [ ] Accessibility review
- [ ] Automated accessibility checks

### Documentation
- [x] Product requirements
- [x] Roadmap
- [x] README
- [ ] Backend/API documentation
- [ ] Architecture documentation
- [ ] Document relevant technical decisions

### AI-assisted Development
- [x] Use AI-assisted development during feature implementation
- [x] Review and validate AI-generated suggestions
- [ ] Establish reusable AI development instructions/skills
- [ ] Experiment with agentic development workflows