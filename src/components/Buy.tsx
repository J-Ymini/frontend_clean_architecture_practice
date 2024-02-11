import React, { useState } from "react";

import useOrderProducts from "@/application/product/useOrderProducts";
import {
  useCartStorage,
  useUserStorage,
} from "@/services/storage/storageAdaptor";

export function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const [loading, setLoading] = useState(false);
  const [{ name, email, address }, setUserInfo] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    address: "",
  });

  if (!user || !cart?.products.length) {
    return null;
  }

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: { value, name } }) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    await orderProducts();
    setLoading(false);
  };

  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" value={name} onChange={handleChange} autoFocus />
        </label>
        <label>
          <span>Email</span>
          <input type="email" value={email} onChange={handleChange} />
        </label>
        <label>
          <span>Address</span>
          <textarea value={address} onChange={handleChange}></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Preparing an order..." : "Checkout"}
        </button>
      </form>
    </section>
  );
}
