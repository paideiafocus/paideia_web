import { memo } from 'react';

import Page from '@/components/Page';
import Banner from './Banner';
import Depositions from './Depositions';
import SelectiveProcess from './SelectiveProcess';

const Home: React.FC = () => {
  return (
    <Page isMain>
      <Banner />

      <SelectiveProcess />

      <Depositions />
    </Page>
  );
};

export default memo(Home);
