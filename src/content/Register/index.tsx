import { memo, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Alert from '@/components/Alert';
import Page from '@/components/Page';

import * as S from './styles';
import api from '../../utils/api';

const Register = () => {
  // TESTE AXIOS REQUEST
  useEffect(() => {
    api({ url: '/password/validate', method: 'POST', data: { token: 'aaaa' } });
  }, []);

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

          <S.Form>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="name"
                  name="name"
                  label="Digite seu nome"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="lastname"
                  name="lastname"
                  label="Sobrenome (completo)"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="email"
                  name="email"
                  label="Digite seu e-mail"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="password"
                  name="password"
                  label="Senha"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <S.TextFieldCustom
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirme sua senha"
                  variant="outlined"
                  size="small"
                />
              </Grid>

              <Grid
                item
                xs={12}
                style={{ textAlign: 'center', marginTop: '1rem' }}
              >
                <Button variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </S.Form>
        </div>
      </div>
    </Page>
  );
};

export default memo(Register);
