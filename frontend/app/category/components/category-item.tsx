"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider, Image } from "@nextui-org/react";

import { CupcakeService } from "@/services/cupcake.service";
import { useRouter } from "next/navigation";

type Params = {
  category: CupcakeService.CategoryModel;
};

export const CategoryItem = ({ category }: Params) => {
  const router = useRouter();
  return (
    <Card
      className="max-w-sm rounded-b-lg"
      radius="none"
      shadow="sm"
      key={category.id}
      isPressable
      onPress={() => {
        router.push(`/category/${category.id}`);
      }}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          radius="none"
          shadow="sm"
          width="100%"
          alt={category.name}
          className="w-full object-cover h-[140px]"
          src={`https://nubling-dev.s3.amazonaws.com/pit-assets/cupcake-${category.id}.png`}
        />
      </CardBody>
      <CardFooter className="justify-between flex-col">
        <p className="text-lg font-bold">{category.name}</p>
        <Divider className="my-2" />
        <p className="text-small">{category.description}</p>
      </CardFooter>
    </Card>
  );
};
