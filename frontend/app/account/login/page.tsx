"use client";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

import { Button } from "@/components/button";

import { findAccountByMailAction } from "../actions/find-account-by-mail.action";

import { useFormState } from "react-dom";

export default function AccountPage() {
  const [state, formAction] = useFormState(findAccountByMailAction, {});
  return (
    <div className="grow flex flex-col justify-center items-center min-h-[50vh] w-screen sm:w-96 px-8">
      <form
        className="flex flex-col justify-center items-center space-y-4"
        action={formAction}
      >
        <h2>Busque pelo seu email cadastrado!</h2>
        {state.errorMessage && (
          <h2 className="text-center">{state.errorMessage}</h2>
        )}
        <Input type="email" name="mail" variant="bordered" label="Email" />
        <Button
          type="submit"
          radius="full"
          fullWidth
          className="bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-lg self-center"
        >
          Buscar
        </Button>
      </form>
      <Link className="m-2" href="/account/create">
        Criar conta
      </Link>
    </div>
  );
}
