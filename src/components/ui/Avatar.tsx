import * as React from 'react';
import { cn } from '@/utils/cn';

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AVATAR_SIZES = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, src, alt = 'User avatar', size = 'md', ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src || 'https://ui-avatars.com/api/?name=User&background=random'}
        alt={alt}
        className={cn(
          'rounded-full object-cover bg-gray-200',
          AVATAR_SIZES[size],
          className
        )}
        {...props}
      />
    );
  }
);

Avatar.displayName = 'Avatar';
export default Avatar;