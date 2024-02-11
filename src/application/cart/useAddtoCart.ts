import { CartDomain } from "@/domain/cart/CartDomain";
import { Cart } from "@/domain/cart/types";
import { Product } from "@/domain/product/types";
import { UserDomain } from "@/domain/user/UserDomain";
import { User } from "@/domain/user/types";
import { useNotifier } from "@/services/notification/notificationAdaptor";
import {
  useCartStorage,
  useUserStorage,
} from "@/services/storage/storageAdaptor";

const useAddToCart = () => {
  const notifier = useNotifier();
  const userStorage = useUserStorage();
  const cartStorage = useCartStorage();

  const userDomain = new UserDomain(userStorage.user as User);
  const cartDomain = new CartDomain(cartStorage.cart as Cart);

  const addToCart = (product: Product) => {
    const warning = "This cookie is dangerous to your health! 😱";

    const isDangerous = product.toppings.some((item) =>
      userDomain.hasAllergy(item)
    );

    if (isDangerous) {
      notifier.notify(warning);
      return;
    }

    const updated = cartDomain.addProduct(product);
    cartStorage.updateCart?.(updated);
  };

  return { addToCart };
};

export default useAddToCart;
