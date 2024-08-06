import { client_requests } from '@prisma/client';

export type IClientRequest = client_requests;

export type IClientRequestCreate = Omit<IClientRequest, 'id' | 'creation_date'>;
