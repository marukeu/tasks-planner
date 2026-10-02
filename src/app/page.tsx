'use client';

import { useState } from 'react';
import { TaskList } from '../components/tasks/TaskList';
import { TaskForm } from '../components/tasks/TaskForm';
import type { Task } from '../types/task';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleCreateTask = (title: string) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  };

  const handleToggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleUpdateTask = (id: string, title: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, title } : task,
      ),
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-10 px-6 sm:px-12 lg:px-20">
      <hgroup className="text-center mb-10">
        <h1 className="font-extrabold text-4xl text-heading">Tasks Planner</h1>
        <p className="text-text-muted">Create and organize your tasks.</p>
      </hgroup>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onUpdateTask={handleUpdateTask}
      />
    </main>
  );
}
