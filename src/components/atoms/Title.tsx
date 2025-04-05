import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className }: TitleProps) {
  return (
    <h3 className={`text-lg font-semibold ${className}`}>
      {children}
    </h3>
  );
}

export default Title;