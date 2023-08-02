import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Socioeconomic from '../../content/Subscription/Socioeconomic';

const SocioeconomicPage: FC = () => (
  <PrivatePage>
    <Socioeconomic />
  </PrivatePage>
);

export default memo(SocioeconomicPage);
