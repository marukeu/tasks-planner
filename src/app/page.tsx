'use client';

import { useState } from 'react';
import { TaskList } from '../components/tasks/TaskList';
import { TaskForm } from '../components/tasks/TaskForm';

type Task = string;

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const handleCreateTask = (task: Task) => {
    setTaskList((currentTasks) => [...currentTasks, task]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-10 px-6 sm:px-12 lg:px-20">
      <hgroup className="text-center mb-10">
        <h1 className="font-extrabold text-4xl text-heading">Tasks Planner</h1>
        <p className="text-text-muted">Create and organize your tasks.</p>
      </hgroup>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskList taskList={taskList} />
    </main>
  );
}
