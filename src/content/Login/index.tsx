import { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import Page from '@/components/Page';
import * as S from './styles';

const Login = () => {
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
            <a href="/">Esqueceu sua senha?</a>
          </S.ForgotPassword>

          <S.Submit>
            <Button variant="contained" color="primary">
              Entrar
            </Button>
          </S.Submit>
        </S.Form>
      </S.LoginSection>

      {/* <div className="row" style="justify-content: center;">
        <div className="col-sm-6"> */}
      {/* <form>
            <div className="form-group">
              <label className="labelCampo" htmlFor="">
                E-mail:
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                formControlName="email"
                required
              />
            </div>
            <div className="form-group">
              <label className="labelCampo" htmlFor="">
                Senha:
              </label>
              <input
                type="password"
                className="form-control"
                name="senha"
                id="senha"
                formControlName="senha"
                required
              />
            </div>

            <a href="/recuperacao" className="col-sm-12">
              Esqueceu sua senha?
            </a>

            <div className="col-sm-12 text-center">
              <button type="submit" className="btn btn-primary mt-2">
                Entrar
              </button>
            </div>
          </form>
         */}
      {/* </div>
      </div> */}
    </Page>
  );
};

export default memo(Login);
