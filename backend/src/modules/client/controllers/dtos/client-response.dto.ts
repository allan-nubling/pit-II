import { Client } from '@prisma/client';

export class ClientResponseDTO implements Client {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
