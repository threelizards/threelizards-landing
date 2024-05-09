import { IClientRequestCreate } from '@/types/client-request';

export const getClientRequests = async () => {
  const clientRequests = await fetch('api/client-request');
  return clientRequests;
};

export const createClientRequest = async (clientRequest: IClientRequestCreate) => {
  return await fetch('api/client-request', {
    body: JSON.stringify(clientRequest),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
};
