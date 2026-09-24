type TaskListProps = {
  taskList: string[];
};

export function TaskList({ taskList }: TaskListProps) {
  return (
    <section>
      {taskList.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {taskList.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
