import { Product } from './types';

export class ProductDomain {
  getTotalPrice(products: Product[]): PriceCents {
    const result = products.reduce((total, { price }) => total + price, 0);

    return result;
  }
}
