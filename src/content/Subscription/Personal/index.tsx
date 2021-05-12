import React, { memo, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Grid, TextField } from '@material-ui/core';

import Page from '@/components/Page';
import Alert from '@/components/Alert';
import * as S from './styles';

const FORM = {
  name: { value: '', error: '' },
  lastname: { value: '', error: '' },
  birth_date: { value: '', error: '' },
  phone1: { value: '', error: '' },
  cpf: { value: '', error: '' },
  rg: { value: '', error: '' },
  citizen: { value: '', error: '' },
  course: { value: '', error: '' },
};

const Personal = () => {
  const [personal, setPersonal] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/arquivos');
  }, [router]);

  const handleChangeField = useCallback(
    event => {
      const { value, name } = event.currentTarget;
      const error = !value ? 'campo é obrigatório' : '';

      const newPersonal = {
        ...personal,
        [name]: {
          value,
          error,
        },
      };

      setPersonal(() => newPersonal);

      const formError = Object.keys(newPersonal).some(
        key => !newPersonal[key].value
      );
      setIsFormError(() => formError);
    },
    [personal]
  );

  return (
    <Page align="center">
      <h2>DADOS PESSOAIS</h2>

      <Alert kind="danger">
        <b>ATENÇÃO! </b>
        O CARTÃO CIDADÃO DEVE ESTAR EM DIA, DO CONTRÁRIO A INSCRIÇÃO SERÁ
        CANCELADA!
        <br />
        Caso o cartão esteja inválido por quaisquer motivos, você deverá entrar
        em contato direto com o Cartão Cidadão ou seguir até um posto mais
        próximo.
      </Alert>

      <S.Form>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <TextField
              id="name"
              name="name"
              label="Nome"
              value={personal.name.value}
              helperText={personal.name.error}
              error={Boolean(personal.name.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="lastname"
              name="lastname"
              label="Sobrenome"
              value={personal.lastname.value}
              helperText={personal.lastname.error}
              error={Boolean(personal.lastname.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="birth_date"
              name="birth_date"
              label="Data Nascimento"
              placeholder="dd/mm/yyyy"
              value={personal.birth_date.value}
              helperText={personal.birth_date.error}
              error={Boolean(personal.birth_date.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="phone1"
              name="phone1"
              label="Telefone"
              value={personal.phone1.value}
              helperText={personal.phone1.error}
              error={Boolean(personal.phone1.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="cpf"
              name="cpf"
              label="CPF"
              value={personal.cpf.value}
              helperText={personal.cpf.error}
              error={Boolean(personal.cpf.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="rg"
              name="rg"
              label="RG"
              value={personal.rg.value}
              helperText={personal.rg.error}
              error={Boolean(personal.rg.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="citizen"
              name="citizen"
              label="Cartão Cidadão (Louveira)"
              value={personal.citizen.value}
              helperText={personal.citizen.error}
              error={Boolean(personal.citizen.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={3}>
            <TextField
              id="course"
              name="course"
              label="Curso desejado"
              value={personal.course.value}
              helperText={personal.course.error}
              error={Boolean(personal.course.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>
        </Grid>

        <S.ButtonContainer>
          <Button
            variant="contained"
            color="secondary"
            disabled={isFormError}
            onClick={handleNavigation}
          >
            Salvar dados pessoais
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Personal);
