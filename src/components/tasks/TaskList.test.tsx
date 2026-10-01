import { render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';

describe('TaskList', () => {
  it('shows the empty state when there are no tasks', () => {
    render(<TaskList taskList={[]} />);

    expect(screen.getByRole('heading', { name: 'Tasks' })).toBeInTheDocument();
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
    expect(
      screen.getByText('Add a task above to get started.'),
    ).toBeInTheDocument();
  });

  it('renders the task list when there are tasks', () => {
    const taskList = ['Buy groceries', 'Study JavaScript'];

    render(<TaskList taskList={taskList} />);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Study JavaScript')).toBeInTheDocument();
  });

  it('renders each task as a list item', () => {
    const taskList = ['Buy groceries', 'Study JavaScript'];
    render(<TaskList taskList={taskList} />);
    const tasks = screen.getAllByRole('listitem');

    expect(tasks).toHaveLength(2);
    expect(tasks[0]).toHaveTextContent('Buy groceries');
    expect(tasks[1]).toHaveTextContent('Study JavaScript');
  });

  it('does not render the empty state when there are tasks', () => {
    render(<TaskList taskList={['Buy groceries']} />);

    expect(screen.queryByText('No tasks yet')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Add a task above to get started.'),
    ).not.toBeInTheDocument();
  });
});