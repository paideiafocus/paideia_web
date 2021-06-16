import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import GabaritoSimples from '../content/GabaritoSimples';

const GabaritoSimplesPage: FC = () => (
  <PrivatePage>
    <GabaritoSimples />
  </PrivatePage>
);

export default memo(GabaritoSimplesPage);
