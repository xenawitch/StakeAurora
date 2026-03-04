// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StakeAurora title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StakeAurora/i);
    expect(titleElement).toBeInTheDocument();
});
