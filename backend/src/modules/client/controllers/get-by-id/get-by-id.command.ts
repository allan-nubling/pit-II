import { Injectable } from '@nestjs/common';

import { Client } from '@prisma/client';

import { CommandEventHandler } from 'src/modules/shared/decorator/command-event-handler.decorator';
import { DispatchEventService } from 'src/modules/shared/services/dispatch-event/dispatch-event.service';

import { Command, CommandInput } from '../../../shared/abstractions/command';
import { ClientNotFoundException } from '../../exceptions/client-not-found.exception';
import { ClientRepository } from '../../gateways/client-repository.gateway';
import { ClientIdDTO } from '../dtos/client-id.dto';

@Injectable()
export class GetClientByIdCommand extends Command {
  constructor(
    event: DispatchEventService,
    private readonly repository: ClientRepository,
  ) {
    super(event);
  }

  @CommandEventHandler('id')
  async execute({ input }: CommandInput<ClientIdDTO>): Promise<Client> {
    console.log({ input });
    const client = await this.repository.get({ id: input.id });
    if (!client) throw new ClientNotFoundException();
    return client;
  }
}
