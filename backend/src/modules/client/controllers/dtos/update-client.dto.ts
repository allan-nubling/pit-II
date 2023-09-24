import { IsOptional } from 'class-validator';

import { CreateClientDTO } from './create-client.dto';

export class UpdateClientDTO extends CreateClientDTO {
  @IsOptional()
  email: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  phone: string;
}
