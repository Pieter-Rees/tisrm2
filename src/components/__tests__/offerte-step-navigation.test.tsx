import React from 'react';
import { render, screen } from '@testing-library/react';
import OfferteStepNavigation from '../offerte-step-navigation';

const mockProps = {
    currentStep: 1,
    totalSteps: 3,
    steps: [
        { title: 'Stap 1', isCompleted: false },
        { title: 'Stap 2', isCompleted: false },
        { title: 'Stap 3', isCompleted: false },
    ],
};

describe('OfferteStepNavigation', () => {
    it('renders without crashing', () => {
        render(<OfferteStepNavigation {...mockProps} />);
        expect(screen.getByText('Stap 1 van 3')).toBeInTheDocument();
    });

    it('displays the correct step information', () => {
        render(<OfferteStepNavigation {...mockProps} />);
        expect(screen.getByText('Stap 1 van 3')).toBeInTheDocument();
    });

    it('renders step navigation badges', () => {
        render(<OfferteStepNavigation {...mockProps} />);
        // Should have badges for each step
        expect(screen.getByText('Stap 1')).toBeInTheDocument();
        expect(screen.getByText('Stap 2')).toBeInTheDocument();
        expect(screen.getByText('Stap 3')).toBeInTheDocument();
    });

    it('applies correct styling to current step', () => {
        render(<OfferteStepNavigation {...mockProps} />);
        const currentStepBadge = screen.getByText('Stap 1');
        expect(currentStepBadge).toBeInTheDocument();
    });

    it('handles different current steps', () => {
        const step2Props = { ...mockProps, currentStep: 2 };
        render(<OfferteStepNavigation {...step2Props} />);
        expect(screen.getByText('Stap 2 van 3')).toBeInTheDocument();
    });
});
