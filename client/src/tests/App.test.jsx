import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders the hero section with name', () => {
        render(<App />);
        expect(screen.getByText(/Pratik Shetti/i)).toBeInTheDocument();
    });

    it('renders the navbar', () => {
        render(<App />);
        expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    });

    it('renders the automation section', () => {
        render(<App />);
        expect(screen.getByText(/Automation Arsenal/i)).toBeInTheDocument();
    });
});
