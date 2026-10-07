import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskEditForm } from './TaskEditForm';

describe('TaskEditForm', () => {
  const defaultProps = {
    taskId: 'task-1',
    initialTitle: 'Buy groceries',
    onSave: jest.fn(),
    onCancel: jest.fn(),
  };

  it('renders the initial title and form actions', () => {
    render(<TaskEditForm {...defaultProps} />);

    expect(screen.getByRole('textbox', { name: 'Edit task title' })).toHaveValue(
      'Buy groceries',
    );
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('saves the trimmed title', async () => {
    const user = userEvent.setup();
    const onSave = jest.fn();
    render(<TaskEditForm {...defaultProps} onSave={onSave} />);

    const input = screen.getByRole('textbox', { name: 'Edit task title' });
    await user.clear(input);
    await user.type(input, '  Buy vegetables  ');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSave).toHaveBeenCalledWith('Buy vegetables');
  });

  it('does not save an empty title and shows an error', async () => {
    const user = userEvent.setup();
    const onSave = jest.fn();
    render(<TaskEditForm {...defaultProps} onSave={onSave} />);

    const input = screen.getByRole('textbox', { name: 'Edit task title' });
    await user.clear(input);
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSave).not.toHaveBeenCalled();
    expect(
      screen.getByText('Enter a task title before saving.'),
    ).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('clears the validation error when the title changes', async () => {
    const user = userEvent.setup();
    render(<TaskEditForm {...defaultProps} />);

    const input = screen.getByRole('textbox', { name: 'Edit task title' });
    await user.clear(input);
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(
      screen.getByText('Enter a task title before saving.'),
    ).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');

    await user.type(input, 'Buy vegetables');

    expect(
      screen.queryByText('Enter a task title before saving.'),
    ).not.toBeInTheDocument();
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('calls onCancel without saving', async () => {
    const user = userEvent.setup();
    const onSave = jest.fn();
    const onCancel = jest.fn();
    render(
      <TaskEditForm
        {...defaultProps}
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onSave).not.toHaveBeenCalled();
  });
});
