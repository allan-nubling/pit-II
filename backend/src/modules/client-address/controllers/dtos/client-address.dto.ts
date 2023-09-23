import { ClientAddress } from '@prisma/client';

export class ClientAddressDTO implements ClientAddress {
  id: number;
  accountId: number;
  address: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  createdAt: Date;
  updatedAt: Date;
}
