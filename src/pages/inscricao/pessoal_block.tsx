import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Personal from '../../content/Subscription/Personal';

const PersonalPage: FC = () => (
  <PrivatePage>
    <Personal />
  </PrivatePage>
);

export default memo(PersonalPage);
