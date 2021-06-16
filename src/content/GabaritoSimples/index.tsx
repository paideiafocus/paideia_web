/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useCallback, useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Page from '@/components/Page';
import api from '@/utils/api';

interface IGabaritoSimples {
  pergunta: number;
  materia: string;
  acertou: 's' | 'n';
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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
      </div>

      <br />

      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
                <StyledTableCell>Pergunta</StyledTableCell>
                <StyledTableCell>Materia</StyledTableCell>
                <StyledTableCell>Acertou?</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results &&
                results.map(result => (
                  <StyledTableRow key={result.pergunta}>
                    <StyledTableCell>{result.pergunta}</StyledTableCell>
                    <StyledTableCell>{result.materia}</StyledTableCell>
                    <StyledTableCell>
                      <div
                        style={{
                          fontWeight: 'bold',
                          color: result.acertou === 's' ? 'green' : 'red',
                        }}
                      >
                        {result.acertou === 's' ? 'Sim' : 'Não'}
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
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
