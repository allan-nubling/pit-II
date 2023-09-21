import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from 'src/modules/shared/decorator/default-headers.decorator';
import { AppControllers } from 'src/modules/shared/enums/app-controllers';
import { SwaggerTags } from 'src/modules/shared/enums/swagger-tags';
import { EventType } from 'src/modules/shared/services/dispatch-event/interface/event-type.enum';

import { ClientIdDTO } from '../dtos/client-id.dto';
import { ClientDTO } from '../dtos/client.dto';
import { GetClientByIdCommand } from './get-by-id.command';

@ApiTags(SwaggerTags.client)
@Controller(AppControllers.client)
export class GetClientByIdController {
  constructor(private readonly command: GetClientByIdCommand) {}

  @Get(':id')
  handle(
    @Param() params: ClientIdDTO,
    @DefaultHeaders() headers,
  ): Promise<ClientDTO> {
    return this.command.execute({
      input: params,
      eventData: { type: EventType.http, params, headers },
    });
  }
}
