import { memo, useCallback, useEffect, useState } from 'react';
import isLogged from '@/utils/isLogged';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import decode from 'jwt-decode';
import * as S from './styles';
import Page from '../Page';

interface IDecodeToken {
  status: string;
}

const PrivatePage = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | undefined>();
  const [status, setStatus] = useState('');

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

  useEffect(() => {
    if (localStorage) {
      const user = decode(localStorage.getItem('token')) as IDecodeToken;
      setStatus(user?.status);
    }
  }, []);

  return (
    <>
      {loading && (
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {!loading && isAuthorized && status !== 'canceled' && children}

      {!loading && !isAuthorized && status !== 'canceled' && redirect()}

      {!loading && status === 'canceled' && (
        <Page>
          <S.BlockSection>
            <h3>
              Sua conta se encontra bloqueada, favor entrar em contato conosco
              para maiores informações.
              <br />
              <br />
              contato@associacaopaideia.org.br
            </h3>
          </S.BlockSection>
        </Page>
      )}
    </>
  );
};

export default memo(PrivatePage);
