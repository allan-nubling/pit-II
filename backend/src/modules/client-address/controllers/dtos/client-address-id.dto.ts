import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class ClientAddressIdDTO {
  @ApiProperty({
    description: 'Id do endereço',
    example: 92131231,
  })
  @Min(1)
  @IsInt()
  @Type((_) => Number)
  clientAddressId: number;
}
