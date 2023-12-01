"use client";

import { Button } from "@/components/button";

import { logoutAction } from "../actions/loggout.action";

import { useFormState } from "react-dom";

type Params = {
  className?: string;
};

export const LogoutForm = (params?: Params) => {
  const [state, formAction] = useFormState(logoutAction, null);

  return (
    <form action={formAction} {...params}>
      <Button
        type="submit"
        radius="full"
        fullWidth
        className="bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-lg self-center"
      >
        Sair
      </Button>
    </form>
  );
};
