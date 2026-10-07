import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskDeleteForm } from './TaskDeleteForm';

describe('TaskDeleteForm', () => {
  const defaultProps = {
    taskId: 'task-1',
    taskTitle: 'Buy groceries',
    onDelete: jest.fn(),
    onCancel: jest.fn(),
  };

  it('renders the confirmation dialog and task title', () => {
    render(<TaskDeleteForm {...defaultProps} />);

    expect(screen.getByRole('alertdialog')).toHaveAccessibleName(
      'Delete this task?',
    );
    expect(
      screen.getByText('"Buy groceries" will be permanently removed.'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls onDelete with the task id', async () => {
    const user = userEvent.setup();
    const onDelete = jest.fn();
    render(<TaskDeleteForm {...defaultProps} onDelete={onDelete} />);

    await user.click(screen.getByRole('button', { name: 'Delete' }));

    expect(onDelete).toHaveBeenCalledWith('task-1');
  });

  it('calls onCancel without deleting the task', async () => {
    const user = userEvent.setup();
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    render(
      <TaskDeleteForm
        {...defaultProps}
        onDelete={onDelete}
        onCancel={onCancel}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDelete).not.toHaveBeenCalled();
  });
});
