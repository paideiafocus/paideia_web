import { memo, useCallback, useEffect } from 'react';
import Page from '@/components/Page';
import { Button, CircularProgress } from '@material-ui/core';
import WarningMessage from '@/components/WarningMessage';
import { useRouter } from 'next/router';
import statusFormat from '@/utils/statusFormat';
import useSubscribers from '../useSubscribers';
import * as S from './styles';

const Subscribers = () => {
  const router = useRouter();
  const {
    getSubscribers,
    subscribersData,
    loading,
    feedbackError,
  } = useSubscribers();

  useEffect(() => {
    getSubscribers();
  }, [getSubscribers]);

  const handleShowDetails = useCallback(
    userId => {
      router.push(`/adm/detalhes/${userId}`); // query params
    },
    [router]
  );

  return (
    <Page align="center">
      <h1>Bem vindo Administrador</h1>

      <S.SubscribersSection>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <CircularProgress color="secondary" />
          </div>
        )}

        {!loading && feedbackError && (
          <WarningMessage>{feedbackError}</WarningMessage>
        )}

        {!loading && !feedbackError && subscribersData && (
          <table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Matrícula</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>CPF</th>
                <th>Cartão Cidadão</th>
                <th>Status</th>
                <th>Detalhes</th>
              </tr>
            </thead>

            <tbody>
              {subscribersData.map((subscriber, index) => (
                <tr key={subscriber.candidate_id}>
                  <S.SubscribersTableTd>{index + 1}</S.SubscribersTableTd>
                  <S.SubscribersTableTd>
                    {subscriber.enrollment}
                  </S.SubscribersTableTd>
                  <S.SubscribersTableTd>
                    {`${subscriber.name} ${subscriber.lastname}`}
                  </S.SubscribersTableTd>
                  <S.SubscribersTableTd>
                    {subscriber.email}
                  </S.SubscribersTableTd>
                  <S.SubscribersTableTd>{subscriber.cpf}</S.SubscribersTableTd>
                  <S.SubscribersTableTd>
                    {subscriber.citizen}
                  </S.SubscribersTableTd>
                  <S.SubscribersTableTd>
                    {statusFormat[subscriber.status]}
                  </S.SubscribersTableTd>
                  <S.SubscribersTableTd>
                    <Button
                      variant="contained"
                      onClick={() => handleShowDetails(subscriber.user_id)}
                    >
                      detalhes
                    </Button>
                  </S.SubscribersTableTd>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </S.SubscribersSection>
    </Page>
  );
};

export default memo(Subscribers);
