import useAuthenticate from '@/application/authenticate/useAuthenticate';
import { UserName } from '@/domain/user/types';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Auth = () => {
  const [name, setName] = useState<UserName>('');
  const [email, setEmail] = useState<Email>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { authenticate, user } = useAuthenticate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await authenticate(name, email);
    setLoading(false);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e).then(() => {
          router.replace('/');
        });
      }}
    >
      <label className="flex my-2">
        <span className="min-w-[4.375rem]">Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label className="flex my-2">
        <span className="min-w-[4.375rem]">Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Trying to login...' : 'Login'}
      </button>
    </form>
  );
};

export default Auth;
