import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import SubscriberDetails from '../../../content/Admin/SubscriberDetails';

const SubscriberDetailsPage: FC = () => (
  <PrivatePage>
    <SubscriberDetails />
  </PrivatePage>
);

export default memo(SubscriberDetailsPage);
