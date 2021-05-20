import React, { memo, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, TextField } from '@material-ui/core';

import Page from '@/components/Page';
import Alert from '@/components/Alert';
import ButtonForm from '@/components/ButtonForm';
import WarningMessage from '@/components/WarningMessage';
import * as S from './styles';
import useCandidate from './useCandidate';

const FORM = {
  fullname: { value: '', error: '' },
  birth_date: { value: '', error: '' },
  phone1: { value: '', error: '' },
  cpf: { value: '', error: '' },
  rg: { value: '', error: '' },
  citizen: { value: '', error: '' },
  course: { value: '', error: '' },
};

const Personal = () => {
  const router = useRouter();
  const [personal, setPersonal] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const { createCandidate, loading, feedbackError } = useCandidate();

  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

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

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/arquivos');
  }, [router]);

  const handleCreateCandidate = useCallback(() => {
    createCandidate(personal, handleNavigation);
  }, [createCandidate, handleNavigation, personal]);

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
          <Grid item xs={12} lg={4}>
            <TextField
              id="fullname"
              name="fullname"
              label="Nome completo"
              value={personal.fullname.value}
              helperText={personal.fullname.error}
              error={Boolean(personal.fullname.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
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

          <Grid item xs={12} lg={4}>
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

          <Grid item xs={12} lg={4}>
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

          <Grid item xs={12} lg={4}>
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

          <Grid item xs={12} lg={4}>
            <TextField
              id="citizen"
              name="citizen"
              label="Cartão Cidadão"
              value={personal.citizen.value}
              helperText={personal.citizen.error}
              error={Boolean(personal.citizen.error)}
              onChange={handleChangeField}
              onBlur={handleChangeField}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
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

        {feedbackError && <WarningMessage>{feedbackError}</WarningMessage>}

        <S.ButtonContainer>
          <ButtonForm
            loading={loading}
            disabled={isFormError}
            onClick={handleCreateCandidate}
          >
            Salvar dados pessoais
          </ButtonForm>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Personal);
