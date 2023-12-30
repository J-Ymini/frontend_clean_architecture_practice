import { UserName } from '@/domain/user/types';
import { fakeApi } from '../api';

export const useAuth = () => {
  const auth = (name: UserName, email: Email) => {
    const result = fakeApi({
      name,
      email,
      id: 'sample-user-id',
      allergies: ['cocoa', 'cherry'],
      preferences: ['marshmallow', 'peanuts'],
    });

    return result;
  };

  return { auth };
};
