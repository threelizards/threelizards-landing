import { backendService } from '@/services/backend';
import React from 'react';

const BackOfficeClientRequests = async () => {
  const clientRequest = await backendService.clientRequest.getClientRequests();
  return <div>{JSON.stringify(clientRequest)}</div>;
};

export default BackOfficeClientRequests;
