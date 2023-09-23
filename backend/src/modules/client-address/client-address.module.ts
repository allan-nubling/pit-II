import { Module } from '@nestjs/common';

import { GetClientAddressByIdCommand } from './controllers/get-by-id/get-by-id.command';
import { GetClientAddressByIdController } from './controllers/get-by-id/get-by-id.controller';
import { ClientAddressRepository } from './gateways/client-address-repository.gateway';

@Module({
  controllers: [GetClientAddressByIdController],
  providers: [ClientAddressRepository, GetClientAddressByIdCommand],
})
export class ClientAddressModule {}
