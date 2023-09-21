import { Module } from '@nestjs/common';

import { GetClientByIdCommand } from './controllers/get-by-id/get-by-id.command';
import { GetClientByIdController } from './controllers/get-by-id/get-by-id.controller';
import { ClientRepository } from './gateways/client-repository.gateway';

@Module({
  controllers: [GetClientByIdController],
  providers: [ClientRepository, GetClientByIdCommand],
})
export class ClientModule {}
