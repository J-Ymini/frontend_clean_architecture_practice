import { useOrdersStorage } from "@/services/storage/storageAdaptor";

export function Orders() {
  const { orders } = useOrdersStorage();

  if (!orders?.length) {
    return null;
  }

  return (
    <section>
      <h2>Orders</h2>
      <ul>
        {orders.map(({ created, total, status }) => (
          <li key={created}>
            {created} | {total / 100} ₽ | {status}
          </li>
        ))}
      </ul>
    </section>
  );
}
