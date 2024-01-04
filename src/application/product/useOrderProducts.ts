import { Cart } from '@/domain/cart/types';
import { OrderDomain } from '@/domain/order/OrderDomain';
import { Order } from '@/domain/order/types';
import { User } from '@/domain/user/types';
import { useNotifier } from '@/services/notification/notificationAdaptor';
import { usePayment } from '@/services/payment/paymentAdaptor';
import {
  useCartStorage,
  useOrdersStorage,
} from '@/services/storage/storageAdaptor';

const useOrderProducts = () => {
  const payment = usePayment();
  const notifier = useNotifier();
  const cartStorage = useCartStorage();
  const orderStorage = useOrdersStorage();

  const orderDomain = new OrderDomain(cartStorage.cart as Cart);

  const orderProducts = async (user: User) => {
    const newOrder = orderDomain.createOrder(user);

    const paid = await payment.tryPay(newOrder.total);
    if (!paid) {
      notifier.notify("The payment wasn't successful 🤷");
      return;
    }

    orderStorage.updateOrders?.([
      ...(orderStorage.orders as Order[]),
      newOrder,
    ]);
    cartStorage.emptyCart?.();
  };

  return { orderProducts };
};

export default useOrderProducts;
