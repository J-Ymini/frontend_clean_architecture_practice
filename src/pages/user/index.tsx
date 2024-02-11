import Profile from "@/components/Profile";
import { useUserStorage } from "@/services/storage/storageAdaptor";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Orders } from "../../components/Orders";
import { Cart } from "@/components/Cart";
import { Buy } from "@/components/Buy";

const User = () => {
  const { user } = useUserStorage();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
      return;
    }
  }, [router, user]);

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
};

export default User;
