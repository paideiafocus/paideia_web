/* eslint-disable react/jsx-one-expression-per-line */
import { FC, memo, useCallback, useMemo, useState } from 'react';
import Page from '@/components/Page';

import Alert from '@/components/Alert';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import rules from './rules.json';
import * as S from './styles';

const Term: FC = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const router = useRouter();

  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/pessoal');
  }, [router]);

  return (
    <Page>
      <h1>INSCRIÇÃO FOCUS CURSINHO {year}</h1>

      <div style={{ textAlign: 'center' }}>
        <h3>TERMO DE RESPONSABILIDADE</h3>
        <br />
        <b>
          Ao se inscrever no <b>Focus Pré-Vestibular</b>, o (a) aluno (a) assume
          a responsabilidade de respeitar e cumprir as seguintes normas:
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

        <Alert kind="danger">
          <b>
            Antes de começar a inscrição leia com atenção o{' '}
            <a
              href="https://www.associacaopaideia.org.br/edital_2_2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edital
            </a>
          </b>
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
