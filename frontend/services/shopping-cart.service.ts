"use client";

import { ShoppingBag } from "@/models/shopping-bag.model";
import { StorageKeys } from "@/types/storage-keys.enum";

export function getShoppingBag() {
  const value = localStorage.getItem(StorageKeys.shoppingBag);
  const parsedValues = value ? JSON.parse(value) : [];
  return new ShoppingBag({ cupcakes: new Map(Object.entries(parsedValues)) });
}

export function storeShoppingBag(shoppingBag: ShoppingBag) {
  localStorage.setItem(
    StorageKeys.shoppingBag,
    JSON.stringify(Object.fromEntries(shoppingBag.cupcakes))
  );
}

export function addCupcake(id: number) {
  const currentBag = getShoppingBag();

  const currentCount = currentBag.cupcakes.get(String(id));
  const newValue = currentCount ? currentCount + 1 : 1;
  currentBag.cupcakes.set(String(id), newValue);

  storeShoppingBag(currentBag);
  return currentBag;
}

export function removeCupcake(id: number) {
  const currentBag = getShoppingBag();

  const currentCount = currentBag.cupcakes.get(String(id));
  const newValue = currentCount ? currentCount - 1 : 0;

  if (newValue > 0) {
    currentBag.cupcakes.set(String(id), newValue);
  } else {
    currentBag.cupcakes.delete(String(id));
  }

  storeShoppingBag(currentBag);
  return currentBag;
}

export function clearShoppingBag() {
  localStorage.removeItem(StorageKeys.shoppingBag);
}
