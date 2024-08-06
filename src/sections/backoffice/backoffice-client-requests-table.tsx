'use client';

import { Table, TableBody, TableCell, TableRow, TableColumn, TableHeader } from '@nextui-org/table';
import React, { useCallback } from 'react';
import { clientRequestColumns } from './backoffice-client-requests-data';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { IClientRequest } from '@/types/client-request';
import dayjs from 'dayjs';
import { useTranslationClient } from '@/i18n/client';
import { TrashIcon } from '@/assets/icons/components/trash-icon';
import { useDeleteClientRequest } from './hooks/use-delete-client-request';

interface BackOfficeClientRequestsTableProps {
  clientRequests: IClientRequest[];
}

const BackOfficeClientRequestsTable: React.FC<BackOfficeClientRequestsTableProps> = ({ clientRequests }) => {
  const { t } = useTranslationClient('backoffice');
  const { deleting, deleteRequest } = useDeleteClientRequest();

  const renderCell = useCallback(
    (request: IClientRequest, columnKey: React.Key) => {
      const cellValue = request[columnKey as keyof IClientRequest];
      switch (columnKey) {
        case 'creation_date':
          return dayjs(request.creation_date).format('YYYY-MM-DD HH:mm:ss');
        case 'actions':
          return (
            <div className='flex items-center gap-2 justify-center'>
              <Tooltip color='danger' content={t('delete_request')}>
                <Button
                  isIconOnly
                  variant='light'
                  className='text-xl'
                  color='danger'
                  isLoading={deleting.includes(request.id)}
                  onClick={() => deleteRequest(request.id)}>
                  <TrashIcon />
                </Button>
              </Tooltip>
            </div>
          );
        default:
          return cellValue as string | null;
      }
    },
    [deleting, deleteRequest, t]
  );

  return (
    <Table aria-label='Example table with custom cells'>
      <TableHeader>
        {clientRequestColumns.map((column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {t(column.name)}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={t('empty_content')}>
        {clientRequests.map((item) => (
          <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BackOfficeClientRequestsTable;
