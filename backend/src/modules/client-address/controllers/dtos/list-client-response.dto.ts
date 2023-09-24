import { PaginationResponseDTO } from 'src/modules/shared/dtos/pagination-response.dto';

import { ClientAddressResponseDTO } from './client-address-response.dto';

export class FindClientResponseDTO extends PaginationResponseDTO<ClientAddressResponseDTO> {
  content: ClientAddressResponseDTO[];
}
