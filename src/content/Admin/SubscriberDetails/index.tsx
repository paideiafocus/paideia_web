/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useEffect, useMemo, useState } from 'react';
import Page from '@/components/Page';
import WarningMessage from '@/components/WarningMessage';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import statusFormat from '@/utils/statusFormat';
import filesNames from '@/utils/filesNames';
import useFiles from './useFiles';
import useSubscribers from '../useSubscribers';
import * as S from './styles';

import questionsOneAnswer1 from '../../Subscription/Socioeconomic/questionsOneAnswer1.json';
import questionsOneAnswer2 from '../../Subscription/Socioeconomic/questionsOneAnswer2.json';
import questionsMultipleAnswer from '../../Subscription/Socioeconomic/questionsMultipleAnswer.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ backgroundColor: '#E0E0E0' }}
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: '3em',
  },
}));

const SubscriberDetails = () => {
  const { query } = useRouter();
  const {
    getFiles,
    filesData,
    loading: loadingFiles,
    feedbackError: feedbackErrorFiles,
  } = useFiles();
  const {
    getSubscribers,
    subscribersData,
    loading: loadingSubscriber,
    feedbackError: feedbackErrorSubscriber,
  } = useSubscribers();

  useEffect(() => {
    if (query.userId) {
      getSubscribers(query.userId);
    }
  }, [getSubscribers, query.userId]);

  useEffect(() => {
    if (query.userId) {
      getFiles(query.userId);
    }
  }, [getFiles, query.userId]);

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const photo = useMemo(
    () => (filesData ? filesData.find(file => file.type === 'PHOTO') : ''),
    [filesData]
  );

  return (
    <Page>
      {loadingSubscriber && (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress color="secondary" />
        </div>
      )}

      {!loadingSubscriber && feedbackErrorSubscriber && (
        <WarningMessage>{feedbackErrorSubscriber}</WarningMessage>
      )}

      {!loadingSubscriber && !feedbackErrorSubscriber && subscribersData && (
        <>
          <h1>{`${subscribersData[0].name} ${subscribersData[0].lastname}`}</h1>

          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Geral" {...a11yProps(0)} />
                <Tab label="Socioeconomico" {...a11yProps(1)} />
                <Tab label="Arquivos" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '50%' }}>
                  <p>
                    <b>E-mail: </b>
                    {subscribersData[0].email}
                  </p>
                  <p>
                    <b>Status: </b>
                    {statusFormat[subscribersData[0].status]}
                  </p>
                  <p>
                    <b>Cartão Cidadão: </b>
                    {subscribersData[0].citizen}
                  </p>
                  <p>
                    <b>CPF: </b>
                    {subscribersData[0].cpf}
                  </p>
                  <p>
                    <b>Curso desejado: </b>
                    {subscribersData[0].course}
                  </p>
                  <p>
                    <b>Data nascimento: </b>
                    {subscribersData[0].birth_date}
                  </p>
                  <p>
                    <b>RG: </b>
                    {subscribersData[0].rg}
                  </p>
                  <p>
                    <b>Telefone: </b>
                    {subscribersData[0].phone1}
                  </p>
                  <p>
                    <b>Possui interesse no transporte escolar?: </b>
                    {subscribersData[0].school_bus}
                  </p>
                </div>

                <div style={{ width: '50%' }}>
                  {loadingFiles && <CircularProgress color="secondary" />}

                  {!loadingFiles && !feedbackErrorFiles && photo && (
                    <img
                      src={photo.file}
                      alt={photo.type}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {questionsOneAnswer1.map((question, index) => (
                <S.CardAnswer key={question.fieldName}>
                  <p>
                    <b>{`${index + 1}) ${question.text}`}</b>
                  </p>
                  <p>
                    <b>R: </b>
                    {subscribersData[0][question.fieldName]}
                  </p>
                </S.CardAnswer>
              ))}

              {questionsOneAnswer2.map((question, index) => (
                <S.CardAnswer key={question.fieldName}>
                  <p>
                    <b>
                      {`${index + questionsOneAnswer1.length + 1})
                      ${question.text}`}
                    </b>
                  </p>
                  <p>
                    <b>R: </b>
                    {subscribersData[0][question.fieldName]}
                  </p>
                </S.CardAnswer>
              ))}

              {questionsMultipleAnswer.map((question, index) => (
                <S.CardAnswer key={question.text}>
                  <p>
                    <b>
                      {`
                      ${index +
                        questionsOneAnswer2.length +
                        questionsOneAnswer1.length +
                        1
                        }) ${question.text}`}
                    </b>
                  </p>
                  {question.answers.map(answer => (
                    <>
                      {subscribersData[0][answer.fieldName] ? (
                        <p>{answer.label}</p>
                      ) : (
                        <div />
                      )}
                    </>
                  ))}
                </S.CardAnswer>
              ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {loadingFiles && (
                <div style={{ textAlign: 'center' }}>
                  <CircularProgress color="secondary" />
                </div>
              )}

              {!loadingFiles &&
                !feedbackErrorFiles &&
                filesData &&
                filesData.map(file => (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong>{filesNames[file.type]}:</strong>
                    {file.file ? (
                      <img
                        src={file.file}
                        alt={file.type}
                        style={{ width: '100%', marginTop: '0.5rem' }}
                      />
                    ) : (
                      <p>Não informado</p>
                    )}
                  </div>
                ))}
            </TabPanel>
          </div>
        </>
      )}
    </Page>
  );
};

export default memo(SubscriberDetails);
