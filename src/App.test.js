import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro heading on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/The trusted/i);
  expect(linkElement).toBeInTheDocument();
});
