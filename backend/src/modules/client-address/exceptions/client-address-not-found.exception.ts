import { NotFoundException } from '@nestjs/common';

export class ClientAddressNotFoundException extends NotFoundException {
  constructor() {
    super('Endereço não encontrado!', ClientAddressNotFoundException.name);
  }
}
