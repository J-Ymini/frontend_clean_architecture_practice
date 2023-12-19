export type UserName = string;

export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
};

export const hasAllergy = (user: User, ingredient: Ingredient): boolean => {
  const result = user.allergies.includes(ingredient);

  return result;
};

export const hasPreference = (user: User, ingredient: Ingredient): boolean => {
  const result = user.preferences.includes(ingredient);

  return result;
};
