/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useCallback, useEffect, useState } from 'react';
import Page from '@/components/Page';

import Alert from '@/components/Alert';
import { Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import ButtonForm from '@/components/ButtonForm';
import WarningMessage from '@/components/WarningMessage';
import * as S from './styles';
import useFile from './useFile';

const FORM = {
  RG: { value: '' },
  CPF: { value: '' },
  HISTORIC: { value: '' },
  CITIZEN: { value: '' },
  ADDRESS: { value: '' },
  SCHOLARSHIP: { value: '' },
  PHOTO: { value: '' },
  EJA: { value: '' }, // TERM
};

const errorFieldMessages = {
  RG: 'Campo RG é obrigatório',
  CPF: 'Campo CPF é obrigatório',
  HISTORIC: 'Campo Histórico escolar é obrigatório',
  CITIZEN: 'Campo Cartão cidadão é obrigatório',
  ADDRESS: 'Campo Comprovante de endereço é obrigatório',
  PHOTO: 'Campo Foto é obrigatório',
  EJA: 'Campo Termo de responsabilidade é obrigatório',
};

interface IFile extends HTMLElement {
  files?: Blob[];
}

const Files = () => {
  const router = useRouter();
  const [files, setFiles] = useState(FORM);
  const [fieldErrors, setFieldErrors] = useState([]);
  const { createFiles, loading, feedbackError } = useFile();

  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

  const convertBase64 = useCallback(event => {
    const { name } = event.target;
    const filesSelected: IFile = document.getElementById(name);

    if (filesSelected.files.length > 0) {
      const fileToLoad = filesSelected.files[0];
      const fileReader = new FileReader();

      fileReader.onload = fileLoadedEvent => {
        const srcData = fileLoadedEvent.target.result; // <--- data: base64
        setFiles(oldFiles => ({ ...oldFiles, [name]: { value: srcData } }));
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  }, []);

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/socioeconomico');
  }, [router]);

  const handleCreateFiles = useCallback(() => {
    const requiredFields = [
      'RG',
      'CPF',
      'HISTORIC',
      'CITIZEN',
      'ADDRESS',
      'PHOTO',
      'EJA',
    ];

    const errors = requiredFields.reduce((acc, curr) => {
      if (!files[curr].value) {
        return [...acc, errorFieldMessages[curr]];
      }

      return acc;
    }, []);

    setFieldErrors(errors);

    if (errors.length === 0) {
      createFiles(files, handleNavigation);
    }
  }, [createFiles, files, handleNavigation]);

  return (
    <Page align="center">
      <h2>ARQUIVOS (DOCUMENTOS)</h2>

      <Alert kind="danger">
        <S.InfosList>
          <li>
            Para que a documentação seja transferida para o nosso banco de dados
            deverá, <b>obrigatoriamente</b>, estar nos seguintes{' '}
            <b>formatos de arquivo</b>:<b> jpg</b> ou<b> png</b>.
          </li>

          <li>
            <b>
              <u>ATENÇÃO</u>
            </b>
            : Para que a <b>documentação</b> possa ser <b>validada</b> as{' '}
            <b>imagens enviadas deverão ser claras</b> e{' '}
            <b>nítidas para a perfeita visualização</b>.
          </li>

          <li>
            <b>
              <u>TERMO DE RESPONSABILIDADE</u>
            </b>
            : baixe o termo clicando
            <a href="/assets/pdf/termo_responsabilidade.pdf" target="_blank">
              {' '}
              AQUI
            </a>
            . Leia atentamente, assine, digitalize o documento e reenvie.
          </li>

          <li>
            No caso do candidato não conseguir enviar os arquivos por conta de
            seu tamanho, sugerimos que sejam comprimidos através do site
            <a
              href="https://www.websiteplanet.com/pt-br/webtools/imagecompressor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              https://www.websiteplanet.com/pt-br/webtools/imagecompressor/
            </a>
          </li>

          <li>
            Caso persista o erro entre em contato conosco:
            contato@associacaopaideia.org.br
          </li>

          <li>
            <b>TAMANHO MÁXIMO POR ARQUIVO: 1024kb.</b>
          </li>
        </S.InfosList>
      </Alert>

      <S.Form>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>RG:</p>
              <TextField
                id="RG"
                name="RG"
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>CPF:</p>
              <TextField
                id="CPF"
                name="CPF"
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Histórico escolar ou declaração de matrícula:</p>
              <TextField
                id="HISTORIC"
                name="HISTORIC"
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Cartão cidadão:</p>
              <TextField
                id="CITIZEN"
                name="CITIZEN"
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Comprovante de endereço:</p>
              <TextField
                id="ADDRESS"
                name="ADDRESS"
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Comprovante de bolsa (caso bolsista):</p>
              <TextField
                id="SCHOLARSHIP"
                name="SCHOLARSHIP"
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>

          <Grid item xs={12} lg={6}>
            <S.FileField>
              <p>Foto (que possibilite fácil identificação do aluno):</p>
              <TextField
                id="PHOTO"
                name="PHOTO"
                type="file"
                onChange={convertBase64}
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
                type="file"
                onChange={convertBase64}
              />
            </S.FileField>
          </Grid>
        </Grid>

        <br />

        {fieldErrors.length > 0 &&
          fieldErrors.map(erro => (
            <>
              <WarningMessage key={erro}>{erro}</WarningMessage>
              <br />
            </>
          ))}

        {feedbackError && <WarningMessage>{feedbackError}</WarningMessage>}

        <S.ButtonContainer>
          <ButtonForm loading={loading} onClick={handleCreateFiles}>
            Salvar arquivos
          </ButtonForm>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Files);
