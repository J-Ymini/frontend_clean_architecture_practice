import { Cart } from '../cart/types';
import { ProductDomain } from '../product/ProductDomain';
import { User } from '../user/types';
import { Order } from './types';

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
