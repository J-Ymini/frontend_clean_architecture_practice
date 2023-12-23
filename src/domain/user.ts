export type UserName = string;

export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
};

export class UserDomain {
  readonly user: User;

  constructor(user: User) {
    this.user = user;
  }

  hasAllergy(ingredient: Ingredient): boolean {
    const result = this.user.allergies.includes(ingredient);

    return result;
  }

  hasPreference(ingredient: Ingredient): boolean {
    const result = this.user.preferences.includes(ingredient);

    return result;
  }
}
