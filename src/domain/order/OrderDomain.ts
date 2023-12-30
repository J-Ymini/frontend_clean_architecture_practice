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

  createOrder(user: User): Order {
    const result: Order = {
      user: user.id,
      cart: this.cart,
      created: new Date().toISOString(),
      status: 'new',
      total: super.getTotalPrice(this.cart.products),
    };

    return result;
  }
}
