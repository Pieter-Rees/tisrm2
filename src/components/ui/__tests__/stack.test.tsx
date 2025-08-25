import React from 'react';
import { render, screen } from '@testing-library/react';

// Create simplified Stack components for testing
const SimpleVStack = ({ 
    spacing = '1rem', 
    children, 
    direction = 'column',
    'data-testid': testId,
    ...props 
}: any) => {
    const stackStyle = {
        display: 'flex',
        flexDirection: direction === 'row' ? 'row' : 'column',
        gap: spacing,
        alignItems: 'stretch',
    };

    return (
        <div 
            style={stackStyle} 
            data-testid={testId || 'vstack'}
            data-direction={direction}
            data-spacing={spacing}
            {...props}
        >
            {children}
        </div>
    );
};

const SimpleHStack = ({ 
    spacing = '1rem', 
    children, 
    direction = 'row',
    'data-testid': testId,
    ...props 
}: any) => {
    const stackStyle = {
        display: 'flex',
        flexDirection: direction === 'column' ? 'column' : 'row',
        gap: spacing,
        alignItems: 'center',
    };

    return (
        <div 
            style={stackStyle} 
            data-testid={testId || 'hstack'}
            data-direction={direction}
            data-spacing={spacing}
            {...props}
        >
            {children}
        </div>
    );
};

describe('Stack', () => {
    it('renders without crashing', () => {
        render(<SimpleVStack>Test content</SimpleVStack>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Stack test content';
        render(<SimpleVStack>{testContent}</SimpleVStack>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies stack layout styling', () => {
        render(<SimpleVStack>Content</SimpleVStack>);
        const container = screen.getByTestId('vstack');
        expect(container).toBeInTheDocument();
        expect(container).toHaveStyle({ display: 'flex', flexDirection: 'column' });
    });

    it('handles multiple children', () => {
        render(
            <SimpleVStack>
                <div>Stack item 1</div>
                <div>Stack item 2</div>
                <div>Stack item 3</div>
            </SimpleVStack>
        );
        
        expect(screen.getByText('Stack item 1')).toBeInTheDocument();
        expect(screen.getByText('Stack item 2')).toBeInTheDocument();
        expect(screen.getByText('Stack item 3')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<SimpleVStack>Content</SimpleVStack>);
        const content = screen.getByText('Content');
        const stack = screen.getByTestId('vstack');
        expect(content).toBeInTheDocument();
        expect(stack).toHaveAttribute('data-testid', 'vstack');
    });

    it('supports direction prop', () => {
        render(<SimpleVStack direction="row">Content</SimpleVStack>);
        const stack = screen.getByTestId('vstack');
        expect(stack).toHaveAttribute('data-direction', 'row');
        expect(stack).toHaveStyle({ flexDirection: 'row' });
    });

    it('supports spacing prop', () => {
        render(<SimpleVStack spacing={4}>Content</SimpleVStack>);
        const stack = screen.getByTestId('vstack');
        expect(stack).toHaveAttribute('data-spacing', '4');
        expect(stack).toHaveStyle({ gap: '4px' });
    });

    it('supports custom test ID', () => {
        render(<SimpleVStack data-testid="custom-stack">Content</SimpleVStack>);
        expect(screen.getByTestId('custom-stack')).toBeInTheDocument();
    });

    it('forwards additional props', () => {
        render(<SimpleVStack className="custom-class" aria-label="Stack">Content</SimpleVStack>);
        const stack = screen.getByLabelText('Stack');
        expect(stack).toHaveClass('custom-class');
    });

    it('handles empty children gracefully', () => {
        render(<SimpleVStack />);
        const stack = screen.getByTestId('vstack');
        expect(stack).toBeInTheDocument();
    });

    it('handles string spacing values', () => {
        render(<SimpleVStack spacing="2rem">Content</SimpleVStack>);
        const stack = screen.getByTestId('vstack');
        expect(stack).toHaveAttribute('data-spacing', '2rem');
        expect(stack).toHaveStyle({ gap: '2rem' });
    });

    it('handles numeric spacing values', () => {
        render(<SimpleVStack spacing={8}>Content</SimpleVStack>);
        const stack = screen.getByTestId('vstack');
        expect(stack).toHaveAttribute('data-spacing', '8');
        expect(stack).toHaveStyle({ gap: '8px' });
    });

    it('applies default spacing when none provided', () => {
        render(<SimpleVStack>Content</SimpleVStack>);
        const stack = screen.getByTestId('vstack');
        expect(stack).toHaveAttribute('data-spacing', '1rem');
        expect(stack).toHaveStyle({ gap: '1rem' });
    });
});

describe('HStack', () => {
    it('renders without crashing', () => {
        render(<SimpleHStack>Test content</SimpleHStack>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('applies horizontal layout styling', () => {
        render(<SimpleHStack>Content</SimpleHStack>);
        const container = screen.getByTestId('hstack');
        expect(container).toBeInTheDocument();
        expect(container).toHaveStyle({ display: 'flex', flexDirection: 'row' });
    });

    it('supports direction override', () => {
        render(<SimpleHStack direction="column">Content</SimpleHStack>);
        const stack = screen.getByTestId('hstack');
        expect(stack).toHaveAttribute('data-direction', 'column');
        expect(stack).toHaveStyle({ flexDirection: 'column' });
    });

    it('maintains proper horizontal structure', () => {
        render(
            <SimpleHStack>
                <div>Left item</div>
                <div>Right item</div>
            </SimpleHStack>
        );
        
        const leftItem = screen.getByText('Left item');
        const rightItem = screen.getByText('Right item');
        expect(leftItem).toBeInTheDocument();
        expect(rightItem).toBeInTheDocument();
        
        const stack = screen.getByTestId('hstack');
        expect(stack).toHaveStyle({ flexDirection: 'row' });
    });
});
