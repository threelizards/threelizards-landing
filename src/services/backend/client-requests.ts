import prisma from '@/lib/prisma';
import { IClientRequestCreate } from '@/types/client-request';
import { v4 as uuidv4 } from 'uuid';

export const getClientRequests = async () => {
  return prisma.client_requests.findMany({ orderBy: { creation_date: 'desc' } });
};

export const createClientRequest = async (clientRequest: IClientRequestCreate) => {
  const id = uuidv4();
  const creation_date = new Date();
  return await prisma.client_requests.create({ data: { ...clientRequest, id, creation_date } });
};
