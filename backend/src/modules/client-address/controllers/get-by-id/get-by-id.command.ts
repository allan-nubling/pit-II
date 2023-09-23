import { Injectable } from '@nestjs/common';

import { ClientAddress } from '@prisma/client';

import { CommandEventHandler } from 'src/modules/shared/decorator/command-event-handler.decorator';
import { DispatchEventService } from 'src/modules/shared/services/dispatch-event/dispatch-event.service';

import { Command, CommandInput } from '../../../shared/abstractions/command';
import { ClientAddressNotFoundException } from '../../exceptions/client-address-not-found.exception';
import { ClientAddressRepository } from '../../gateways/client-address-repository.gateway';
import { ClientAddressIdDTO } from '../dtos/client-address-id.dto';

@Injectable()
export class GetClientAddressByIdCommand extends Command {
  constructor(
    event: DispatchEventService,
    private readonly repository: ClientAddressRepository,
  ) {
    super(event);
  }

  @CommandEventHandler('id')
  async execute({
    input,
  }: CommandInput<ClientAddressIdDTO>): Promise<ClientAddress> {
    console.log({ input });
    const address = await this.repository.get({ id: input.id });
    if (!address) throw new ClientAddressNotFoundException();
    return address;
  }
}
