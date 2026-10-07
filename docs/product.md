# Tasks Planner

## 1. Product Overview

### Purpose

Tasks Planner is a task organization application designed to help users create, manage, organize, and track their tasks in a simple and intuitive way.

The project is also being developed as a learning project to practice and consolidate modern frontend and fullstack development concepts using React, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs, and PostgreSQL.

### Main Goal

Provide users with a simple way to:

- Create tasks
- View their tasks
- Update task information
- Mark tasks as completed
- Delete tasks
- Persist task data
- Organize and filter tasks

---

## 2. MVP

The first version of Tasks Planner focuses on the basic task management experience.

## Feature 1 — Task Management

### Epic 1.1 — Create Tasks

#### User Story

> As a user, I want to create a task so that I can keep track of something I need to do.

#### Acceptance Criteria

- The user can enter a task title.
- The user can submit the task.
- A successfully created task appears in the task list.
- A task cannot be created without a title.

---

### Epic 1.2 — View Tasks

#### User Story

> As a user, I want to see my tasks so that I know what I need to do.

#### Acceptance Criteria

- The application displays all created tasks.
- Each task displays its title.
- Tasks are displayed in a clear and readable list.
- An appropriate empty state is displayed when there are no tasks.

---

### Epic 1.3 — Complete Tasks

#### User Story

> As a user, I want to mark a task as completed so that I can keep track of my progress.

#### Acceptance Criteria

- The user can mark a pending task as completed.
- The completed state is visually distinguishable from the pending state.
- The user can mark a completed task as pending again.

---

### Epic 1.4 — Edit Tasks

#### User Story

> As a user, I want to edit a task so that I can correct or update its information.

#### Acceptance Criteria

- The user can edit an existing task.
- The user can save the changes.
- The updated information is displayed in the task list.
- The user cannot save an invalid task.

---

### Epic 1.5 — Delete Tasks

#### User Story

> As a user, I want to delete a task so that I can remove tasks I no longer need.

#### Acceptance Criteria

- The user can delete an existing task.
- The deleted task no longer appears in the task list.
- The application prevents accidental deletion when confirmation is required.

---

## Feature 2 — Task Persistence

### Epic 2.1 — Backend API

#### User Story

> As a user, I want my tasks to be stored by the application so that my data is not lost when I leave the page.

#### Acceptance Criteria

- The application provides a REST API for task management.
- The API supports creating tasks.
- The API supports retrieving tasks.
- The API supports updating tasks.
- The API supports deleting tasks.
- The API validates task data.
- The API returns appropriate HTTP status codes and error responses.

---

### Epic 2.2 — Database Persistence

#### User Story

> As a user, I want my tasks to persist between sessions so that I can access them later.

#### Acceptance Criteria

- Tasks are stored in a PostgreSQL database.
- Tasks remain available after restarting the application.
- Task creation is persisted in the database.
- Task updates are persisted in the database.
- Task deletion is reflected in the database.
- The frontend retrieves task data from the backend API.

---

## Feature 3 — Task Organization

### Epic 3.1 — Categorize Tasks

#### User Story

> As a user, I want to categorize my tasks so that I can organize them according to their context.

#### Acceptance Criteria

- A task can have a category.
- The category is displayed with the task.
- The user can change a task's category.

---

### Epic 3.2 — Filter Tasks

#### User Story

> As a user, I want to filter my tasks so that I can focus on a specific subset of tasks.

#### Acceptance Criteria

- The user can filter tasks by completion status.
- The user can filter tasks by category.
- The task list updates according to the selected filters.
- The user can clear the applied filters.

---

## 3. Future Features

The following features are outside the initial MVP and may be considered as the project evolves.

## Feature 4 — Task Details

Potential capabilities:

- Task description
- Due date
- Priority
- Tags
- Subtasks

## Feature 5 — Task Search

Potential capabilities:

- Search tasks by title
- Search tasks by description
- Combine search with filters

## Feature 6 — User Accounts

Potential capabilities:

- User registration
- Login
- Authentication
- User-specific task lists

---

## 4. Non-Functional Requirements

The application should also consider:

- Accessibility
- Responsive design
- Performance
- Maintainable and reusable components
- Type safety
- Automated testing
- Clear error handling
- Consistent code style
- Good user experience
- Secure handling of user data
- Reliable API behavior

---

## 5. Technical Direction

### Frontend

- **React** — UI and component architecture
- **Next.js** — application framework and routing
- **TypeScript** — static typing
- **Tailwind CSS** — styling
- **React Compiler** — React optimization

### Backend

- **Node.js** — backend runtime
- **Express** — REST API framework
- **PostgreSQL** — relational database
- **ORM** — database access and type-safe queries

### Development & Infrastructure

- **Git** — version control
- **GitHub** — source code repository
- **GitHub Actions** — continuous integration
- **Vercel** — frontend deployment
- **Docker** — local development environment
- **GitHub Copilot** — AI-assisted development

Additional technologies may be introduced as the product requirements evolve.