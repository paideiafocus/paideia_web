import { memo, useCallback, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Page from '@/components/Page';
import ButtonForm from '@/components/ButtonForm';
import { useRouter } from 'next/router';
import * as S from './styles';
import useLoginUser from './useLoginUser';
import useRecoverPassword from './useRecoverPassword';

const FORM = {
  email: { value: '', error: '' },
  password: { value: '', error: '' },
  email_recover: { value: '', error: '' },
};

const Login = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFormError, setIsFormError] = useState(true);
  const [user, setUser] = useState(FORM);
  const { authUser, feedbackError, loading: loadingLogin } = useLoginUser();
  const {
    recoverUserPassword,
    feedback,
    loading: loadingRecover,
  } = useRecoverPassword();

  const handleOpenModal = useCallback(() => setModalIsOpen(true), []);
  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  const handleChangeField = useCallback(
    event => {
      const { value, name } = event.currentTarget;
      const error = !value ? 'campo é obrigatório' : '';

      const newUser = {
        ...user,
        [name]: {
          value,
          error,
        },
      };

      setUser(() => newUser);

      const formError = Object.keys(newUser).some(key => !newUser[key].value);
      setIsFormError(() => formError);
    },
    [user]
  );

  const handleNavigation = useCallback(
    status => router.push(status === 'common' ? '/valida' : '/'),
    [router]
  );

  const handleAuthUser = useCallback(() => {
    authUser(user, handleNavigation);
  }, [authUser, handleNavigation, user]);

  const handleRecover = useCallback(() => {
    recoverUserPassword(user.email_recover.value);
  }, [recoverUserPassword, user.email_recover.value]);

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
              value={user.email.value}
              helperText={user.email.error}
              error={Boolean(user.email.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </S.GroupField>

          <S.GroupField>
            <TextField
              id="password"
              name="password"
              label="Senha"
              variant="outlined"
              size="small"
              value={user.password.value}
              helperText={user.password.error}
              error={Boolean(user.password.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
              type="password"
            />
            {feedbackError && (
              <S.Message type="danger">{feedbackError}</S.Message>
            )}
          </S.GroupField>

          <S.ForgotPassword>
            <Button onClick={handleOpenModal}>Esqueceu sua senha?</Button>
          </S.ForgotPassword>

          <S.Submit>
            <ButtonForm
              disabled={isFormError}
              onClick={handleAuthUser}
              loading={loadingLogin}
            >
              Entrar
            </ButtonForm>
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
              {feedback.type !== 'success' && (
                <TextField
                  id="email_recover"
                  name="email_recover"
                  label="E-mail cadastrado"
                  variant="outlined"
                  size="small"
                  value={user.email_recover.value}
                  helperText={user.email_recover.error}
                  error={Boolean(user.email_recover.error)}
                  onChange={handleChangeField}
                  onBlur={handleChangeField}
                  style={{ width: '100%' }}
                />
              )}

              {feedback.type !== '' && (
                <S.Message type={feedback.type}>{feedback.message}</S.Message>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            {feedback.type === 'success' ? 'OK' : 'Cancelar'}
          </Button>

          {feedback.type !== 'success' && (
            <ButtonForm
              disabled={!user.email_recover.value}
              loading={loadingRecover}
              onClick={handleRecover}
            >
              Enviar
            </ButtonForm>
          )}
        </DialogActions>
      </Dialog>
    </Page>
  );
};

export default memo(Login);
