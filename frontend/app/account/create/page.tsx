"use client";
import { Input } from "@nextui-org/input";

import { Button } from "@/components/button";

import { createAccountAction } from "../actions/create-account.action";

import { useFormState } from "react-dom";

export default function AccountPage() {
  const [state, formAction] = useFormState(createAccountAction, {});
  return (
    <div className="grow flex flex-col justify-center items-stretch min-h-[50vh] w-screen sm:w-96 px-8">
      <form
        className="flex flex-col justify-center items-center space-y-4"
        action={formAction}
      >
        <h2>Informe seus dados:</h2>
        <Input
          type="email"
          name="email"
          variant="bordered"
          label="Email"
          isRequired
          errorMessage={state.errors?.email}
        />
        <Input
          type="text"
          name="firstName"
          variant="bordered"
          label="Nome"
          isRequired
          errorMessage={state.errors?.firstName}
        />
        <Input
          type="text"
          name="lastName"
          variant="bordered"
          label="Sobrenome"
          isRequired
          errorMessage={state.errors?.lastName}
        />
        <Input
          type="tel"
          name="phone"
          variant="bordered"
          label="Celular"
          isRequired
          errorMessage={state.errors?.phone}
        />

        {state.errors?.request && (
          <h2 className="text-center text-red-500">{state.errors?.request}</h2>
        )}

        <Button
          type="submit"
          radius="full"
          fullWidth
          className="bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-lg self-center"
        >
          Criar
        </Button>
      </form>
    </div>
  );
}
