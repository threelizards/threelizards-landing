import { createClientRequest, getClientRequests, deleteClientRequest } from './client-requests';

export const frontendService = { clientRequest: { getClientRequests, createClientRequest, deleteClientRequest } };
