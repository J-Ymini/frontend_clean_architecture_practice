import { Cart } from '@/domain/cart/types';
import { Order } from '@/domain/order/types';
import { Product } from '@/domain/product/types';
import { User } from '@/domain/user/types';
import React, { useContext, useState } from 'react';
import { cookies } from '../api/fakeData';

export type Store = {
  user: User | null;
  cart: Cart;
  cookies: Product[];
  orders: Order[];
  updateUser: (user: User) => void;
  updateCart: (cart: Cart) => void;
  updateOrders: (orders: Order[]) => void;
  emptyCart: () => void;
};

const StoreContext = React.createContext<Partial<Store>>({});

export const useStore = () => useContext(StoreContext);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Cart>({ products: [] });
  const [orders, setOrders] = useState<Order[]>([]);

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: (user: User) => {
      setUser(user);
    },
    updateCart: (cart: Cart) => {
      setCart(cart);
    },
    updateOrders: (orders: Order[]) => {
      setOrders(orders);
    },
    emptyCart: () => {
      setCart({ products: [] });
    },
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
