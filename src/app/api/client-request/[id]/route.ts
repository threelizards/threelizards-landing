import { backendService } from '@/services/backend';
import { NextResponse } from 'next/server';

export const DELETE = async (_: Request, { params }: { params: { id: string } }) => {
  const { id } = params;
  await backendService.clientRequest.deleteClientRequest(id);
  return new NextResponse('ok', { status: 200 });
};
