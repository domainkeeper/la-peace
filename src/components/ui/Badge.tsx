import * as React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'present' | 'absent' | 'late' | 'excused';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'present', ...props }, ref) => {
    const variants = {
      present: 'bg-green-100 text-green-700 border-green-200',
      absent: 'bg-red-100 text-red-700 border-red-200',
      late: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      excused: 'bg-blue-100 text-blue-700 border-blue-200',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;