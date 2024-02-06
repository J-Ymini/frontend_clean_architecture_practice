import {
  useCartStorage,
  useUserStorage,
} from "@/services/storage/storageAdaptor";
import Link from "next/link";

const Header = () => {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  return (
    <header className="fixed top-0 left-0 w-full min-h-[3.125rem] bg-white shadow-md flex justify-between flex-wrap p-5">
      <Link className="text-red-600 font-extrabold" href="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>

      {!user ? (
        <Link href="/auth">Log in</Link>
      ) : (
        <Link href="/user">
          {user.name} ({cart?.products.length})
        </Link>
      )}
    </header>
  );
};

export default Header;
