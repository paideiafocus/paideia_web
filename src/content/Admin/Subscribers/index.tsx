import { memo, useCallback, useEffect } from 'react';
import Page from '@/components/Page';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, CircularProgress } from '@material-ui/core';
import WarningMessage from '@/components/WarningMessage';
import { useRouter } from 'next/router';
import statusFormat from '@/utils/statusFormat';
import useSubscribers from '../useSubscribers';
import * as S from './styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  body: {
    fontSize: 12,
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
                  {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
                  <StyledTableCell>Nº</StyledTableCell>
                  <StyledTableCell>Matrícula</StyledTableCell>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell>E-mail</StyledTableCell>
                  <StyledTableCell>CPF</StyledTableCell>
                  <StyledTableCell>Cartão Cidadão</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Detalhes</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscribersData.map((subscriber, index) => (
                  <StyledTableRow key={subscriber.candidate_id}>
                    {/* <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell> */}
                    {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell>{subscriber.enrollment}</StyledTableCell>
                    <StyledTableCell>
                      {`${subscriber.name} ${subscriber.lastname}`}
                    </StyledTableCell>
                    <StyledTableCell>{subscriber.email}</StyledTableCell>
                    <StyledTableCell>{subscriber.cpf}</StyledTableCell>
                    <StyledTableCell>{subscriber.citizen}</StyledTableCell>
                    <StyledTableCell>
                      {statusFormat[subscriber.status]}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="contained"
                        onClick={() => handleShowDetails(subscriber.user_id)}
                      >
                        detalhes
                      </Button>
                    </StyledTableCell>
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
