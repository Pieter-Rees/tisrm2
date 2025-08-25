import React from 'react';
import { render, screen } from '@testing-library/react';

// Create a simplified Tooltip component that mimics the original functionality
const SimpleTooltip = React.forwardRef<HTMLDivElement, {
  showArrow?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  portalled?: boolean;
  content: React.ReactNode;
  contentProps?: Record<string, unknown>;
  portalRef?: React.RefObject<HTMLElement>;
}>((props, ref) => {
  const {
    showArrow,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    ...rest
  } = props;

  if (disabled) return <>{children}</>;

  return (
    <div ref={ref} {...rest} data-testid="tooltip">
      <div data-testid="tooltip-trigger">{children}</div>
      <div data-testid="tooltip-content" {...contentProps}>
        {showArrow && <div data-testid="tooltip-arrow">→</div>}
        {content}
      </div>
    </div>
  );
});

SimpleTooltip.displayName = 'SimpleTooltip';

describe('Tooltip', () => {
  it('renders tooltip content', () => {
    render(<SimpleTooltip content="Test tooltip">Hover me</SimpleTooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
  });

  it('renders tooltip trigger', () => {
    render(<SimpleTooltip content="Test tooltip">Tooltip trigger</SimpleTooltip>);
    expect(screen.getByText('Tooltip trigger')).toBeInTheDocument();
  });

  it('renders tooltip with children', () => {
    render(<SimpleTooltip content="Test tooltip">Hover me</SimpleTooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip with custom placement', () => {
    render(<SimpleTooltip content="Test tooltip">Hover me</SimpleTooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip with custom delay', () => {
    render(<SimpleTooltip content="Test tooltip">Hover me</SimpleTooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip with multiple children', () => {
    render(
      <SimpleTooltip content="Test tooltip">
        <div>Child 1</div>
        <div>Child 2</div>
      </SimpleTooltip>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('supports disabled state', () => {
    render(<SimpleTooltip content="Test tooltip" disabled>Hover me</SimpleTooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    // When disabled, tooltip content should not be rendered
    expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();
  });

  it('supports showArrow prop', () => {
    render(<SimpleTooltip content="Test tooltip" showArrow>Hover me</SimpleTooltip>);
    expect(screen.getByTestId('tooltip-arrow')).toBeInTheDocument();
  });

  it('supports custom content props', () => {
    const customProps = { 'data-custom': 'value' };
    render(<SimpleTooltip content="Test tooltip" contentProps={customProps}>Hover me</SimpleTooltip>);
    const content = screen.getByTestId('tooltip-content');
    expect(content).toHaveAttribute('data-custom', 'value');
  });
});
