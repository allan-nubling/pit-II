"use server";

import { CookiesKeys } from "@/types/cookies-keys.enum";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction(
  prevState: null,
  formData: FormData
): Promise<null> {
  cookies().delete(CookiesKeys.accountId);
  redirect(`/account`);
}
