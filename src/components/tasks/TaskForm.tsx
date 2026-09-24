import { useState } from 'react';

type TaskFormProps = {
  onCreateTask: (task: string) => void;
};

export function TaskForm({ onCreateTask }: TaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateTask(title);
    setTitle(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Create task</button>
    </form>
  );
}
