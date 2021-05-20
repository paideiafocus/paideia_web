import { memo, useCallback, useEffect, useState } from 'react';
import isLogged from '@/utils/isLogged';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';

const PrivatePage = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | undefined>();

  const redirect = useCallback(() => {
    localStorage.removeItem('token');
    router.push('/');
  }, [router]);

  const verifyUser = useCallback(async () => {
    const auth = await isLogged();
    setIsAuthorized(auth);
    setLoading(false);
  }, []);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <>
      {loading && (
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {!loading && isAuthorized && children}

      {!loading && !isAuthorized && redirect()}
    </>
  );
};

export default memo(PrivatePage);
