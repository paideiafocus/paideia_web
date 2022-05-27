import { memo, useEffect, useMemo } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Page from '@/components/Page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useGetResults from './useGetResults';
import reduceResults from './reduceResults';
import getTotal from './getTotal';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
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
    marginBottom: '3rem',
  },
});

const SimuladoResultado = () => {
  const classes = useStyles();
  const {
    getAdmResults,
    materias,
    resultsData,
    loading,
    feedbackError,
  } = useGetResults();

  useEffect(() => {
    getAdmResults();
  }, [getAdmResults]);

  const resultsDataFormatted = useMemo(
    () => resultsData && reduceResults(resultsData),
    [resultsData]
  );

  return (
    <div>
    <Page isFull>
      <h1>Resultados Completo</h1>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Aluno</StyledTableCell>
              {materias &&
                materias.map(materia => (
                  <StyledTableCell key={materia}>{materia}</StyledTableCell>
                ))}
              <StyledTableCell>Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsDataFormatted &&
              resultsDataFormatted.map(result => (
                <StyledTableRow key={result.fullname}>
                  <StyledTableCell>{result.fullname}</StyledTableCell>
                  {result.materias.map((materia, index) => (
                    <StyledTableCell
                      key={`${materia.user_id}_${materias[index]}`}
                    >
                      {materia.correct}
                      /50
                    </StyledTableCell>
                  ))}
                  <StyledTableCell>
                    <b>{getTotal(result.materias)}</b>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Page>
    </div>
  );
};

export default memo(SimuladoResultado);
