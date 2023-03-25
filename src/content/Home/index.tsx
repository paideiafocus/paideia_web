import { memo, useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Page from '@/components/Page';
import Banner from './Banner';
import Depositions from './Depositions';
import InformationArea from './InformationArea';

const cardsSelectiveProcess = [
  {
    pdfLink: 'secretaria_projetos.pdf',
    imageSrc: 'edital.png',
    title: 'Cartão Cidadão',
  },
  {
    pdfLink: 'manual_inscricao.pdf',
    imageSrc: 'info_basica.png',
    title: 'Tutorial',
  },
  {
    pdfLink: 'requerimento.pdf',
    imageSrc: 'requerimento.png',
    title: 'Requerimento',
  },
  {
    imageSrc: 'perguntas_frequentes.png',
    title: 'Perguntas frequentes',
  },
];

const cardsTransparence = [
  {
    pdfLink: 'edital.pdf',
    imageSrc: 'edital.png',
    title: 'Edital nº 1/2023',
  },
  {
    pdfLink: 'sorvetada.pdf',
    imageSrc: 'edital.png',
    title: '3ª Sorvetada',
  },
];

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  return (
    <Page isMain>
      <Banner />

      <Dialog
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ minWidth: '100%' }}>
              <div>
                <img
                  alt="inscrições em breve"
                  src="inscricoes.jpeg"
                  style={{ width: '100%' }}
                />

                <p>
                  Nossas inscrições estão perto de começar, e você não quer
                  ficar de fora, né? Fique atento(a) em nosso site e redes
                  oficiais: @focuscursinho
                </p>
                <p>
                  Até logo!
                  <span role="img" aria-label="chapéu formando">
                    🎓
                  </span>
                </p>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <InformationArea
        titleArea="Processo Seletivo"
        cards={cardsSelectiveProcess}
      />

      <InformationArea titleArea="Transparência" cards={cardsTransparence} />

      <Depositions />
    </Page>
  );
};

export default memo(Home);
