import { Cupcake } from "./cupcake.model";

export class ShoppingBag {
  cupcakes: Map<string, number>;

  constructor({ cupcakes }: ShoppingBag.Input) {
    this.cupcakes = cupcakes;
  }

  getCount() {
    return Array.from(this.cupcakes.values()).reduce(
      (agg, val) => agg + val,
      0
    );
  }

  mountList(cupcakes: Cupcake[]) {
    const cupcakesMap = new Map(
      cupcakes.map((cupcake) => [String(cupcake.id), cupcake])
    );
    return Array.from(this.cupcakes.entries())
      .map(([key, value]) => {
        const data = cupcakesMap.get(key);
        return data && { ...data, count: value };
      })
      .filter((value) => value) as Array<Cupcake & { count: number }>;
  }

  getTotalValue(cupcakes: Cupcake[]) {
    return this.mountList(cupcakes).reduce(
      (total, current) => total + current.count * current.value.value,
      0
    );
  }
}

export namespace ShoppingBag {
  export type Input = {
    cupcakes: Map<string, number>;
  };
}
