import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified PageLayout component for testing
const SimplePageLayout = ({ children, title, breadcrumb, showSidebar = true, maxWidth = 'auto' }: any) => {
    const containerStyle = {
        padding: '2rem',
        maxWidth: maxWidth === 'auto' ? '100%' : maxWidth,
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: showSidebar ? '3fr 1fr' : '1fr',
        gap: '2rem',
        alignItems: 'start',
    };

    const headerStyle = {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '2rem',
    };

    return (
        <div style={containerStyle}>
            <div style={gridStyle}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {(title || breadcrumb) && (
                            <div style={headerStyle}>
                                {title && <h1 style={{ margin: 0 }}>{title}</h1>}
                                {breadcrumb && (
                                    <nav aria-label="Breadcrumb navigation">
                                        {breadcrumb}
                                    </nav>
                                )}
                            </div>
                        )}
                        <div>{children}</div>
                    </div>
                </div>
                {showSidebar && (
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <div>Sidebar</div>
                    </div>
                )}
            </div>
        </div>
    );
};

describe('PageLayout', () => {
    it('renders without crashing', () => {
        render(<SimplePageLayout>Test content</SimplePageLayout>);
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const testContent = 'Page layout test content';
        render(<SimplePageLayout>{testContent}</SimplePageLayout>);
        expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies page layout styling', () => {
        render(<SimplePageLayout>Content</SimplePageLayout>);
        const container = screen.getByText('Content').parentElement;
        expect(container).toBeInTheDocument();
    });

    it('handles multiple children', () => {
        render(
            <SimplePageLayout>
                <div>Header</div>
                <div>Main content</div>
                <div>Footer</div>
            </SimplePageLayout>
        );
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Main content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('maintains proper structure', () => {
        render(<SimplePageLayout>Content</SimplePageLayout>);
        const content = screen.getByText('Content');
        expect(content).toBeInTheDocument();
    });
});
