import { memo, useCallback, useEffect } from 'react';
import Page from '@/components/Page';
//import { withStyles, makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, CircularProgress } from '@material-ui/core';
import WarningMessage from '@/components/WarningMessage';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import statusFormat from '@/utils/statusFormat';
import useSubscribers from '../useSubscribers';
import * as S from './styles';

const StyledTableCellCustom = styled.table`
  head {
    background-color: #000;
    color: #fff;
    font-size: 14;
  }

  body {
    font-size: 12;
  }
`;

const StyledTableRowCustom = styled.table`
  &:nth-of-type(odd) {
    background-color: #f4f4f4;
  }
`;
//const StyledTableCell = withStyles(theme => ({
//    backgroundColor: theme.palette.common.black,
//    color: theme.palette.common.white,
//    fontSize: 14,
//  },
//  body: {
//    fontSize: 12,
//  },
//}))(TableCell);
//
//const StyledTableRow = withStyles(theme => ({
//  root: {
//    '&:nth-of-type(odd)': {
//      backgroundColor: theme.palette.action.hover,
//    },
//  },
//}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Subscribers = () => {
  const classes = useStyles();
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {/* <StyledTableCellCustom align="right">Carbs&nbsp;(g)</StyledTableCellCustom> */}
                  <StyledTableCellCustom>Nº</StyledTableCellCustom>
                  <StyledTableCellCustom>Matrícula</StyledTableCellCustom>
                  <StyledTableCellCustom>Nome</StyledTableCellCustom>
                  <StyledTableCellCustom>E-mail</StyledTableCellCustom>
                  <StyledTableCellCustom>CPF</StyledTableCellCustom>
                  <StyledTableCellCustom>Cartão Cidadão</StyledTableCellCustom>
                  <StyledTableCellCustom>Status</StyledTableCellCustom>
                  <StyledTableCellCustom>Detalhes</StyledTableCellCustom>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscribersData.map((subscriber, index) => (
                  <StyledTableRow key={subscriber.candidate_id}>
                    {/* <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell> */}
                    {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
                    <StyledTableCellCustom>{index + 1}</StyledTableCellCustom>
                    <StyledTableCellCustom>{subscriber.enrollment}</StyledTableCellCustom>
                    <StyledTableCellCustom>
                      {`${subscriber.name} ${subscriber.lastname}`}
                    </StyledTableCellCustom>
                    <StyledTableCellCustom>{subscriber.email}</StyledTableCellCustom>
                    <StyledTableCellCustom>{subscriber.cpf}</StyledTableCellCustom>
                    <StyledTableCellCustom>{subscriber.citizen}</StyledTableCellCustom>
                    <StyledTableCellCustom>
                      {statusFormat[subscriber.status]}
                    </StyledTableCellCustom>
                    <StyledTableCellCustom>
                      <Button
                        variant="contained"
                        onClick={() => handleShowDetails(subscriber.user_id)}
                      >
                        detalhes
                      </Button>
                    </StyledTableCellCustom>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </S.SubscribersSection>
    </Page>
  );
};

export default memo(Subscribers);
