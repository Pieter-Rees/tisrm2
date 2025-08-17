/**
 * Component type definitions
 * @fileoverview Comprehensive TypeScript definitions for all components
 */

import type { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react';

// === Base Types ===

/**
 * Common props for all components
 */
export interface BaseComponentProps {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly id?: string;
  readonly 'data-testid'?: string;
}

/**
 * Polymorphic component props
 */
export type PolymorphicProps<T extends ElementType> = {
  readonly as?: T;
} & ComponentPropsWithoutRef<T>;

// === Layout Types ===

/**
 * Layout component props
 */
export interface LayoutProps extends BaseComponentProps {
  readonly title?: string;
  readonly breadcrumb?: ReactNode;
  readonly sidebar?: boolean;
  readonly maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

/**
 * Grid layout props
 */
export interface GridLayoutProps extends LayoutProps {
  readonly columns?: number;
  readonly gap?: number | string;
}

/**
 * Base layout props
 */
export interface BaseLayoutProps extends BaseComponentProps {
  readonly title: string;
  readonly maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

// === Navigation Types ===

/**
 * Navigation link interface
 */
export interface NavigationLink {
  readonly href: string;
  readonly label: string;
  readonly external?: boolean;
  readonly icon?: ReactNode;
}

/**
 * Breadcrumb configuration
 */
export interface BreadcrumbProps extends BaseComponentProps {
  readonly separator?: ReactNode;
  readonly listClasses?: string;
  readonly activeClasses?: string;
  readonly capitalizeLinks?: boolean;
  readonly maxItems?: number;
}

/**
 * Navbar props
 */
export interface NavbarProps extends BaseComponentProps {
  readonly links?: readonly NavigationLink[];
  readonly showSearch?: boolean;
}

/**
 * Sidenav props
 */
export interface SidenavProps extends BaseComponentProps {
  readonly showSideNav: boolean;
  readonly handleToggle: () => void;
  readonly variant?: 'overlay' | 'permanent';
}

// === UI Component Types ===

/**
 * Button variants
 */
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'subtle' | 'plain';

/**
 * Card variants
 */
export type CardVariant = 'default' | 'sidebar' | 'downloads' | 'elevated';

/**
 * Card component props
 */
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

/**
 * Logo component props
 */
export interface LogoProps extends BaseComponentProps {
  readonly width?: string | number;
  readonly height?: string | number;
  readonly variant?: 'default' | 'minimal' | 'text-only';
}

/**
 * Contact info props
 */
export interface ContactInfoProps extends BaseComponentProps {
  readonly buttonVariant?: ButtonVariant;
  readonly showSocial?: boolean;
  readonly layout?: 'horizontal' | 'vertical';
}

/**
 * Footer logos props
 */
export interface FooterLogosProps extends BaseComponentProps {
  readonly width?: string;
  readonly height?: string;
  readonly logos?: readonly { src: string; alt: string; href?: string }[];
}

/**
 * Star list props
 */
export interface StarListProps extends BaseComponentProps {
  readonly listItems: readonly string[];
  readonly variant?: 'default' | 'checkmarks' | 'bullets';
  readonly size?: 'sm' | 'md' | 'lg';
}

/**
 * Loading component props
 */
export interface LoadingProps extends BaseComponentProps {
  readonly size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readonly text?: string;
  readonly fullScreen?: boolean;
  readonly variant?: 'spinner' | 'dots' | 'pulse';
}

/**
 * Error boundary props
 */
export interface ErrorBoundaryProps extends BaseComponentProps {
  readonly fallback?: ReactNode;
  readonly onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

// === Form Types ===

/**
 * Form field props
 */
export interface FieldProps extends BaseComponentProps {
  readonly label?: string;
  readonly helperText?: string;
  readonly errorText?: string;
  readonly required?: boolean;
  readonly invalid?: boolean;
  readonly disabled?: boolean;
}

/**
 * Quote form data interface
 */
export interface OfferteFormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly phoneNo: string;
  readonly companyName: string;
  readonly kvkNumber: string;
  readonly btwNumber: string;
  readonly postalCode: string;
  readonly message?: string;
}

/**
 * Form validation errors
 */
export type FormErrors<T> = {
  readonly [K in keyof T]?: string;
};

/**
 * Form state
 */
export interface FormState<T> {
  readonly data: T;
  readonly errors: FormErrors<T>;
  readonly isSubmitting: boolean;
  readonly isValid: boolean;
}

// === Content Types ===

/**
 * Testimonial/Talker props
 */
export interface TalkerProps extends BaseComponentProps {
  readonly name: string;
  readonly title: string;
  readonly image: string;
  readonly quote: string;
  readonly company?: string;
}

/**
 * Three elements section props
 */
export interface ThreeElementsProps extends BaseComponentProps {
  readonly elements?: readonly {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly image?: string | undefined;
    readonly cta?: string | undefined;
    readonly ctaLink?: string | undefined;
    readonly variant?: CardVariant | undefined;
    readonly buttonVariant?: ButtonVariant | undefined;
    readonly external?: boolean | undefined;
  }[] | undefined;
}

// === Utility Types ===

/**
 * Theme colors
 */
export type ThemeColor = 
  | 'blue' 
  | 'gray' 
  | 'red' 
  | 'green' 
  | 'yellow' 
  | 'purple' 
  | 'pink' 
  | 'orange';

/**
 * Responsive breakpoints
 */
export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Responsive value type
 */
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

/**
 * Animation variants
 */
export type AnimationVariant = 'fade' | 'slide' | 'scale' | 'bounce';

// === API Types ===

/**
 * API response wrapper
 */
export interface ApiResponse<T = unknown> {
  readonly data?: T;
  readonly error?: string;
  readonly success: boolean;
  readonly timestamp: string;
}

/**
 * Contact form submission
 */
export interface ContactSubmission {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}