import React from 'react';
import LoginFormButtons from './login-form/login-form-buttons';
import FormInput from '@/components/form/form-input';
import FormInputPassword from '@/components/form/form-input-password';

const LoginForm: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <FormInput
        translateFile='login'
        label='form.username'
        name='username'
        isRequired
        maxLength={256}
        autoComplete='username'
      />
      <FormInputPassword
        translateFile='login'
        label='form.password'
        name='password'
        isRequired
        maxLength={256}
        autoComplete='current-password'
      />
      <LoginFormButtons />
    </div>
  );
};

export default LoginForm;
