import React from 'react';

import Page from '@/components/Page';
import Banner from './Banner';
import Depositions from './Depositions';
import SelectiveProcess from './SelectiveProcess';

const Home: React.FC = () => {
  return (
    <Page>
      <h1>home page</h1>

      <Banner />

      <SelectiveProcess />

      <Depositions />
    </Page>
  );
};

export default Home;
