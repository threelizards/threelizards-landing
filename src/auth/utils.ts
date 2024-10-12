import { routes } from '@/lib/routes';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { RETURN_TO_PARAM } from './context';
import { isObjectWithProperties } from '@/lib/utils/object';

export const redirectToLogin = () => {
  const headersList = headers();
  const fullUrl = headersList.get('x-url') || '';
  const params = fullUrl ? `?${RETURN_TO_PARAM}=${fullUrl}` : '';
  redirect(`${routes.login}${params}`);
};

export const handleThrowRedirection = (error: unknown) => {
  if (isObjectWithProperties(error, ['message']) && error.message === 'NEXT_REDIRECT') throw error;
};
