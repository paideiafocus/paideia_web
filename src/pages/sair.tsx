import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';

const Logout: FC = () => {
  const router = useRouter();

  const redirect = useCallback(() => {
    localStorage.removeItem('token');
    router.push('/');
  }, [router]);

  return (
    <>
      {redirect()}
      <div />
    </>
  );
};

export default Logout;
