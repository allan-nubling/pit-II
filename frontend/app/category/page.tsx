import { title } from "@/components/primitives";

import { CategoryItem } from "./components/category-item";

import { listCupcakesCategories } from "@/services/cupcake.service";

export default async function CategoryPage() {
  const categories = await listCupcakesCategories();

  return (
    <>
      <h1 className={title()}>Categorias</h1>
      <div className="flex flex-wrap flex-row items-center justify-center gap-4">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </>
  );
}
