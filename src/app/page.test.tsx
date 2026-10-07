import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './page';

describe('Home', () => {
  it('renders the page title and description', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'Tasks Planner' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Create and organize your tasks.'),
    ).toBeInTheDocument();
  });

  it('shows the empty state initially', () => {
    render(<Home />);

    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
  });

  it('creates and displays a task', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const input = screen.getByLabelText('Task title');
    const button = screen.getByRole('button', { name: 'Create task' });
    await user.type(input, 'Buy groceries');
    await user.click(button);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.queryByText('No tasks yet')).not.toBeInTheDocument();
  });

  it('complete and uncomplete a task', async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.type(screen.getByLabelText('Task title'), 'Buy groceries');
    await user.click(screen.getByRole('button', { name: 'Create task' }));

    const checkbox = screen.getByRole('checkbox', {
      name: 'Mark Buy groceries as complete',
    });
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(
      screen.getByRole('checkbox', {
        name: 'Mark Buy groceries as incomplete',
      }),
    ).toBeChecked();

    await user.click(
      screen.getByRole('checkbox', {
        name: 'Mark Buy groceries as incomplete',
      }),
    );

    expect(
      screen.getByRole('checkbox', {
        name: 'Mark Buy groceries as complete',
      }),
    ).not.toBeChecked();
  });

  it('edits and displays an updated task title', async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.type(screen.getByLabelText('Task title'), 'Buy groceries');
    await user.click(screen.getByRole('button', { name: 'Create task' }));
    await user.click(screen.getByRole('button', { name: 'Edit Buy groceries' }));

    const input = screen.getByRole('textbox', { name: 'Edit task title' });
    await user.clear(input);
    await user.type(input, 'Buy vegetables');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(screen.getByText('Buy vegetables')).toBeInTheDocument();
    expect(screen.queryByText('Buy groceries')).not.toBeInTheDocument();
  });

  it('confirms deletion and removes the task from the list', async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.type(screen.getByLabelText('Task title'), 'Buy groceries');
    await user.click(screen.getByRole('button', { name: 'Create task' }));
    await user.click(
      screen.getByRole('button', { name: 'Delete Buy groceries' }),
    );

    expect(screen.getByRole('alertdialog')).toHaveTextContent(
      '"Buy groceries" will be permanently removed.',
    );

    await user.click(screen.getByRole('button', { name: 'Delete' }));

    expect(screen.queryByText('Buy groceries')).not.toBeInTheDocument();
    expect(screen.getByText('No tasks yet')).toBeInTheDocument();
  });
});
