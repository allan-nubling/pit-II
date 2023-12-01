import { getAccountAddress } from "./account-address.service";

import { PaginationDTO, api } from "@/services/api";

export async function createAccount(input: AccountService.AccountDTO) {
  const { data } = await api.post<AccountService.Model>("/client", input);
  return data;
}

export async function getAccount(id: number) {
  const { data } = await api.get<AccountService.Model>(`/client/${id}`);
  return data;
}

export async function getAccountFavoriteAddress(accountId: number) {
  const account = await getAccount(accountId);
  if (account.favoriteAddressId) return await getAccountAddress(account.favoriteAddressId);
}

export async function findAccountByMail(email: string) {
  const { data } = await api.get<PaginationDTO<AccountService.Model>>(
    `/client`,
    {
      params: { email },
    }
  );
  return data.content[0];
}

export async function updateAccount({
  id,
  ...data
}: Partial<AccountService.AccountDTO> & { id: number }) {
  const { data: client } = await api.patch<AccountService.Model>(
    `/client/${id}`,
    data
  );
  return client;
}

export namespace AccountService {
  export type AccountDTO = {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
  export type Model = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    favoriteAddressId: number;
    createdAt: string;
    updatedAt: string;
  };
}
