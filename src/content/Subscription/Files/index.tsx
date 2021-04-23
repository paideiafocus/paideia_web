import { memo, useCallback, useState } from 'react';
import Page from '@/components/Page';

import Alert from '@/components/Alert';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import * as S from './styles';

const FORM = {
  RG: { value: '', error: '' },
  CPF: { value: '', error: '' },
  HISTORIC: { value: '', error: '' },
  CITIZEN: { value: '', error: '' },
  ADDRESS: { value: '', error: '' },
  SCHOLARSHIP: { value: '', error: '' },
  PHOTO: { value: '', error: '' },
  EJA: { value: '', error: '' }, // TERM
};

const Files = () => {
  const [files, setFiles] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleChangeField = useCallback(
    event => {
      // const { value, name } = event.currentTarget;
      // const error = !value ? 'campo é obrigatório' : '';
      // const newPersonal = {
      //   ...files,
      //   [name]: {
      //     value,
      //     error,
      //   },
      // };
      // setFiles(() => newPersonal);
      // const formError = Object.keys(newPersonal).some(
      //   key => !newPersonal[key].value
      // );
      // setIsFormError(() => formError);
      // console.log('formError');
      // console.log(formError);
    },
    [files]
  );

  return (
    <Page align="center">
      <h2>ARQUIVOS (DOCUMENTOS)</h2>

      <Alert kind="warning">
        IMPORTANTE! Verifique a qualidade da imagem que você está enviando e
        garanta que estarão claras para visualização, para que não haja
        problemas na verificação de sua documentação.
        <br />
        Os arquivos deverão estar nos seguintes formatos: .jpg e/ou .png.
      </Alert>

      <Alert kind="warning">
        SOBRE O TERMO DE RESPONSABILIDADE: baixe o termo clicando
        <a href="/assets/pdf/termo_responsabilidade.pdf" target="_blank">
          {' '}
          AQUI
        </a>
        , realize a assinatura manual e depois a digitalização do documento, ou
        então realize a assinatura eletrônica do documento, e envie o arquivo
        nessa etapa de inscrição.
        <b>
          É de extrema importância que as assinaturas e o documento estejam
          legíveis!
        </b>
      </Alert>

      <Alert kind="danger">
        ATENÇÃO! Caso não conseguir enviar os arquivos tente comprimi-los
        através do site
        <a
          href="https://www.websiteplanet.com/pt-br/webtools/imagecompressor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          https://www.websiteplanet.com/pt-br/webtools/imagecompressor/
        </a>
        <br />
        CASO O ERRO CONTINUE ENTRE EM CONTATO URGENTE
        contato@associacaopaideia.org.br
        <br />
        <b>TAMANHO MÁXIMO POR ARQUIVO: 1024kb.</b>
      </Alert>

      <S.Form>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>RG:</p>
              <TextField
                id="RG"
                name="RG"
                value={files.RG.value}
                helperText={files.RG.error}
                error={Boolean(files.RG.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>CPF:</p>
              <TextField
                id="CPF"
                name="CPF"
                value={files.CPF.value}
                helperText={files.CPF.error}
                error={Boolean(files.CPF.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Histórico escolar ou declaração de matrícula:</p>
              <TextField
                id="HISTORIC"
                name="HISTORIC"
                value={files.HISTORIC.value}
                helperText={files.HISTORIC.error}
                error={Boolean(files.HISTORIC.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Cartão cidadão:</p>
              <TextField
                id="CITIZEN"
                name="CITIZEN"
                value={files.CITIZEN.value}
                helperText={files.CITIZEN.error}
                error={Boolean(files.CITIZEN.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Comprovante de endereço:</p>
              <TextField
                id="ADDRESS"
                name="ADDRESS"
                value={files.ADDRESS.value}
                helperText={files.ADDRESS.error}
                error={Boolean(files.ADDRESS.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Comprovante de bolsa (caso bolsista):</p>
              <TextField
                id="SCHOLARSHIP"
                name="SCHOLARSHIP"
                value={files.SCHOLARSHIP.value}
                helperText={files.SCHOLARSHIP.error}
                error={Boolean(files.SCHOLARSHIP.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Foto (que possibilite fácil identificação do aluno):</p>
              <TextField
                id="PHOTO"
                name="PHOTO"
                value={files.PHOTO.value}
                helperText={files.PHOTO.error}
                error={Boolean(files.PHOTO.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>
                Termo de responsabilidade:
                <a
                  href="/assets/pdf/termo_responsabilidade.pdf"
                  target="_blank"
                >
                  {' '}
                  BAIXAR TERMO
                </a>
              </p>
              <TextField
                id="EJA"
                name="EJA"
                value={files.EJA.value}
                helperText={files.EJA.error}
                error={Boolean(files.EJA.error)}
                onChange={handleChangeField}
                onBlur={handleChangeField}
                type="file"
              />
            </S.FileField>
          </Grid>
        </Grid>

        <S.ButtonContainer>
          <Button variant="contained" color="secondary" disabled={isFormError}>
            Salvar arquivos
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Files);
