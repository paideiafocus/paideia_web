import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Subscribers from '../../content/Admin/Subscribers';

const SubscribersPage: FC = () => (
  <PrivatePage>
    <Subscribers />
  </PrivatePage>
);

export default memo(SubscribersPage);
