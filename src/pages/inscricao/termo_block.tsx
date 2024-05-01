import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Term from '../../content/Subscription/Term';

const TermPage: FC = () => (
  <PrivatePage>
    <Term />
  </PrivatePage>
);

export default memo(TermPage);
