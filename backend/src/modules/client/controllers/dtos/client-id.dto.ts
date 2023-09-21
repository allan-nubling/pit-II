import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class ClientIdDTO {
  @ApiProperty({
    description: 'Id do cliente',
    example: 92131231,
  })
  @IsInt()
  @Type((_) => Number)
  id: number;
}
