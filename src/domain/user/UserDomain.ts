import { User } from "./types";

export class UserDomain {
  readonly user: User;

  constructor(user: User) {
    this.user = user;
  }

  hasAllergy(ingredient: Ingredient): boolean {
    if (!ingredient || !this) {
      return false;
    }

    const result = this.user.allergies.includes(ingredient);

    return result;
  }

  hasPreference(ingredient: Ingredient): boolean {
    if (!ingredient || !this) {
      return false;
    }

    const result = this.user.preferences.includes(ingredient);

    return result;
  }
}
