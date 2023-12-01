"use server";

import { createAccount } from "@/services/account.service";
import { CookiesKeys } from "@/types/cookies-keys.enum";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

type State = {
  errors?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    request?: string;
  };
};

const schema = z.object({
  email: z.string().email({ message: "Email invalido!" }),
  firstName: z
    .string()
    .min(3, { message: "O Nome deve conter no mínimo 3 letras" })
    .max(32, { message: "O Nome deve conter no máximo 32 letras" }),
  lastName: z
    .string()
    .min(3, { message: "O Nome deve conter no mínimo 3 letras" })
    .max(32, { message: "O Nome deve conter no máximo 32 letras" }),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "Telefone deve ter apenas números" })
    .length(11, {
      message: "Telefone precisa ter 11 dígitos com o DDD ex: 51978978978",
    }),
});

export async function createAccountAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const result = schema.safeParse({
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
  });

  if (!result.success) {
    return {
      errors: {
        email: result.error.format().email?._errors[0],
        firstName: result.error.format().firstName?._errors[0],
        lastName: result.error.format().lastName?._errors[0],
        phone: result.error.format().phone?._errors[0],
      },
    };
  }

  try {
    const account = await createAccount(result.data);
    cookies().set(CookiesKeys.accountId, `${account.id}`, { secure: true });
    redirect(`/account/${account.id}`);
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        errors: { request: err.response?.data?.message || err.message },
      };
    }
    if (err instanceof Error) {
      return {
        errors: { request: err.message },
      };
    }
    return { errors: { request: "Falha na requisição" } };
  }
}
