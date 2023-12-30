import { fakeApi } from '../api';

export const usePayment = () => {
  const tryPay = (amount: PriceCents) => fakeApi(true);

  return {
    tryPay,
  };
};
