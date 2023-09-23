import { Injectable } from '@nestjs/common';

import { ClientAddress, Prisma } from '@prisma/client';

import { PrismaGateway } from 'src/modules/shared/gateways/prisma.gateway';

@Injectable()
export class ClientAddressRepository {
  constructor(private readonly prisma: PrismaGateway) {}

  get(
    where: Prisma.ClientAddressWhereUniqueInput,
  ): Promise<ClientAddress | null> {
    return this.prisma.clientAddress.findUnique({ where });
  }

  create(data: Prisma.ClientAddressCreateInput): Promise<ClientAddress> {
    return this.prisma.clientAddress.create({
      data,
    });
  }

  update(params: {
    where: Prisma.ClientAddressWhereUniqueInput;
    data: Prisma.ClientAddressUpdateInput;
  }): Promise<ClientAddress> {
    const { where, data } = params;
    return this.prisma.clientAddress.update({
      data,
      where,
    });
  }
}
