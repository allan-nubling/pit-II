import { Injectable } from '@nestjs/common';

import { Client } from '@prisma/client';

import { ResultWithPagination } from 'src/modules/shared/abstractions/repository-pagination';
import { CommandEventHandler } from 'src/modules/shared/decorator/command-event-handler.decorator';
import { DispatchEventService } from 'src/modules/shared/services/dispatch-event/dispatch-event.service';

import { Command, CommandInput } from '../../../shared/abstractions/command';
import { ClientNotFoundException } from '../../exceptions/client-not-found.exception';
import { ClientRepository } from '../../gateways/client-repository.gateway';
import { ListClientDTO } from '../dtos/find-client.dto';

@Injectable()
export class ListClientCommand extends Command {
  constructor(
    event: DispatchEventService,
    private readonly repository: ClientRepository,
  ) {
    super(event);
  }

  @CommandEventHandler('')
  async execute({
    input,
  }: CommandInput<ListClientDTO>): Promise<ResultWithPagination<Client>> {
    const client = await this.repository.list(input);
    if (!client) throw new ClientNotFoundException();
    return client;
  }
}
