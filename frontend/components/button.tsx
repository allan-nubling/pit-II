"use client";
import { ButtonProps, Button as UIButton } from "@nextui-org/button";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <UIButton
      radius="full"
      className="bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-lg fit self-center"
      {...props}
    >
      {children}
    </UIButton>
  );
}
