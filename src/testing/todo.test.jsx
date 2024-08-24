import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import React from 'react';

test('renders the app with initial elements', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
  expect(screen.getByText(/add/i)).toBeInTheDocument();
});
test('adds a new task', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/add a new task/i), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText('New Task')).toBeInTheDocument();
});