import { Injectable } from '@nestjs/common';

import { Client } from '@prisma/client';

import { CommandEventHandler } from 'src/modules/shared/decorator/command-event-handler.decorator';
import { DispatchEventService } from 'src/modules/shared/services/dispatch-event/dispatch-event.service';

import { ClientAddressRepository } from 'src/modules/client-address/gateways/client-address-repository.gateway';

import { Command, CommandInput } from '../../../shared/abstractions/command';
import { ClientRepository } from '../../gateways/client-repository.gateway';
import { ClientIdDTO } from '../dtos/client-id.dto';
import { UpdateClientDTO } from '../dtos/update-client.dto';

@Injectable()
export class UpdateClientCommand extends Command {
  constructor(
    event: DispatchEventService,
    private readonly repository: ClientRepository,
    private readonly addressRepository: ClientAddressRepository,
  ) {
    super(event);
  }

  @CommandEventHandler('clientId')
  async execute({
    input: { clientId, ...data },
  }: CommandInput<ClientIdDTO & UpdateClientDTO>): Promise<Client> {
    if (data.favoriteAddressId)
      await this.addressRepository.getOrThrow({
        clientId,
        id: data.favoriteAddressId,
      });
    return await this.repository.update({ where: { id: clientId }, data });
  }
}
