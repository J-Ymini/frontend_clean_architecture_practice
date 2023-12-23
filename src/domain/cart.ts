import { Product } from './product';

export type Cart = {
  products: Product[];
};

export class CartDomain {
  readonly cart: Cart;

  constructor(cart: Cart) {
    this.cart = cart;
  }

  addProduct(product: Product): Cart {
    const result = {
      ...this.cart,
      products: [...this.cart.products, product],
    };

    return result;
  }

  hasProduct(product: Product): boolean {
    const result = this.cart.products.some(({ id }) => id === product.id);

    return result;
  }
}
