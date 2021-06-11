import { memo, useCallback, useState } from 'react';
import Page from '@/components/Page';
import { TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ButtonForm from '@/components/ButtonForm';
import { useRouter } from 'next/router';
import * as S from './styles';
import useCodeAuth from './useCodeAuth';

const ValidateCode = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [code, setCode] = useState({ value: '', error: '' });
  const [isFormError, setIsFormError] = useState(true);
  const { validateCode, loading, feedback } = useCodeAuth();

  const handleOpenModal = useCallback(() => setModalIsOpen(true), []);
  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  const handleChangeCode = useCallback(event => {
    const { value } = event.currentTarget;
    const error = !value ? 'campo é obrigatório' : '';

    const newCode = {
      value,
      error,
    };

    setCode(() => newCode);

    const formError = !newCode.value;
    setIsFormError(() => formError);
  }, []);

  const handleValidate = useCallback(() => {
    validateCode(code, handleOpenModal);
  }, [code, handleOpenModal, validateCode]);

  const handleNavigation = useCallback(
    path => {
      router.push(path);
    },
    [router]
  );

  return (
    <Page>
      <h1>VALIDAR E-MAIL</h1>

      <S.Form onSubmit={event => event.preventDefault()}>
        <legend>
          Informe o código de autenticação enviado ao seu e-mail no momento em
          que realizou o cadastro.
        </legend>

        <S.GroupField>
          <TextField
            id="code"
            name="code"
            label="Código de acesso"
            variant="outlined"
            size="small"
            value={code.value}
            helperText={code.error}
            error={Boolean(code.error)}
            onChange={handleChangeCode}
            onBlur={handleChangeCode}
          />
          {feedback.type === 'danger' && (
            <S.ErrorMessage>{feedback.message}</S.ErrorMessage>
          )}
        </S.GroupField>

        <S.Submit>
          <ButtonForm
            disabled={isFormError}
            loading={loading}
            onClick={handleValidate}
            type="submit"
          >
            Validar
          </ButtonForm>
        </S.Submit>
      </S.Form>

      <Dialog
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Sucesso!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ minWidth: '28rem' }}>
              Código validado com sucesso! O que deseja fazer?
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleNavigation('/')} color="primary">
            Ir a Home
          </Button>
          <Button
            onClick={() => handleNavigation('/inscricao/termo')}
            color="primary"
            variant="contained"
          >
            Começar inscrição
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};

export default memo(ValidateCode);
