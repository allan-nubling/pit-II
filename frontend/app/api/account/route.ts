import { findAccountByMail } from "../../../services/account.service";

import { castRequestError } from "@/services/api";
import { CookiesKeys } from "@/types/cookies-keys.enum";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const mail = request.nextUrl.searchParams.get("mail");

    const account = await findAccountByMail(mail ?? "");

    if (!account)
      return new Response("Account not found!", {
        status: 404,
      });

    return Response.json(account, {
      status: 200,
      headers: { "Set-Cookie": `${CookiesKeys.accountId}=${account.id}` },
    });
  } catch (err) {
    return castRequestError(err);
  }
}

// export async function POST(request: NextRequest) {
//   const
//   const cookieStore = cookies();
//   const token = cookieStore.get("token");

//   return new Response("Hello, Next.js!", {
//     status: 200,
//     headers: { "Set-Cookie": `token=${token?.value}` },
//   });
// }
