import { memo, useCallback, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
  {
    pdfLink: 'edital_2_2023.pdf',
    imageSrc: 'edital.png',
    title: 'Edital nº 2/2023',
  },
];

const cardsTransparence = [
  {
    pdfLink: 'edital_1_2023.pdf',
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
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [deviceSize, setDeviceSize] = useState(0);

  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  useEffect(() => {
    if (window) {
      setDeviceSize(window.innerWidth);
    }
  }, []);

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            style={{
              position: 'absolute',
              right: 8,
              top: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  return (
    <Page isMain>
      <Banner />

      <Dialog
        maxWidth="lg"
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseModal}
        />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img
              src={
                deviceSize >= 995
                  ? 'proximas_inscricoes_desktop.png'
                  : 'proximas_inscricoes_mobile.png'
              }
              alt="próximas inscrições"
              style={{
                width: '100%',
                height: deviceSize >= 995 ? '80vh' : 'auto',
              }}
            />
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
