import { IClientRequestCreate } from '@/types/client-request';
import { fetcher } from './fetcher';

export const getClientRequests = async () => {
  const clientRequests = await fetcher.get('api/client-request');
  return clientRequests;
};

export const createClientRequest = async (clientRequest: IClientRequestCreate) => {
  return await fetcher.post('api/client-request', clientRequest);
};

export const deleteClientRequest = async (id: string) => {
  return await fetcher.delete(`api/client-request/${id}`);
};
