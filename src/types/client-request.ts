import { client_requests } from '@prisma/client';

export interface IClientRequest extends client_requests {}

export interface IClientRequestCreate extends Omit<IClientRequest, 'id' | 'creation_date'> {}
