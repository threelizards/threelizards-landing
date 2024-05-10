'use client';

import { Table, TableBody, TableCell, TableRow, TableColumn, TableHeader } from '@nextui-org/table';
import React, { useCallback } from 'react';
import { clientRequestColumns } from './backoffice-client-requests-data';
import { Tooltip } from '@nextui-org/react';
import { IClientRequest } from '@/types/client-request';
import dayjs from 'dayjs';
import { useTranslationClient } from '@/i18n/client';

interface BackOfficeClientRequestsTableProps {
  clientRequests: IClientRequest[];
}

const BackOfficeClientRequestsTable: React.FC<BackOfficeClientRequestsTableProps> = ({ clientRequests }) => {
  const { t } = useTranslationClient('backoffice');
  const renderCell = useCallback((request: IClientRequest, columnKey: React.Key) => {
    const cellValue = request[columnKey as keyof IClientRequest];

    switch (columnKey) {
      case 'creation_date':
        return dayjs(request.creation_date).format('YYYY-MM-DD HH:mm:ss');

      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip color='danger' content='Delete request'>
              <span className='text-lg text-danger cursor-pointer active:opacity-50'>DeleteIcon</span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue as string | null;
    }
  }, []);

  return (
    <Table aria-label='Example table with custom cells'>
      <TableHeader columns={clientRequestColumns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {t(column.name)}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={clientRequests}>
        {(item) => (
          <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default BackOfficeClientRequestsTable;
