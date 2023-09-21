import { Client } from '@prisma/client';

export class ClientDTO implements Client {
  id: number;
  email: string;
  name: string;
  phone: string;
}
