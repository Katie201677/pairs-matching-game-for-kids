import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/game/i);
  expect(linkElement).toBeInTheDocument();
  expect(1 * 2).toEqual(2);
});
