import { Product } from "@/domain/product/types";
import { ingredients } from "@/constants";
import { UserDomain } from "@/domain/user/UserDomain";
import { useUserStorage } from "@/services/storage/storageAdaptor";
import { User } from "@/domain/user/types";

type ToppingsProps = {
  cookie: Product;
};

export function Toppings({ cookie }: ToppingsProps) {
  const { user } = useUserStorage();
  const { hasAllergy, hasPreference } = new UserDomain(user as User);

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}
          {!!user && hasPreference(topping) && <>👍</>}{" "}
          {!!user && hasAllergy(topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}
