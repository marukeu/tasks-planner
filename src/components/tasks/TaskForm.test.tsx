import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskForm } from './TaskForm';

describe('TaskForm', () => {
  it('renders the task title input and create button', () => {
    render(<TaskForm onCreateTask={jest.fn()} />);

    expect(screen.getByLabelText('Task title')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Create task' }),
    ).toBeInTheDocument();
  });

  it('allows the user to type a task', async () => {
    const user = userEvent.setup();
    render(<TaskForm onCreateTask={jest.fn()} />);

    const input = screen.getByLabelText('Task title');
    await user.type(input, 'Buy groceries');

    expect(input).toHaveValue('Buy groceries');
  });

  it('calls onCreateTask when the form is submitted', async () => {
    const user = userEvent.setup();
    const onCreateTask = jest.fn();
    render(<TaskForm onCreateTask={onCreateTask} />);

    const input = screen.getByLabelText('Task title');
    await user.type(input, 'Buy groceries');
    await user.click(screen.getByRole('button', { name: 'Create task' }));

    expect(onCreateTask).toHaveBeenCalledWith('Buy groceries');
  });

  it('clears the input after creating a task', async () => {
    const user = userEvent.setup();
    render(<TaskForm onCreateTask={jest.fn()} />);

    const input = screen.getByLabelText('Task title');
    await user.type(input, 'Buy groceries');
    await user.click(screen.getByRole('button', { name: 'Create task' }));

    expect(input).toHaveValue('');
  });

  it('does not create a task when the title contains only spaces', async () => {
    const user = userEvent.setup();
    const onCreateTask = jest.fn();
    render(<TaskForm onCreateTask={onCreateTask} />);

    const input = screen.getByLabelText('Task title');
    await user.type(input, '   ');
    await user.click(screen.getByRole('button', { name: 'Create task' }));

    expect(onCreateTask).not.toHaveBeenCalled();
  });
});
