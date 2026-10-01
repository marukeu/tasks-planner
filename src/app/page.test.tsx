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
});
