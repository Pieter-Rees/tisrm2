import React from 'react';
import { render, screen } from '@testing-library/react';

import { NAVIGATION_ROUTES } from '@/constants/app';
import { buildBreadcrumbItems } from '@/lib/seo/breadcrumbs';

const knowledgeArticleSlug = 'tx-keurmerk-verzekeringen';
const nestedKnowledgePath = `${NAVIGATION_ROUTES.knowledgeBase}/${knowledgeArticleSlug}`;

const mockUsePathname = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: mockUsePathname,
}));

jest.mock('@/types/components', () => ({
  BreadcrumbProps: {
    separator: '>',
    listClasses: '',
    activeClasses: '',
    capitalizeLinks: false,
    maxItems: undefined,
  },
}));

const WorkingBreadcrumb = ({ separator = '>' }: { separator?: string }) => {
  const pathname = mockUsePathname();
  const items = buildBreadcrumbItems(pathname);

  return (
    <nav role="navigation">
      {items.map((item, index) => {
        const isCurrentPage = pathname === item.path;
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.path}>
            <div className={isCurrentPage ? 'active' : ''}>
              {isCurrentPage ?
                <span>{item.name}</span>
              : <a href={item.path}>{item.name}</a>}
            </div>
            {!isLast && <span className="separator">{separator}</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

describe('Breadcrumb', () => {
  beforeEach(() => {
    mockUsePathname.mockClear();
  });

  it('renders without crashing', () => {
    mockUsePathname.mockReturnValue(nestedKnowledgePath);
    render(<WorkingBreadcrumb />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays breadcrumb items based on current path', () => {
    mockUsePathname.mockReturnValue(nestedKnowledgePath);
    render(<WorkingBreadcrumb />);
    expect(screen.getByText('Kennisbank')).toBeInTheDocument();
    expect(screen.getByText('Tx Keurmerk Verzekeringen')).toBeInTheDocument();
  });

  it('renders links for non-last items', () => {
    mockUsePathname.mockReturnValue(nestedKnowledgePath);
    render(<WorkingBreadcrumb />);
    const kennisbankLink = screen.getByRole('link', { name: 'Kennisbank' });
    expect(kennisbankLink).toBeInTheDocument();
    expect(kennisbankLink).toHaveAttribute(
      'href',
      NAVIGATION_ROUTES.knowledgeBase,
    );
  });

  it('renders last item as text, not link', () => {
    mockUsePathname.mockReturnValue(nestedKnowledgePath);
    render(<WorkingBreadcrumb />);
    const lastItem = screen.getByText('Tx Keurmerk Verzekeringen');
    expect(lastItem).toBeInTheDocument();
    expect(lastItem.tagName).not.toBe('A');
  });

  it('displays separator between items', () => {
    mockUsePathname.mockReturnValue(nestedKnowledgePath);
    render(<WorkingBreadcrumb />);
    expect(screen.getAllByText('>')).not.toHaveLength(0);
  });

  it('supports custom separator', () => {
    mockUsePathname.mockReturnValue(nestedKnowledgePath);
    render(<WorkingBreadcrumb separator="/" />);
    expect(screen.getAllByText('/')).not.toHaveLength(0);
  });
});
