import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class ClientAddressIdDTO {
  @ApiProperty({
    description: 'Id do endereço',
    example: 92131231,
  })
  @IsInt()
  @Type((_) => Number)
  id: number;
}
