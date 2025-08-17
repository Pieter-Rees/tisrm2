import type { ReactNode } from 'react';
import React from 'react';

// Common component props
export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

// Layout props
export interface LayoutProps extends BaseComponentProps {
  title?: string;
  breadcrumb?: ReactNode;
  sidebar?: boolean;
}



// Navigation props
export interface NavigationLink {
  href: string;
  label: string;
}

// Breadcrumb props
export interface BreadcrumbProps {
  separator?: ReactNode;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

// Contact info props
export interface ContactInfoProps {
  buttonVariant?: 'solid' | 'outline' | 'ghost' | 'subtle';
}

// Footer logos props
export interface FooterLogosProps {
  width?: string;
  height?: string;
}



// Star list props
export interface StarListProps {
  listItems: string[];
}

// Sidenav props
export interface SidenavProps {
  showSideNav: boolean;
  handleToggle: () => void;
}

// Form data types
export interface OfferteFormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNo: string;
  companyName: string;
  kvkNumber: string;
  btwNumber: string;
  postalCode: string;
  message?: string;
}

// Field component props
export interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
}

// Logo component props
export interface LogoProps {
  width?: string | number;
  height?: string | number;
}

// Card component props
export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  altText?: string;
  cta?: string;
  ctaLink?: string;
  phone?: string;
  downloadLink?: string;
  buttonVariant?: 'solid' | 'outline' | 'ghost' | 'subtle';
  variant?: 'default' | 'sidebar' | 'downloads';
}

// Talker component props
export interface TalkerProps {
  name: string;
  title: string;
  image: string;
  description: string;
}
