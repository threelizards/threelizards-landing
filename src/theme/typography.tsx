import React from 'react';
import { HeadingProps } from './types';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const H1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-semibold text-4xl', className))} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-semibold text-3xl', className))} {...props}>
      {children}
    </h1>
  );
};

export const H3: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-semibold text-2xl', className))} {...props}>
      {children}
    </h1>
  );
};

export const H4: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-semibold text-xl', className))} {...props}>
      {children}
    </h1>
  );
};

export const P: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-normal text-base', className))} {...props}>
      {children}
    </h1>
  );
};
