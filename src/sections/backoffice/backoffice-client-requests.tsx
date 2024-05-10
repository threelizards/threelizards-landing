import React from 'react';
import { backendService } from '@/services/backend';
import BackOfficeClientRequestsTable from './backoffice-client-requests-table';

const BackOfficeClientRequests = async () => {
  const clientRequests = await backendService.clientRequest.getClientRequests();

  return <BackOfficeClientRequestsTable {...{ clientRequests }} />;
};

export default BackOfficeClientRequests;
