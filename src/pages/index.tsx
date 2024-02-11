import { Cookie } from "@/components/Cookie";
import { Product } from "@/domain/product/types";
import { useCookieStorage } from "@/services/storage/storageAdaptor";

const Front = () => {
  const { cookies } = useCookieStorage();

  if (!cookies?.length) {
    return null;
  }

  return (
    <main>
      <h1>Cookies</h1>
      <ul>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Front;
