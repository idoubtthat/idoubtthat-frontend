import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user management', () => {
  render(<App />);
  const userManagement = screen.getByText(/User Management/i);
  expect(userManagement).toBeInTheDocument();
});

test('renders citation management', () => {
  render(<App />);
  const citationManagement = screen.getByText(/Citation Management/i);
  expect(citationManagement).toBeInTheDocument();
});
