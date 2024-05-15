import React from 'react';
import { HeadingProps } from './types';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const H1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-semibold text-4xl md:text-5xl lg:text-6xl', className))} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h2 className={clsx(twMerge('font-semibold text-3xl', className))} {...props}>
      {children}
    </h2>
  );
};

export const H3: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={clsx(twMerge('font-semibold text-2xl', className))} {...props}>
      {children}
    </h3>
  );
};

export const H4: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h4 className={clsx(twMerge('font-semibold text-xl', className))} {...props}>
      {children}
    </h4>
  );
};

export const Caption1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-bold text-base md:text-xl lg:text-2xl', className))} {...props}>
      {children}
    </p>
  );
};

export const P: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-normal text-base md:text-xl lg:text-2xl', className))} {...props}>
      {children}
    </p>
  );
};
