import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';

describe('Application Test', () => {
  test('renders The Header', () => {
    render(<App />);
    const linkElement = screen.getByText(/RESTy/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders The Footer', () => {
    render(<App />);
    const linkElement = screen.getByText(/2020 Saif/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('The form will not be submitted if the url is correct', async () => {
    render(<App />);
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('input-text');
    input.value = '';
    fireEvent.submit(form);
    await waitFor(() => {
      const error = screen.getByTestId('error');
      expect(error).toBeInTheDocument();
    });
  });

  test('The form will be submitted if the url is correct', async () => {
    render(<App />);
    const form = screen.getByTestId('form');
    const input = screen.getByTestId('input-text');
    input.value = 'https://swapi.dev/api/people/';
    fireEvent.submit(form);
    await waitFor(() => {
      const header = screen.getByTestId('header');
      const result = screen.getByTestId('result');
      expect(header).toBeInTheDocument();
      expect(result).toBeInTheDocument();
    });
  });
});
