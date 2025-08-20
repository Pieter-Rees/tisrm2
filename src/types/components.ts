import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
export interface BaseComponentProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly id?: string;
  readonly 'data-testid'?: string;
}

export type PolymorphicProps<T extends ElementType> = {
  readonly as?: T;
} & ComponentPropsWithoutRef<T>;

export interface LayoutProps extends BaseComponentProps {
  readonly title?: string;
  readonly breadcrumb?: ReactNode;
  readonly sidebar?: boolean;
  readonly maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface GridLayoutProps extends LayoutProps {
  readonly columns?: number;
  readonly gap?: number | string;
}

export interface BaseLayoutProps extends BaseComponentProps {
  readonly title?: string;
  readonly maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface NavigationLink {
  readonly href: string;
  readonly label: string;
  readonly external?: boolean;
  readonly icon?: ReactNode;
}

export interface BreadcrumbProps extends BaseComponentProps {
  readonly separator?: ReactNode;
  readonly listClasses?: string;
  readonly activeClasses?: string;
  readonly capitalizeLinks?: boolean;
  readonly maxItems?: number;
}

export interface NavbarProps extends BaseComponentProps {
  readonly links?: readonly NavigationLink[];
  readonly showSearch?: boolean;
}

export interface SidenavProps extends BaseComponentProps {
  readonly showSideNav: boolean;
  readonly handleToggle: () => void;
  readonly variant?: 'overlay' | 'permanent';
}

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'subtle' | 'plain';

export type CardVariant = 'default' | 'sidebar' | 'downloads' | 'elevated' | 'featured';

export interface CardProps extends BaseComponentProps {
  readonly title: string;
  readonly description?: string | undefined;
  readonly image?: string | undefined;
  readonly altText?: string | undefined;
  readonly cta?: string | undefined;
  readonly ctaLink?: string | undefined;
  readonly phone?: string | undefined;
  readonly downloadLink?: string | undefined;
  readonly buttonVariant?: ButtonVariant | undefined;
  readonly variant?: CardVariant | undefined;
  readonly loading?: boolean | undefined;
  readonly disabled?: boolean | undefined;
}

export interface LogoProps extends BaseComponentProps {
  readonly width?: string | number;
  readonly height?: string | number;
  readonly variant?: 'default' | 'minimal' | 'text-only';
}

export interface ContactInfoProps extends BaseComponentProps {
  readonly buttonVariant?: ButtonVariant;
  readonly showSocial?: boolean;
  readonly layout?: 'horizontal' | 'vertical';
}

export interface FooterLogosProps extends BaseComponentProps {
  readonly width?: string;
  readonly height?: string;
  readonly logos?: readonly { src: string; alt: string; href?: string }[];
}

export interface StarListProps extends BaseComponentProps {
  readonly listItems: readonly string[];
  readonly variant?: 'default' | 'checkmarks' | 'bullets';
  readonly size?: 'sm' | 'md' | 'lg';
}

export interface LoadingProps extends BaseComponentProps {
  readonly size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readonly text?: string;
  readonly fullScreen?: boolean;
  readonly variant?: 'spinner' | 'dots' | 'pulse';
}

export interface ErrorBoundaryProps extends BaseComponentProps {
  readonly fallback?: ReactNode;
  readonly onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export interface FieldProps extends BaseComponentProps {
  readonly label?: string;
  readonly helperText?: string;
  readonly errorText?: string;
  readonly required?: boolean;
  readonly invalid?: boolean;
  readonly disabled?: boolean;
}

// Form types moved to forms.ts

export interface TalkerProps extends BaseComponentProps {
  readonly name: string;
  readonly title: string;
  readonly image: string;
  readonly quote: string;
  readonly company?: string;
}

export interface ThreeElementsProps extends BaseComponentProps {
  readonly elements?:
    | readonly {
        readonly id: string;
        readonly title: string;
        readonly description: string;
        readonly image?: string | undefined;
        readonly cta?: string | undefined;
        readonly ctaLink?: string | undefined;
        readonly variant?: CardVariant | undefined;
        readonly buttonVariant?: ButtonVariant | undefined;
        readonly external?: boolean | undefined;
      }[]
    | undefined;
}

export type ThemeColor =
  | 'blue'
  | 'gray'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'orange';

export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

export type AnimationVariant = 'fade' | 'slide' | 'scale' | 'bounce';

export type LayoutVariant = 'page' | 'grid' | 'base' | 'centered';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface UnifiedLayoutProps extends BaseComponentProps {
  readonly variant?: LayoutVariant;
  readonly title?: string;
  readonly breadcrumb?: ReactNode;
  readonly showSidebar?: boolean;
  readonly maxWidth?: ResponsiveValue<string>;
  readonly columns?: number;
  readonly gap?: ResponsiveValue<string | number>;
  readonly animated?: boolean;
  readonly padding?: ResponsiveValue<string | number>;
}

export interface ApiResponse<T = unknown> {
  readonly data?: T;
  readonly error?: string;
  readonly success: boolean;
  readonly timestamp: string;
}

export interface ContactSubmission {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}
