export type ProductTitle = string;

export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
};

export class ProductDomain {
  getTotalPrice(products: Product[]): PriceCents {
    const result = products.reduce((total, { price }) => total + price, 0);

    return result;
  }
}
