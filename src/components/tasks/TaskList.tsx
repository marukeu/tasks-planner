import { PencilSparkles } from 'lucide-react';
import { TaskItem } from './TaskItem';
import type { Task } from '../../types/task';

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onUpdateTask: (id: string, title: string) => void;
};

export function TaskList({
  tasks,
  onToggleTask,
  onUpdateTask,
}: TaskListProps) {
  return (
    <section className="mb-10 p-4 md:p-6 w-full md:max-w-140 min-h-60 rounded-md bg-white">
      <h2 id="tasks-list" className="mb-6 font-semibold text-2xl">
        Tasks
      </h2>
      {tasks.length === 0 ? (
        <div className="text-center text-text-muted">
          <PencilSparkles
            size={32}
            aria-hidden="true"
            className="mx-auto my-4 block"
          />
          <p className="font-semibold text-base">No tasks yet</p>
          <p className="text-sm mt-2">Add a task above to get started.</p>
        </div>
      ) : (
        <ul aria-labelledby="tasks-list" className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onUpdate={onUpdateTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
