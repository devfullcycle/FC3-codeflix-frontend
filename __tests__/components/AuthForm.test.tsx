import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthForm } from '@/app/components/AuthForm';

describe('AuthForm', () => {
  test('renders Login header when formType is login', () => {
    render(<AuthForm formType='login' onSubmit={jest.fn()} />);
    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
  });

  test('renders Register header when formType is register', () => {
    render(<AuthForm formType='register' onSubmit={jest.fn()} />);
    expect(screen.getByRole('heading', { name: /Register/i })).toBeInTheDocument();
  });

  test('fires onSubmit when form is submitted', () => {
    const mockSubmit = jest.fn();
    render(<AuthForm formType='login' onSubmit={mockSubmit} />);

    fireEvent.submit(screen.getByRole('form'));

    expect(mockSubmit).toHaveBeenCalled();
  });

  test('renders confirm password field only for register form', () => {
    const { rerender } = render(
      <AuthForm formType='login' onSubmit={jest.fn()} />
    );
    expect(screen.queryByPlaceholderText(/Confirm your password/i)).toBeNull();

    rerender(<AuthForm formType='register' onSubmit={jest.fn()} />);
    expect(
      screen.getByPlaceholderText(/Confirm your password/i)
    ).toBeInTheDocument();
  });
});
