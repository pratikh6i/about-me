import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders the hero section', () => {
        render(<App />);
        expect(screen.getByText(/Unlock Your Hair/i)).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<App />);
        // Use getAllByText since LushLocks appears multiple times
        const lushLocksElements = screen.getAllByText(/LushLocks/i);
        expect(lushLocksElements.length).toBeGreaterThan(0);
    });

    it('renders the services section', () => {
        render(<App />);
        expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    });
});
