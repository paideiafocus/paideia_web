/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Page from '@/components/Page';
import decode from 'jwt-decode';

import Alert from '@/components/Alert';
import {
  Grid,
  TextField,
  Backdrop,
  CircularProgress,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import ButtonForm from '@/components/ButtonForm';
import WarningMessage from '@/components/WarningMessage';
import * as S from './styles';
import useFile from './useFile';
import useVerifyFiles from './useVerifyFiles';

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
  value?: string;
}

const Files = () => {
  const router = useRouter();
  const [files, setFiles] = useState(FORM);
  const [fieldErrors, setFieldErrors] = useState([]);
  const {
    createFiles,
    loading: createFileIsLoading,
    feedbackError,
  } = useFile();
  const {
    filesIsVerified,
    verifyFiles,
    loading: searchFileIsLoading,
  } = useVerifyFiles();
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

  useEffect(() => {
    verifyFiles();
  }, [verifyFiles]);

  const convertBase64 = useCallback(event => {
    const { name } = event.target;
    const filesSelected: IFile = document.getElementById(name);

    const validFilesExtensions = ['png', 'jpg', 'jpeg', 'PNG', 'JPG', 'JPEG'];
    const isValidFile = validFilesExtensions.every(
      extension => !filesSelected.files[0].type.includes(extension)
    );

    if (isValidFile) {
      filesSelected.value = '';
      // eslint-disable-next-line no-alert
      alert('Arquivo inválido! Utilize apenas imagens (jpg e png)');
    }

    // tamMaximo old: number = 1759374 byte = 1759kb
    // max = 1024 kb (kilobyte) = 1024000 byte

    if (filesSelected.files[0].size > 1024000) {
      filesSelected.value = '';
      // eslint-disable-next-line no-alert
      alert('Arquivo inválido! Utilize imagens menores que 1024kb');
    }

    if (filesSelected.files.length > 0 && !isValidFile) {
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

  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  const handleConfirmModal = useCallback(() => handleNavigation(), [
    handleNavigation,
  ]);

  if (searchFileIsLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Page align="center">
      <h2>ARQUIVOS (DOCUMENTOS)</h2>

      <Alert kind="paideia">
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
              <b>AQUI</b>
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
              <b>
                https://www.websiteplanet.com/pt-br/webtools/imagecompressor/
              </b>
            </a>
          </li>

          <li>
            Caso persista o erro entre em contato conosco:{' '}
            <b>contato@associacaopaideia.org.br</b>
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
            <div key={erro}>
              <WarningMessage key={erro}>{erro}</WarningMessage>
              <br />
            </div>
          ))}

        {feedbackError && <WarningMessage>{feedbackError}</WarningMessage>}

        <S.ButtonContainer>
          <ButtonForm loading={createFileIsLoading} onClick={handleCreateFiles}>
            Salvar arquivos
          </ButtonForm>
        </S.ButtonContainer>
      </S.Form>

      {filesIsVerified && (
        <div>
          <Dialog
            open={modalIsOpen}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Seus documentos ainda estão no sistema
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Foi identificado que você já possui os arquivos dos documentos
                em seu cadastro, deseja atualiza-los?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal}>
                Sim, desejo atualizar meus documentos
              </Button>
              <Button onClick={handleConfirmModal} autoFocus>
                Não, meus documentos já estão corretos
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </Page>
  );
};

export default memo(Files);
