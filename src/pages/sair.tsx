import { useRouter } from 'next/router';
import { FC, useCallback, useEffect } from 'react';

const Logout: FC = () => {
  const router = useRouter();
  const redirect = useCallback(() => {
    localStorage.removeItem('token');
    router.push('/');
  }, [router]);

  useEffect(() => {
    if (localStorage) {
      redirect();
    }
  }, [redirect]);

  return <div />;
};

export default Logout;
