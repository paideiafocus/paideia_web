import { memo, useCallback, useEffect, useState } from 'react';
import Page from '@/components/Page';

import Alert from '@/components/Alert';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
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

interface IFile extends HTMLElement {
  files?: Blob[];
}

const Files = () => {
  const router = useRouter();
  const [files, setFiles] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const { createFiles, loading, feedbackError } = useFile(); // CONTINUE...

  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/socioeconomico');
  }, [router]);

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

        <S.ButtonContainer>
          <Button
            variant="contained"
            color="secondary"
            // disabled={isFormError}
            onClick={handleNavigation}
          >
            Salvar arquivos
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Files);
