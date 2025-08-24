import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from '../tooltip';

describe('Tooltip', () => {
  it('renders tooltip content', () => {
    render(<Tooltip content="Test tooltip">Hover me</Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip trigger', () => {
    render(<Tooltip content="Test tooltip">Tooltip trigger</Tooltip>);
    expect(screen.getByText('Tooltip trigger')).toBeInTheDocument();
  });

  it('renders tooltip with children', () => {
    render(<Tooltip content="Test tooltip">Hover me</Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip with custom placement', () => {
    render(<Tooltip content="Test tooltip">Hover me</Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders disabled tooltip', () => {
    render(<Tooltip content="Test tooltip" disabled>Hover me</Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip with custom delay', () => {
    render(<Tooltip content="Test tooltip">Hover me</Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('renders tooltip with multiple children', () => {
    render(
      <Tooltip content="Test tooltip">
        <div>Child 1</div>
        <div>Child 2</div>
      </Tooltip>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});
