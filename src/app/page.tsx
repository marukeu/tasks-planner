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
    <main>
      <h1>Tasks Planner</h1>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskList taskList={taskList} />
    </main>
  );
}
