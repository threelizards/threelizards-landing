import { Card, CardBody, CardHeader } from '@nextui-org/card';
import React from 'react';
import LoginFormContainer from './login-view/login-form-container';
import { translationServer } from '@/i18n';
import { H4 } from '@/theme/typography';

const LoginView = async () => {
  const { t } = await translationServer('login');
  return (
    <div className='flex flex-1 items-center justify-center'>
      <Card isBlurred className='w-full max-w-96'>
        <CardHeader className='text-center justify-center'>
          <H4>{t('title')}</H4>
        </CardHeader>
        <CardBody>
          <LoginFormContainer />
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginView;
