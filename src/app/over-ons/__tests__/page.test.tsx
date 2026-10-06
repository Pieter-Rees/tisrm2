import { render, screen } from '@/__mocks__/test-utils';
import React from 'react';

import Overons from '../page';

jest.mock('@/components/layout', () => ({
  UnifiedLayout: ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    alt,
    src,
  }: {
    alt: string;
    src: string;
  }) => <img alt={alt} src={src} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('Over ons page', () => {
  it('renders the main section headings', () => {
    render(<Overons />);
    expect(
      screen.getByRole('heading', { name: 'Verzekeren begint met begrijpen' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'De mensen achter TIS' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Kennismaken?' }),
    ).toBeInTheDocument();
  });

  it('renders the three team members', () => {
    render(<Overons />);
    expect(screen.getByText('René Enthoven')).toBeInTheDocument();
    expect(screen.getByText('Kenny Enthoven')).toBeInTheDocument();
    expect(screen.getByText('Anthony Enthoven')).toBeInTheDocument();
  });

  it('links the kennismaken CTA to contact', () => {
    render(<Overons />);
    const cta = screen.getByRole('link', { name: 'Contact opnemen' });
    expect(cta).toHaveAttribute('href', '/contact');
  });
});
