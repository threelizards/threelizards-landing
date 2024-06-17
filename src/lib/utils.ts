import { headers } from 'next/headers';

export function getClientIp(): string {
  const headersList = headers();
  const clientIp = headersList.get('x-forwarded-for')?.split(',')[0] || headersList.get('remoteAddress') || '127.0.0.1';
  return clientIp;
}
