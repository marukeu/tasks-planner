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
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 md:p-6 w-full md:max-w-140 rounded-md bg-white"
    >
      <label htmlFor="task-title" className="font-medium">
        Task title
      </label>
      <div className="flex w-full mt-2 items-center flex-col md:flex-row">
        <input
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full
            border 
            border-border
            rounded-md 
            flex-1 
            mb-2
            md:mb-0
            md:mr-2
            p-2 
            h-10
            focus:outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20"
          placeholder="e.g. Buy groceries"
        />
        <button
          type="submit"
          className="
          w-full
          md:w-auto
          px-4
          py-2
          rounded-md
          h-10
          font-medium
          text-sm
          text-white
          bg-primary
          hover:bg-primary-hover
          hover:shadow-md
          cursor-pointer
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary/40
          focus-visible:ring-offset-2"
        >
          Create task
        </button>
      </div>
    </form>
  );
}
