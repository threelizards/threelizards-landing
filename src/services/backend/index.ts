import { createClientRequest, getClientRequests, deleteClientRequest } from './client-requests';

export const backendService = { clientRequest: { getClientRequests, createClientRequest, deleteClientRequest } };
