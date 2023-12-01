import { PaginationDTO, api } from "@/services/api";

export async function listCupcakes(input?: CupcakeService.ListCupcakesInput) {
  const { data } = await api.get<PaginationDTO<CupcakeService.Model>>(
    "/cupcake",
    {
      params: {
        page: 1,
        size: 25,
        ...input,
      },
    }
  );
  return data.content;
}

export async function listCupcakesCategories() {
  const { data } = await api.get<PaginationDTO<CupcakeService.CategoryModel>>(
    "/cupcake/category",
    {
      params: {
        page: 1,
        size: 25,
      },
    }
  );
  return data.content;
}

export async function getCategory(categoryId: number) {
  const { data } = await api.get<PaginationDTO<CupcakeService.CategoryModel>>(
    "/cupcake/category",
    {
      params: {
        page: 1,
        size: 25,
      },
    }
  );
  return data.content.find(
    ({ id }) => id === categoryId
  ) as CupcakeService.CategoryModel;
}

export namespace CupcakeService {
  export type Model = {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    value: string;
    categories: CategoryModel[];
  };

  export interface CategoryModel {
    id: number;
    name: string;
    description: string;
  }

  export interface ListCupcakesInput {
    categoryId?: number;
  }
}
