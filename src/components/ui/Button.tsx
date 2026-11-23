import * as React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'peach' | 'lavender' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-genz-600 text-white hover:bg-genz-700 shadow-lg shadow-genz-500/30',
      peach: 'bg-peach-500 text-white hover:bg-peach-600 shadow-lg shadow-peach-500/30',
      lavender: 'bg-lavender-500 text-white hover:bg-lavender-600 shadow-lg shadow-lavender-500/30',
      outline:
        'border-2 border-genz-600 text-genz-600 hover:bg-genz-600 hover:text-white',
      ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
      danger: 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/30',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        className={cn(
          'btn-genz',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;