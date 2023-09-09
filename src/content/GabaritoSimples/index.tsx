/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '@/components/Page';
import api from '@/utils/api';
import * as S from './styles';

interface IGabaritoSimples {
  pergunta: number;
  materia: string;
  acertou: 's' | 'n';
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const GabaritoSimples = () => {
  const classes = useStyles();
  const [results, setResults] = useState<IGabaritoSimples[] | undefined>();
  const [totais, setTotais] = useState<any>();

  const loadGabarito = useCallback(async () => {
    const response: IGabaritoSimples[] = await api({
      url: '/gabaritosimples',
    }).then(({ data }) => data);

    setResults(response);

    setTotais(() => {
      const materiasList = response.reduce((acc, curr) => {
        if (!acc.some(item => item.materia === curr.materia)) {
          return [...acc, { materia: curr.materia, total: 0 }];
        }
        return acc;
      }, []);

      response.forEach(item => {
        if (item.acertou === 's') {
          const index = materiasList.findIndex(
            resp => resp.materia === item.materia
          );
          materiasList[index].total += 1;
        }
      });

      return materiasList;
    });
  }, []);

  useEffect(() => {
    loadGabarito();
  }, [loadGabarito]);

  return (
    <Page>
      <h1>Resultados</h1>
      {/* REDAÇÃO */}
      {/*
      <div>
        Caso ainda não tenha feito a redação: leia com atenção o{' '}
        <a href="/assets/pdf/redacao_tema.pdf" target="_blank">
          tema
        </a>
        , imprima a{' '}
        <a href="/assets/pdf/redacao_folha.pdf" target="_blank">
          folha de redação
        </a>{' '}
        e a faça de forma manuscrita, digitalize e envie para nosso e-mail{' '}
        <b>contato@associacaopaideia.org.br</b>
      </div> */}

      <br />

      <div>
        <S.ResultTable className={classes.table} aria-label="customized table">
          <thead>
            <tr>
              <S.ResultTableTh>Pergunta</S.ResultTableTh>
              <S.ResultTableTh>Matéria</S.ResultTableTh>
              <S.ResultTableTh>Acertou?</S.ResultTableTh>
            </tr>
          </thead>
          <tbody>
            {results &&
              results.map(result => (
                <tr key={result.pergunta}>
                  <S.ResultTableTd>{result.pergunta}</S.ResultTableTd>
                  <S.ResultTableTd>{result.materia}</S.ResultTableTd>
                  <S.ResultTableTd>
                    <div
                      style={{
                        fontWeight: 'bold',
                        color: result.acertou === 's' ? 'green' : 'red',
                      }}
                    >
                      {result.acertou === 's' ? 'Sim' : 'Não'}
                    </div>
                  </S.ResultTableTd>
                </tr>
              ))}
          </tbody>
        </S.ResultTable>
        <div style={{ margin: '2rem 0' }}>
          <h2>Total</h2>

          <div>
            {totais &&
              totais.map(item => (
                <p>
                  <strong>{`${item.materia}: ${item.total}`}</strong>
                </p>
              ))}
            <p>
              {totais && results && (
                <strong>
                  <u>
                    {`Total geral: ${totais.reduce(
                      (acc, curr) => acc + curr.total,
                      0
                    )} de ${results.length}`}
                  </u>
                </strong>
              )}
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default memo(GabaritoSimples);
