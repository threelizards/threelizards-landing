import { Input, InputProps } from '@nextui-org/input';
import React, { forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
  defaultIsVisible?: boolean;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ defaultIsVisible = false, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(defaultIsVisible);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <Input
        ref={ref}
        endContent={
          <button
            className='focus:outline-none'
            type='button'
            onClick={toggleVisibility}
            aria-label='toggle password visibility'>
            {isVisible ? (
              <FaEye className='text-2xl text-default-400 pointer-events-none' />
            ) : (
              <FaEyeSlash className='text-2xl text-default-400 pointer-events-none' />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        {...props}
      />
    );
  }
);

InputPassword.displayName = 'InputPassword';

export default InputPassword;
