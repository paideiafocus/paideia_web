import { memo, useEffect, useMemo } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Page from '@/components/Page';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import useGetResults from './useGetResults';
import reduceResults from './reduceResults';
import getTotal from './getTotal';

const StyledTableCellCustom = styled.table`
  head {
    background-color: #000;
    color: #fff;
    font-size: 16;
  }
<<<<<<< HEAD
  body {
    font-size: 14;
    text-align: 'center';
  }
`;

const StyledTableRowCustom = styled.table`
  &:nth-of-type(odd) {
    background-color: #f4f4f4;
  }
`;

// const StyledTableCellCustom = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     fontSize: 16,
//   },
//   body: {
//     fontSize: 14,
//     textAlign: 'center',
//   },
// }))(TableCell);

// const StyledTableRowCustom = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

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

=======

  body {
    font-size: 14;
    text-align: 'center';
  }
`;

const StyledTableRowCustom = styled.table`
  &:nth-of-type(odd) {
    background-color: #f4f4f4;
  }
`;

// const StyledTableCellCustom = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     fontSize: 16,
//   },
//   body: {
//     fontSize: 14,
//     textAlign: 'center',
//   },
// }))(TableCell);

// const StyledTableRowCustom = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

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

>>>>>>> 20436c97624cc1cc96c1991d0dbdc38595340a06
  useEffect(() => {
    getAdmResults();
  }, [getAdmResults]);

  const resultsDataFormatted = useMemo(
    () => resultsData && reduceResults(resultsData),
    [resultsData]
  );

  return (
    <Page isFull>
      <h1>Resultados Completo</h1>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCellCustom>Aluno</StyledTableCellCustom>
              {materias &&
                materias.map(materia => (
                  <StyledTableCellCustom key={materia}>
                    {materia}
                  </StyledTableCellCustom>
                ))}
              <StyledTableCellCustom>Total</StyledTableCellCustom>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsDataFormatted &&
              resultsDataFormatted.map(result => (
                <StyledTableRowCustom key={result.fullname}>
                  <StyledTableCellCustom>
                    {result.fullname}
                  </StyledTableCellCustom>
                  {result.materias.map((materia, index) => (
                    <StyledTableCellCustom
                      key={`${materia.user_id}_${materias[index]}`}
                    >
                      {materia.correct}
                      /50
                    </StyledTableCellCustom>
                  ))}
                  <StyledTableCellCustom>
                    <b>{getTotal(result.materias)}</b>
                  </StyledTableCellCustom>
                </StyledTableRowCustom>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Page>
  );
};

export default memo(SimuladoResultado);
