import { useCartStorage } from "@/services/storage/storageAdaptor";

import { Cookie } from "@/components/Cookie";
import { ProductDomain } from "@/domain/product/ProductDomain";

export function Cart() {
  const { cart } = useCartStorage();
  const productDomain = new ProductDomain();

  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cart?.products.map((product) => (
          <li key={product.id}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {productDomain.getTotalPrice(cart?.products ?? []) / 100} ₽</p>
    </section>
  );
}
