import { Product } from './product';

export type Cart = {
  products: Product[];
};

export const addProduct = (cart: Cart, product: Product): Cart => {
  const result = { ...cart, products: [...cart.products, product] };

  return result;
};

export const contains = (cart: Cart, product: Product): boolean => {
  const result = cart.products.some(({ id }) => id === product.id);

  return result;
};
