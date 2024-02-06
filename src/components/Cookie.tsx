import useAddToCart from "@/application/cart/useAddtoCart";
import { CartDomain } from "@/domain/cart/CartDomain";
import { Cart } from "@/domain/cart/types";
import { Product } from "@/domain/product/types";
import {
  useCartStorage,
  useUserStorage,
} from "@/services/storage/storageAdaptor";
import { Toppings } from "./Toppings";

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const { addToCart } = useAddToCart();
  const { hasProduct } = new CartDomain(cart as Cart);

  return (
    <article>
      <span>🍪</span>
      <span>{cookie.title}</span>
      <Toppings cookie={cookie} />

      {!!user && (
        <button type="button" onClick={() => addToCart(cookie)}>
          {cookie.price / 100} ₽
        </button>
      )}

      {hasProduct(cookie) && <span>In your cart</span>}
    </article>
  );
}
