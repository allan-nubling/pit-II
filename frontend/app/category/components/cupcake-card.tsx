"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip, Divider, Image } from "@nextui-org/react";

import { CupcakeService } from "@/services/cupcake.service";
import { useRouter } from "next/navigation";

type Params = {
  cupcake: CupcakeService.Model;
  isPressable?: boolean;
};

export const CupcakeCard = ({ cupcake, ...params }: Params) => {
  const router = useRouter();
  return (
    <Card
      className="max-w-sm rounded-b-lg hover:shadow-xl"
      radius="none"
      shadow="sm"
      onPress={() => {
        router.push(`/cupcake/${cupcake.id}`);
      }}
      {...params}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          radius="none"
          width="100%"
          alt={cupcake.name}
          className="w-full"
          src={cupcake.image}
        />
      </CardBody>
      <CardFooter className="grow text-sm flex-col gap-y-2">
        <div className="grow w-full flex justify-between items-center text-lg font-bold">
          <text>{cupcake.name}</text>
          <Chip className="bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-lg fit">
            {Number(cupcake.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Chip>
        </div>
        <Divider />
        <p className="w-full flex flex-wrap justify-center gap-2 text-xs">
          {cupcake.ingredients.split(", ").map((ingredient) => (
            <Chip key={ingredient} className="text-xs">
              {ingredient}
            </Chip>
          ))}
        </p>
        <p className="line-clamp-3">{cupcake.description}</p>
      </CardFooter>
    </Card>
  );
};
