import { Cart } from './cart';
import { ProductDomain } from './product';
import { User } from './user';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export class OrderDomain extends ProductDomain {
  readonly cart: Cart;

  constructor(cart: Cart) {
    super();
    this.cart = cart;
  }

  createOrder(user: User, cart: Cart): Order {
    const result: Order = {
      user: user.id,
      cart,
      created: new Date().toISOString(),
      status: 'new',
      total: super.getTotalPrice(cart.products),
    };

    return result;
  }
}
