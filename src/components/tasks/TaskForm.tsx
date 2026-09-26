import { useState } from 'react';

type TaskFormProps = {
  onCreateTask: (task: string) => void;
};

export function TaskForm({ onCreateTask }: TaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task = title.trim();

    if (task.length > 0) {
      onCreateTask(task);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">Task title</label>
      <input
        id="task-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Create task</button>
    </form>
  );
}
