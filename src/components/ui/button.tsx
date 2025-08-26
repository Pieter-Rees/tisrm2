'use client';

import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { getButtonStyles } from '@/styles/components/button.styles';

export interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', children, ...props }, ref) => {
        const buttonStyles = getButtonStyles(variant, size);

        return (
            <ChakraButton
                ref={ref}
                {...buttonStyles}
                {...props}
                size={size}
            >
                {children}
            </ChakraButton>
        );
    }
);

Button.displayName = 'Button';

export default Button;
