import { FC, memo, useCallback, useState } from 'react';
import Page from '@/components/Page';

import Alert from '@/components/Alert';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import rules from './rules.json';
import * as S from './styles';

const Term: FC = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/pessoal');
  }, [router]);

  return (
    <Page>
      <h1>INSCRIÇÃO 1º SEMESTRE 2021</h1>

      <div style={{ textAlign: 'center' }}>
        <h3>TERMO DE RESPONSABILIDADE - REGRAS DE FREQUÊNCIA E CONDUTA</h3>
        <br />
        <b>
          Ao se inscrever no CURSINHO FOCUS da ASSOCIAÇÃO PAIDEIA, o (a) aluno
          (a) assume a responsabilidade de cumprir e respeitar as seguintes
          normas:
        </b>

        <S.TermList>
          <ol>
            {rules.map(rule => (
              <li key={rule}>
                <S.TermItem>{rule}</S.TermItem>
              </li>
            ))}
          </ol>
        </S.TermList>

        <Alert kind="warning">
          Baixe o termo e realize seu preenchimento, guarde esse documento pois
          em etapas futuras será pedido que seja enviado o termo durante a
          inscrição.
          <a href="/assets/pdf/termo_responsabilidade.pdf" target="_blank">
            Baixar termo
          </a>
        </Alert>

        <S.Confirm>
          <label htmlFor="confirm-term">
            <input
              type="checkbox"
              id="confirm-term"
              name="confirm-term"
              onChange={() => setIsConfirm(oldIsConfirm => !oldIsConfirm)}
            />
            Li e aceito os termos de responsabilidade.
          </label>
        </S.Confirm>

        <S.ButtonContainer>
          <Button
            color="primary"
            variant="contained"
            disabled={!isConfirm}
            onClick={handleNavigation}
          >
            Avançar
          </Button>
        </S.ButtonContainer>
      </div>
    </Page>
  );
};

export default memo(Term);
