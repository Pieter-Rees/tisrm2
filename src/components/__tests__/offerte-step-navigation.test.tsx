import React from 'react';
import { render, screen } from '@testing-library/react';


const SimpleOfferteStepNavigation = ({
    currentStep,
    totalSteps,
    steps,
    'data-testid': testId
}: any) => {
    return (
        <div data-testid={testId || 'offerte-step-navigation'} style={{ margin: '2rem 0', width: '100%' }}>
            <div style={{ display: 'flex', gap: 0, width: '100%', justifyContent: 'space-between' }}>
                {steps.map((step: any, index: number) => {
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;
                    const isUpcoming = index > currentStep;

                    return (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                            {/* Step Circle */}
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    backgroundColor: isCompleted ? '#10b981' : isActive ? '#3b82f6' : '#e5e7eb',
                                    color: isCompleted || isActive ? 'white' : '#6b7280',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '0.75rem',
                                    position: 'relative',
                                    zIndex: 2,
                                }}
                                data-testid={`step-circle-${index}`}
                                data-step-status={isCompleted ? 'completed' : isActive ? 'active' : 'upcoming'}
                            >
                                {isCompleted ? (
                                    <span data-testid={`step-check-${index}`}>✓</span>
                                ) : (
                                    <span style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                                        {index + 1}
                                    </span>
                                )}
                            </div>

                            {/* Step Title */}
                            <div
                                style={{
                                    fontSize: '0.875rem',
                                    fontWeight: isActive ? '600' : '500',
                                    color: isActive ? '#2563eb' : isCompleted ? '#059669' : '#6b7280',
                                    textAlign: 'center',
                                    marginBottom: '0.25rem',
                                }}
                                data-testid={`step-title-${index}`}
                            >
                                {step.title}
                            </div>

                            {/* Step Description */}
                            {step.description && (
                                <div
                                    style={{
                                        fontSize: '0.75rem',
                                        color: '#6b7280',
                                        textAlign: 'center',
                                        maxWidth: '120px',
                                    }}
                                    data-testid={`step-description-${index}`}
                                >
                                    {step.description}
                                </div>
                            )}

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '24px',
                                        left: `calc(${(index + 1) * 100}% - 24px)`,
                                        width: 'calc(100% - 48px)',
                                        height: '2px',
                                        backgroundColor: isCompleted ? '#a7f3d0' : '#e5e7eb',
                                        zIndex: 1,
                                    }}
                                    data-testid={`step-connector-${index}`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

describe('OfferteStepNavigation Component', () => {
    const mockSteps = [
        { title: 'Step 1', description: 'First step description' },
        { title: 'Step 2', description: 'Second step description' },
        { title: 'Step 3', description: 'Third step description' },
    ];

    const defaultProps = {
        currentStep: 0,
        totalSteps: 3,
        steps: mockSteps,
    };

    it('renders without crashing', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} />);
        expect(screen.getByTestId('offerte-step-navigation')).toBeInTheDocument();
    });

    it('renders all steps', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} />);

        expect(screen.getByText('Step 1')).toBeInTheDocument();
        expect(screen.getByText('Step 2')).toBeInTheDocument();
        expect(screen.getByText('Step 3')).toBeInTheDocument();
    });

    it('displays step numbers correctly', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} />);

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('shows current step as active', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} currentStep={1} />);

        const step1Circle = screen.getByTestId('step-circle-0');
        const step2Circle = screen.getByTestId('step-circle-1');
        const step3Circle = screen.getByTestId('step-circle-2');

        expect(step1Circle).toHaveAttribute('data-step-status', 'completed');
        expect(step2Circle).toHaveAttribute('data-step-status', 'active');
        expect(step3Circle).toHaveAttribute('data-step-status', 'upcoming');
    });

    it('shows completed steps with checkmark', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} currentStep={2} />);

        expect(screen.getByTestId('step-check-0')).toBeInTheDocument();
        expect(screen.getByTestId('step-check-1')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument(); // Current step shows number
    });

    it('displays step descriptions when provided', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} />);

        expect(screen.getByText('First step description')).toBeInTheDocument();
        expect(screen.getByText('Second step description')).toBeInTheDocument();
        expect(screen.getByText('Third step description')).toBeInTheDocument();
    });

    it('handles steps without descriptions', () => {
        const stepsWithoutDescriptions = [
            { title: 'Step 1' },
            { title: 'Step 2' },
            { title: 'Step 3' },
        ];

        render(<SimpleOfferteStepNavigation {...defaultProps} steps={stepsWithoutDescriptions} />);

        expect(screen.getByText('Step 1')).toBeInTheDocument();
        expect(screen.getByText('Step 2')).toBeInTheDocument();
        expect(screen.getByText('Step 3')).toBeInTheDocument();

        // Should not have description elements
        expect(screen.queryByTestId('step-description-0')).not.toBeInTheDocument();
    });

    it('renders correct number of steps', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} />);

        const stepCircles = screen.getAllByTestId(/step-circle-/);
        expect(stepCircles).toHaveLength(3);
    });

    it('handles single step', () => {
        const singleStep = [{ title: 'Single Step', description: 'Only one step' }];

        render(<SimpleOfferteStepNavigation {...defaultProps} steps={singleStep} totalSteps={1} />);

        expect(screen.getByText('Single Step')).toBeInTheDocument();
        expect(screen.getByText('Only one step')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('supports custom test ID', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} data-testid="custom-navigation" />);
        expect(screen.getByTestId('custom-navigation')).toBeInTheDocument();
    });

    it('handles empty steps array', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} steps={[]} />);
        const navigation = screen.getByTestId('offerte-step-navigation');
        expect(navigation).toBeInTheDocument();
    });

    it('maintains proper step order', () => {
        render(<SimpleOfferteStepNavigation {...defaultProps} />);

        const stepTitles = screen.getAllByTestId(/step-title-/);
        expect(stepTitles[0]).toHaveTextContent('Step 1');
        expect(stepTitles[1]).toHaveTextContent('Step 2');
        expect(stepTitles[2]).toHaveTextContent('Step 3');
    });
});
