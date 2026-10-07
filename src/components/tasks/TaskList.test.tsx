import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskList } from './TaskList';

const tasks = [
  { id: 'task-1', title: 'Buy groceries', completed: false },
  { id: 'task-2', title: 'Study JavaScript', completed: true },
];

describe('TaskList', () => {
  const defaultProps = {
    onToggleTask: jest.fn(),
    onUpdateTask: jest.fn(),
    onDeleteTask: jest.fn(),
  };

  it('shows the empty state when there are no tasks', () => {
    render(<TaskList tasks={[]} {...defaultProps} />);

    expect(screen.getByRole('heading', { name: 'Tasks' })).toBeInTheDocument();
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
    expect(
      screen.getByText('Add a task above to get started.'),
    ).toBeInTheDocument();
  });

  it('renders the task list when there are tasks', () => {
    render(<TaskList tasks={tasks} {...defaultProps} />);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Study JavaScript')).toBeInTheDocument();
  });

  it('renders each task as a list item', () => {
    render(<TaskList tasks={tasks} {...defaultProps} />);
    const renderedTasks = screen.getAllByRole('listitem');

    expect(renderedTasks).toHaveLength(2);
    expect(renderedTasks[0]).toHaveTextContent('Buy groceries');
    expect(renderedTasks[1]).toHaveTextContent('Study JavaScript');
  });

  it('does not render the empty state when there are tasks', () => {
    render(<TaskList tasks={[tasks[0]]} {...defaultProps} />);

    expect(screen.queryByText('No tasks yet')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Add a task above to get started.'),
    ).not.toBeInTheDocument();
  });

  it('renders each task checkbox with its completion state', () => {
    render(<TaskList tasks={tasks} {...defaultProps} />);

    expect(
      screen.getByRole('checkbox', { name: 'Mark Buy groceries as complete' }),
    ).not.toBeChecked();
    expect(
      screen.getByRole('checkbox', {
        name: 'Mark Study JavaScript as incomplete',
      }),
    ).toBeChecked();
  });

  it('notifies the parent when a task is toggled', async () => {
    const user = userEvent.setup();
    const onToggleTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={onToggleTask}
        onUpdateTask={jest.fn()}
        onDeleteTask={jest.fn()}
      />,
    );

    await user.click(
      screen.getByRole('checkbox', { name: 'Mark Buy groceries as complete' }),
    );

    expect(onToggleTask).toHaveBeenCalledWith('task-1');
  });

  it('toggles a task when its title is clicked', async () => {
    const user = userEvent.setup();
    const onToggleTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={onToggleTask}
        onUpdateTask={jest.fn()}
        onDeleteTask={jest.fn()}
      />,
    );

    await user.click(screen.getByText('Buy groceries'));

    expect(onToggleTask).toHaveBeenCalledWith('task-1');
  });

  it('allows a task title to be edited and saved', async () => {
    const user = userEvent.setup();
    const onUpdateTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={jest.fn()}
        onUpdateTask={onUpdateTask}
        onDeleteTask={jest.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Edit Buy groceries' }));
    const input = screen.getByRole('textbox', { name: 'Edit task title' });
    await user.clear(input);
    await user.type(input, 'Buy vegetables');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onUpdateTask).toHaveBeenCalledWith('task-1', 'Buy vegetables');
    expect(
      screen.queryByRole('textbox', { name: 'Edit task title' }),
    ).not.toBeInTheDocument();
  });

  it('does not save an empty or whitespace-only title', async () => {
    const user = userEvent.setup();
    const onUpdateTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={jest.fn()}
        onUpdateTask={onUpdateTask}
        onDeleteTask={jest.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Edit Buy groceries' }));
    const input = screen.getByRole('textbox', { name: 'Edit task title' });
    await user.clear(input);
    await user.type(input, '   ');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onUpdateTask).not.toHaveBeenCalled();
    expect(
      screen.getByText('Enter a task title before saving.'),
    ).toBeInTheDocument();
  });

  it('cancels editing without saving changes', async () => {
    const user = userEvent.setup();
    const onUpdateTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={jest.fn()}
        onUpdateTask={onUpdateTask}
        onDeleteTask={jest.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Edit Buy groceries' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onUpdateTask).not.toHaveBeenCalled();
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });

  it('asks for confirmation before deleting a task', async () => {
    const user = userEvent.setup();
    const onDeleteTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={jest.fn()}
        onUpdateTask={jest.fn()}
        onDeleteTask={onDeleteTask}
      />,
    );

    await user.click(
      screen.getByRole('button', { name: 'Delete Buy groceries' }),
    );

    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    expect(onDeleteTask).not.toHaveBeenCalled();
  });

  it('cancels deletion without removing the task', async () => {
    const user = userEvent.setup();
    const onDeleteTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={jest.fn()}
        onUpdateTask={jest.fn()}
        onDeleteTask={onDeleteTask}
      />,
    );

    await user.click(
      screen.getByRole('button', { name: 'Delete Buy groceries' }),
    );
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onDeleteTask).not.toHaveBeenCalled();
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });

  it('deletes the task after confirmation', async () => {
    const user = userEvent.setup();
    const onDeleteTask = jest.fn();
    render(
      <TaskList
        tasks={tasks}
        onToggleTask={jest.fn()}
        onUpdateTask={jest.fn()}
        onDeleteTask={onDeleteTask}
      />,
    );

    await user.click(
      screen.getByRole('button', { name: 'Delete Buy groceries' }),
    );
    await user.click(screen.getByRole('button', { name: 'Delete' }));

    expect(onDeleteTask).toHaveBeenCalledWith('task-1');
  });
});
