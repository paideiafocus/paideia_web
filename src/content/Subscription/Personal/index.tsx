/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, TextField } from '@material-ui/core';

import Page from '@/components/Page';
import Alert from '@/components/Alert';
import ButtonForm from '@/components/ButtonForm';
import WarningMessage from '@/components/WarningMessage';
import phoneFormat from '@/utils/phoneFormat';
import dateFormat from '@/utils/dateFormat';
import cpfFormat from '@/utils/cpfFormat';
import rgFormat from '@/utils/rgFormat';
import useCandidate from './useCandidate';
import * as S from './styles';

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
      let newValue = value;

      if (name === 'birth_date') {
        newValue = dateFormat(value);
      }

      if (name === 'phone1') {
        newValue = phoneFormat(value);
      }

      if (name === 'cpf') {
        newValue = cpfFormat(value);
      }

      if (name === 'rg') {
        newValue = rgFormat(value);
      }

      const newPersonal = {
        ...personal,
        [name]: {
          value: newValue,
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

      <Alert kind="paideia">
        <p>
          <b>ATENÇÃO CANDIDATOS!</b>
        </p>
        <br />
        <p style={{ textAlign: 'justify' }}>
          É <b>obrigatório </b>a apresentação do <b>CARTÃO CIDADÃO</b> para o
          cadastramento da inscrição. Caso o seu <b>CARTÃO CIDADÃO</b> esteja
          inativo ou você não o possua entre em contato com a
          <b> Secretaria Municipal de Projetos e Programas</b>, através do site
          da Prefeitura Municipal de Louveira, e faça ou o seu cadastro para a
          obtenção do
          <b> CARTÃO CIDADÃO </b>
          ou a atualização do seu <b>CARTÃO CIDADÃO</b>. Para maiores
          informações entre em contato pelo whatsapp do
          <b> CARTÃO CIDADÃO</b> pelo número <b>(19) 98363 0501</b>. Está
          disponível em nosso site um manual{' '}
          <b>“CARTA DE SERVIÇOS AO USUÁRIO DA SECRETARIA DE PROJETOS”</b> onde
          são encontradas mais informações de forma detalhada (acesse{' '}
          <a href="/secretaria_projetos.pdf" target="_blank">
            {' '}
            <b>AQUI</b>
          </a>
          ).
        </p>
      </Alert>

      <S.Form>
        <Grid container spacing={1}>
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

          <Grid
            item
            xs={12}
            lg={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <S.InputLarge
              id="course"
              name="course"
              label="Curso desejado (para o vestibular)"
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
