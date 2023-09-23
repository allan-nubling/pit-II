import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from 'src/modules/shared/decorator/default-headers.decorator';
import { AppControllers } from 'src/modules/shared/enums/app-controllers';
import { SwaggerTags } from 'src/modules/shared/enums/swagger-tags';
import { EventType } from 'src/modules/shared/services/dispatch-event/interface/event-type.enum';

import { ClientAddressIdDTO } from '../dtos/client-address-id.dto';
import { ClientAddressDTO } from '../dtos/client-address.dto';
import { GetClientAddressByIdCommand } from './get-by-id.command';

@ApiTags(SwaggerTags.client)
@Controller(AppControllers.clientAddress)
export class GetClientAddressByIdController {
  constructor(private readonly command: GetClientAddressByIdCommand) {}

  @Get(':id')
  handle(
    @Param() params: ClientAddressIdDTO,
    @DefaultHeaders() headers,
  ): Promise<ClientAddressDTO> {
    return this.command.execute({
      input: params,
      eventData: { type: EventType.http, params, headers },
    });
  }
}
