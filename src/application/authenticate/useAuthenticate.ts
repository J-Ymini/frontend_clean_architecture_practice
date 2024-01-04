import { User, UserName } from '@/domain/user/types';
import { useAuth } from '@/services/auth/authAdaptor';
import { useUserStorage } from '@/services/storage/storageAdaptor';

const useAuthenticate = () => {
  const auth = useAuth();
  const userStorage = useUserStorage();

  const authenticate = async (name: UserName, email: Email) => {
    const user = (await auth.auth(name, email)) as User;
    userStorage.updateUser?.(user);
  };

  return {
    user: userStorage.user,
    authenticate,
  };
};

export default useAuthenticate;
