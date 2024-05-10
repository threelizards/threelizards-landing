import { backendService } from '@/services/backend';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const clientRequests = await backendService.clientRequest.getClientRequests();
  return clientRequests;
};

export const POST = async (request: Request) => {
  const data = (await request.json()).data;
  await backendService.clientRequest.createClientRequest(data);
  return new NextResponse('ok', { status: 200 });
};
