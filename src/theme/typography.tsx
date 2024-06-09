import React from 'react';
import { HeadingProps } from './types';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const H1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={clsx(twMerge('font-semibold text-5xl md:text-6xl lg:text-7xl', className))} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h2 className={clsx(twMerge('font-medium text-2xl md:text-4xl lg:text-5xl', className))} {...props}>
      {children}
    </h2>
  );
};

export const H3: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={clsx(twMerge('font-medium text-1xl md:text-2xl lg:text-3xl', className))} {...props}>
      {children}
    </h3>
  );
};

export const H4: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h4 className={clsx(twMerge('font-medium text-xl md:text-1xl lg:text-2xl', className))} {...props}>
      {children}
    </h4>
  );
};

export const H5: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h5 className={clsx(twMerge('font-normal text-sm md:text-base lg:text-lg', className))} {...props}>
      {children}
    </h5>
  );
};

export const Caption: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-semibold text-sm md:text-base lg:text-lg', className))} {...props}>
      {children}
    </p>
  );
};

export const Caption1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-semibold text-xs md:text-sm lg:text-base', className))} {...props}>
      {children}
    </p>
  );
};

export const Caption2: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-medium text-xs md:text-sm lg:text-base', className))} {...props}>
      {children}
    </p>
  );
};

export const P: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-normal text-xs md:text-sm lg:text-base', className))} {...props}>
      {children}
    </p>
  );
};

export const Title: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-semibold text-xl md:text-1xl lg:text-2xl', className))} {...props}>
      {children}
    </p>
  );
};

export const Subtitle: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-medium text-sm md:text-base lg:text-lg', className))} {...props}>
      {children}
    </p>
  );
};

export const Subtitle1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-medium text-xs md:text-xs lg:text-sm', className))} {...props}>
      {children}
    </p>
  );
};

export const Subtitle2: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(twMerge('font-normal text-xs md:text-xs lg:text-sm', className))} {...props}>
      {children}
    </p>
  );
};
