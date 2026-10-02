import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { TaskEditForm } from './TaskEditForm';
import type { Task } from '../../types/task';

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
};

export function TaskItem({ task, onToggle, onUpdate }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="rounded-md border border-border p-3">
      {isEditing ? (
        <TaskEditForm
          taskId={task.id}
          initialTitle={task.title}
          onSave={(title) => {
            onUpdate(task.id, title);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="flex items-center gap-3">
          <label
            htmlFor={`task-${task.id}`}
            className="flex min-w-0 flex-1 cursor-pointer items-center gap-3"
          >
            <input
              id={`task-${task.id}`}
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
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
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${task.title}`}
            className="shrink-0 rounded-md p-2 text-text-muted hover:bg-gray-100 hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            <Pencil size={16} aria-hidden="true" />
          </button>
        </div>
      )}
    </li>
  );
}
