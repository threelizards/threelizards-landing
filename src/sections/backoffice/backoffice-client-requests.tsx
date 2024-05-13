import React from 'react';
import { backendService } from '@/services/backend';
import BackOfficeClientRequestsTable from './backoffice-client-requests-table';
import BackofficeClientRequestsActionsButtons from './backoffice-client-requests-actions-buttons';

const BackOfficeClientRequests = async () => {
  const clientRequests = await backendService.clientRequest.getClientRequests();

  return (
    <div className='flex flex-col gap-2 items-end'>
      <BackOfficeClientRequestsTable {...{ clientRequests }} />
      <BackofficeClientRequestsActionsButtons />
    </div>
  );
};

export default BackOfficeClientRequests;
