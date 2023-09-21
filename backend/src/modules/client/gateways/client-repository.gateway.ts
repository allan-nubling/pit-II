import { Injectable } from '@nestjs/common';

import { Client, Prisma } from '@prisma/client';

import { PrismaGateway } from 'src/modules/shared/gateways/prisma.gateway';

@Injectable()
export class ClientRepository {
  constructor(private readonly prisma: PrismaGateway) {}

  get(where: Prisma.ClientWhereUniqueInput): Promise<Client | null> {
    return this.prisma.client.findUnique({ where });
  }

  create(data: Prisma.ClientCreateInput): Promise<Client> {
    return this.prisma.client.create({
      data,
    });
  }

  update(params: {
    where: Prisma.ClientWhereUniqueInput;
    data: Prisma.ClientUpdateInput;
  }): Promise<Client> {
    const { where, data } = params;
    return this.prisma.client.update({
      data,
      where,
    });
  }
}
