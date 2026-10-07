type TaskDeleteFormProps = {
  taskId: string;
  taskTitle: string;
  onDelete: (id: string) => void;
  onCancel: () => void;
};

export function TaskDeleteForm({
  taskId,
  taskTitle,
  onDelete,
  onCancel,
}: TaskDeleteFormProps) {
  return (
    <div
      role="alertdialog"
      aria-labelledby={`delete-task-title-${taskId}`}
      aria-describedby={`delete-task-description-${taskId}`}
      className="mt-3 rounded-md border border-danger-border bg-danger-background p-3"
    >
      <p id={`delete-task-title-${taskId}`} className="font-medium">
        Delete this task?
      </p>
      <p
        id={`delete-task-description-${taskId}`}
        className="mt-1 text-sm text-text-muted"
      >
        &quot;{taskTitle}&quot; will be permanently removed.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => onDelete(taskId)}
          className="rounded-md bg-danger px-3 py-2 text-sm font-medium text-white hover:bg-danger-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger/40 focus-visible:ring-offset-2"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-border bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
