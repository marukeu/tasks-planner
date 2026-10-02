import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskList } from './TaskList';

const tasks = [
  { id: 'task-1', title: 'Buy groceries', completed: false },
  { id: 'task-2', title: 'Study JavaScript', completed: true },
];

describe('TaskList', () => {
  it('shows the empty state when there are no tasks', () => {
    render(<TaskList tasks={[]} onToggleTask={jest.fn()} />);

    expect(screen.getByRole('heading', { name: 'Tasks' })).toBeInTheDocument();
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
    expect(
      screen.getByText('Add a task above to get started.'),
    ).toBeInTheDocument();
  });

  it('renders the task list when there are tasks', () => {
    render(<TaskList tasks={tasks} onToggleTask={jest.fn()} />);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Study JavaScript')).toBeInTheDocument();
  });

  it('renders each task as a list item', () => {
    render(<TaskList tasks={tasks} onToggleTask={jest.fn()} />);
    const renderedTasks = screen.getAllByRole('listitem');

    expect(renderedTasks).toHaveLength(2);
    expect(renderedTasks[0]).toHaveTextContent('Buy groceries');
    expect(renderedTasks[1]).toHaveTextContent('Study JavaScript');
  });

  it('does not render the empty state when there are tasks', () => {
    render(<TaskList tasks={[tasks[0]]} onToggleTask={jest.fn()} />);

    expect(screen.queryByText('No tasks yet')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Add a task above to get started.'),
    ).not.toBeInTheDocument();
  });

  it('renders each task checkbox with its completion state', () => {
    render(<TaskList tasks={tasks} onToggleTask={jest.fn()} />);

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
    render(<TaskList tasks={tasks} onToggleTask={onToggleTask} />);

    await user.click(
      screen.getByRole('checkbox', { name: 'Mark Buy groceries as complete' }),
    );

    expect(onToggleTask).toHaveBeenCalledWith('task-1');
  });

  it('toggles a task when its title is clicked', async () => {
    const user = userEvent.setup();
    const onToggleTask = jest.fn();
    render(<TaskList tasks={tasks} onToggleTask={onToggleTask} />);

    await user.click(screen.getByText('Buy groceries'));

    expect(onToggleTask).toHaveBeenCalledWith('task-1');
  });
});
