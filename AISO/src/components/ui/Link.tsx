import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ children, className = '', ...props }) => {
  return (
    <a 
      {...props}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};