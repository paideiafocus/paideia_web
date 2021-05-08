import { memo, useCallback, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Page from '@/components/Page';
import * as S from './styles';

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalIsOpen(true), []);
  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  return (
    <Page>
      <h1>ACESSE SUA CONTA</h1>

      <S.LoginSection>
        <S.Form>
          <S.GroupField>
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              size="small"
            />
          </S.GroupField>

          <S.GroupField>
            <TextField
              id="password"
              name="password"
              label="Senha"
              variant="outlined"
              size="small"
            />
          </S.GroupField>

          <S.ForgotPassword>
            <Button onClick={handleOpenModal}>Esqueceu sua senha?</Button>
          </S.ForgotPassword>

          <S.Submit>
            <Button variant="contained" color="primary">
              Entrar
            </Button>
          </S.Submit>
        </S.Form>
      </S.LoginSection>

      <Dialog
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Recuperação de senha</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ minWidth: '28rem' }}>
              <TextField
                id="email_recover"
                name="email_recover"
                label="E-mail cadastrado"
                variant="outlined"
                size="small"
                style={{ width: '100%' }}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={handleCloseModal}
            color="primary"
            variant="contained"
            autoFocus
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};

export default memo(Login);
