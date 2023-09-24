import { Module } from '@nestjs/common';

import { CreateClientCommand } from './controllers/create/create.command';
import { CreateClientController } from './controllers/create/create.controller';
import { GetClientByIdCommand } from './controllers/get-by-id/get-by-id.command';
import { GetClientByIdController } from './controllers/get-by-id/get-by-id.controller';
import { ListClientCommand } from './controllers/list/list.command';
import { ListClientController } from './controllers/list/list.controller';
import { UpdateClientCommand } from './controllers/update/update.command';
import { UpdateClientController } from './controllers/update/update.controller';
import { ClientRepository } from './gateways/client-repository.gateway';

@Module({
  controllers: [
    CreateClientController,
    GetClientByIdController,
    ListClientController,
    UpdateClientController,
  ],
  providers: [
    ClientRepository,
    CreateClientCommand,
    GetClientByIdCommand,
    ListClientCommand,
    UpdateClientCommand,
  ],
})
export class ClientModule {}
