import { useStore } from "@/services/context/store";

export const useUserStorage = () => {
  const { user, updateUser } = useStore();

  return { user, updateUser };
};

export const useCartStorage = () => {
  const { cart, updateCart, emptyCart } = useStore();

  return { cart, updateCart, emptyCart };
};

export const useOrdersStorage = () => {
  const { orders, updateOrders } = useStore();

  return { orders, updateOrders };
};

export const useCookieStorage = () => {
  const { cookies } = useStore();

  return { cookies };
};
