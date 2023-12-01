import { api } from "@/services/api";

export async function getAccountAddress(id: number) {
  const { data } = await api.get<AccountAddressService.Model>(
    `/client-address/${id}`
  );
  return data;
}

export async function createAccountAddress({
  accountId,
  ...input
}: AccountAddressService.AccountAddressDTO) {
  const { data } = await api.post<AccountAddressService.Model>(
    `/client/${accountId}/address`,
    input
  );
  return data;
}

export namespace AccountAddressService {
  export type AccountAddressDTO = {
    accountId: number;
    address: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
    favorite: boolean;
  };
  export type Model = {
    id: number;
    clientId: number;
    address: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
    createdAt: string;
    updatedAt: string;
  };
}
