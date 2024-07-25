import { RECAPTCHA_SECRET_KEY, RECAPTCHA_SERVER_VERIFY_URL } from '@/lib/config';
import { sendEmailNotification } from '@/lib/email/email';
import { backendService } from '@/services/backend';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const clientRequests = await backendService.clientRequest.getClientRequests();
  return NextResponse.json(clientRequests);
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const url = new URL(request.url);
  const captcha = url.searchParams.get('captcha');
  const res = await fetch(`${RECAPTCHA_SERVER_VERIFY_URL}?secret=${RECAPTCHA_SECRET_KEY}&response=${captcha}`, {
    method: 'POST'
  });
  const isValidCaptcha = (await res.json()).success;
  if (isValidCaptcha) {
    await backendService.clientRequest.createClientRequest(data);
    sendEmailNotification(data);
    return new NextResponse('ok', { status: 200 });
  } else {
    return new NextResponse('Invalid captcha', { status: 400 });
  }
};
