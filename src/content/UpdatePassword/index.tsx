import { memo, useCallback, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Page from '@/components/Page';
import ButtonForm from '@/components/ButtonForm';
import useValidateToken from './useValidateToken';
import * as S from './styles';
import useUpdatePassword from './useUpdatePassword';

const FORM = {
  newPassword: { value: '', error: '' },
  confirmNewPassword: { value: '', error: '' },
};

const UpdatePassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const {
    validateToken,
    feedback: feedbackValidate,
    loading: loadingValidate,
  } = useValidateToken();
  const {
    updatePassword,
    feedback: feedbackUpdatePassword,
    loading: loadingUpdatePassword,
  } = useUpdatePassword();

  useEffect(() => {
    if (router.query.token) {
      validateToken(router.query.token);
    }
  }, [router.query, validateToken]);

  const handleChangeField = useCallback(
    event => {
      const { value, name } = event.currentTarget;
      const error = !value ? 'campo é obrigatório' : '';

      const newPassword = {
        ...password,
        [name]: {
          value,
          error,
        },
      };

      setPassword(() => newPassword);

      const formError = Object.keys(newPassword).some(
        key => !newPassword[key].value
      );
      setIsFormError(() => formError);
    },
    [password]
  );

  const handleNavigate = useCallback(() => {
    router.push('/acesso');
  }, [router]);

  const handleUpdatePassword = useCallback(() => {
    updatePassword(password, router.query.token, handleNavigate);
  }, [updatePassword, password, router.query.token, handleNavigate]);

  return (
    <Page>
      <h1>NOVA SENHA</h1>

      <S.UpdatePasswordSection>
        {loadingValidate && !feedbackValidate.message && <CircularProgress />}

        {feedbackValidate.message === 'VALID_TOKEN' && (
          <div style={{ width: '80%' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <S.TextFieldCustom
                id="newPassword"
                name="newPassword"
                label="Nova senha"
                variant="outlined"
                size="small"
                value={password.newPassword.value}
                helperText={password.newPassword.error}
                error={Boolean(password.newPassword.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="password"
              />
            </div>

            <div>
              <S.TextFieldCustom
                id="confirmNewPassword"
                name="confirmNewPassword"
                label="Confirme sua senha"
                variant="outlined"
                size="small"
                value={password.confirmNewPassword.value}
                helperText={password.confirmNewPassword.error}
                error={Boolean(password.confirmNewPassword.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="password"
              />
            </div>

            {feedbackUpdatePassword.type === 'danger' && (
              <S.ErrorMessage>{feedbackUpdatePassword.message}</S.ErrorMessage>
            )}

            <S.Submit>
              <ButtonForm
                disabled={isFormError}
                loading={loadingUpdatePassword}
                onClick={handleUpdatePassword}
              >
                Alterar
              </ButtonForm>
            </S.Submit>
          </div>
        )}

        {feedbackValidate.message === 'INVALID_TOKEN' && (
          <S.ErrorMessage>
            Falha ao criar nova senha, tente recuperar sua senha novamente.
            <Link href="/acesso">Ir ao login.</Link>
          </S.ErrorMessage>
        )}
      </S.UpdatePasswordSection>
    </Page>
  );
};

export default memo(UpdatePassword);
