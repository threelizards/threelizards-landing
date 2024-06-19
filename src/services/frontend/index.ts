import { createClientRequest, getClientRequests, deleteClientRequest, sendEmail } from './client-requests';

export const frontendService = {
  clientRequest: { getClientRequests, createClientRequest, deleteClientRequest, sendEmail }
};
