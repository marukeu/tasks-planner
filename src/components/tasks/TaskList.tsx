import { PencilSparkles } from 'lucide-react';
import type { Task } from '../../types/task';

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: string) => void;
};

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
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
            <li key={task.id} className="rounded-md border border-border p-3">
              <label
                htmlFor={`task-${task.id}`}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  id={`task-${task.id}`}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                  aria-label={
                    task.completed
                      ? `Mark ${task.title} as incomplete`
                      : `Mark ${task.title} as complete`
                  }
                  className="size-4 shrink-0 cursor-pointer accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                />
                <span
                  className={
                    task.completed ? 'text-text-muted line-through' : undefined
                  }
                >
                  {task.title}
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
