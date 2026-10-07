import { useState } from 'react';

type TaskEditFormProps = {
  taskId: string;
  initialTitle: string;
  onSave: (title: string) => void;
  onCancel: () => void;
};

export function TaskEditForm({
  taskId,
  initialTitle,
  onSave,
  onCancel,
}: TaskEditFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle.length === 0) {
      setError('Enter a task title before saving.');
      return;
    }

    onSave(trimmedTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`edit-task-${taskId}`} className="font-medium">
        Edit task title
      </label>
      <input
        autoFocus
        id={`edit-task-${taskId}`}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          setError('');
        }}
        aria-required="true"
        aria-describedby={error ? `edit-error-${taskId}` : undefined}
        aria-invalid={error ? 'true' : undefined}
        className="mt-2 h-10 w-full rounded-md border border-border p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {error && (
        <p
          id={`edit-error-${taskId}`}
          role="alert"
          className="mt-2 text-sm text-error"
        >
          {error}
        </p>
      )}
      <div className="mt-3 flex gap-2">
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
