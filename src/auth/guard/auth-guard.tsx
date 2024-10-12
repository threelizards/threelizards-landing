import { getServerSession } from 'next-auth';

import { redirectToLogin } from '../utils';

type Props = {
  children: React.ReactNode;
};

export default async function AuthGuard({ children }: Props) {
  const session = await getServerSession();
  if (!session) redirectToLogin();
  return <>{children}</>;
}
