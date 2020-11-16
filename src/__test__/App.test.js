import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';
import RESULTS from '../components/Results';

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
    // screen.debug();
  });

  // test('The form will be submitted if the url is correct', async () => {
  //   // const button = screen.getByTestId('input-text');
  //   render(<App />);
  //   const form = screen.getByTestId('form');
  //   const input = screen.getByTestId('input-text');
  //   input.value = 'https://swapi.dev/api/people/';
  //   await waitFor(() => {
  //     fireEvent.submit(form);
  //     screen.debug();
  //   });
  // });
});
