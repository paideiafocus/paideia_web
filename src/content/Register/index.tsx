import { memo, useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Alert from '@/components/Alert';
import Page from '@/components/Page';
import { useRouter } from 'next/router';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import ButtonForm from '@/components/ButtonForm';
import * as S from './styles';
import useCreateUser from './useCreateUser';

const FORM = {
  name: { value: '', error: '' },
  lastname: { value: '', error: '' },
  email: { value: '', error: '' },
  confirm_email: { value: '', error: '' },
  password: { value: '', error: '' },
  confirm_password: { value: '', error: '' },
};

const Register = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const { createUser, loading, feedback } = useCreateUser();

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

  const handleCreateUser = useCallback(() => {
    createUser(user, setOpenModal);
  }, [createUser, user]);

  const handleNavigation = useCallback(() => {
    setOpenModal(false);
    router.push('/acesso');
  }, [router]);

  return (
    <Page>
      <div>
        <h1>CADASTRO AO SISTEMA</h1>

        <div>
          <div style={{ textAlign: 'center' }}>
            <p>
              O cadastro ao sistema deve ser realizado para prosseguir com a
              inscrição.
            </p>

            <p>
              Após realizar o cadastro, você receberá um e-mail com o código de
              confirmação, e após validar o código no site, poderá acessar sua
              conta para fazer a inscrição.
            </p>

            <br />
            <b>ATENÇÃO! Esse cadastro não garante sua vaga ao projeto!</b>
            <br />
            <br />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Alert kind="danger">
              Cadastro válido somente durante o periodo de inscrição!
            </Alert>
          </div>

          <S.Form onSubmit={event => event.preventDefault()}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="name"
                  name="name"
                  label="Digite seu nome"
                  variant="outlined"
                  size="small"
                  value={user.name.value}
                  helperText={user.name.error}
                  error={Boolean(user.name.error)}
                  onChange={handleChangeField}
                  onBlur={handleChangeField}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="lastname"
                  name="lastname"
                  label="Sobrenome (completo)"
                  variant="outlined"
                  size="small"
                  value={user.lastname.value}
                  helperText={user.lastname.error}
                  error={Boolean(user.lastname.error)}
                  onChange={handleChangeField}
                  onBlur={handleChangeField}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="email"
                  name="email"
                  label="Digite seu e-mail"
                  variant="outlined"
                  size="small"
                  value={user.email.value}
                  helperText={user.email.error}
                  error={Boolean(user.email.error)}
                  onChange={handleChangeField}
                  onBlur={handleChangeField}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="confirm_email"
                  name="confirm_email"
                  label="Confirme seu e-mail"
                  variant="outlined"
                  size="small"
                  value={user.confirm_email.value}
                  helperText={user.confirm_email.error}
                  error={Boolean(user.confirm_email.error)}
                  onChange={handleChangeField}
                  onBlur={handleChangeField}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
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
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirme sua senha"
                  variant="outlined"
                  size="small"
                  value={user.confirm_password.value}
                  helperText={user.confirm_password.error}
                  error={Boolean(user.confirm_password.error)}
                  onChange={handleChangeField}
                  onBlur={handleChangeField}
                  type="password"
                />
              </Grid>

              <Grid
                item
                xs={12}
                style={{ textAlign: 'center', marginTop: '1rem' }}
              >
                <ButtonForm
                  disabled={isFormError}
                  onClick={handleCreateUser}
                  loading={loading}
                  type="submit"
                >
                  Cadastrar
                </ButtonForm>
              </Grid>
            </Grid>
          </S.Form>
        </div>
      </div>

      {openModal && (
        <Dialog
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {feedback.type === 'danger' ? 'Erro!' : 'Sucesso!'}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ minWidth: '100%' }}>{feedback.message}</div>
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            {feedback.type === 'danger' && (
              <ButtonForm onClick={() => setOpenModal(false)}>OK</ButtonForm>
            )}

            {feedback.type === 'success' && (
              <ButtonForm onClick={handleNavigation}>Fazer login</ButtonForm>
            )}
          </DialogActions>
        </Dialog>
      )}
    </Page>
  );
};

export default memo(Register);
