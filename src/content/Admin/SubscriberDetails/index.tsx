import { memo, useEffect, useState } from 'react';
import Page from '@/components/Page';
import WarningMessage from '@/components/WarningMessage';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useFiles from './useFiles';
import useSubscribers from '../useSubscribers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
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

  console.log('query');
  console.log(query.userId);

  useEffect(() => {
    getSubscribers(query.userId);
    getFiles(query.userId);
  }, [getFiles, getSubscribers, query.userId]);

  console.log('filesData');
  console.log(filesData);
  console.log('subscribersData');
  console.log(subscribersData);

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              personal
            </TabPanel>
            <TabPanel value={value} index={1}>
              socioeconomic
            </TabPanel>
            <TabPanel value={value} index={2}>
              files
            </TabPanel>
          </div>
        </>
      )}
    </Page>
  );
};

export default memo(SubscriberDetails);
