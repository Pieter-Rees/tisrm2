import React from 'react';
import { render, screen } from '@testing-library/react';

const SimpleComponent = () => <div>Hello World</div>;

describe('SimpleComponent', () => {
    it('renders without crashing', () => {
        render(<SimpleComponent />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
});
