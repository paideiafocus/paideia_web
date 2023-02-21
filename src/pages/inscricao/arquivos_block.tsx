import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Files from '../../content/Subscription/Files';

const FilesPage: FC = () => (
  <PrivatePage>
    <Files />
  </PrivatePage>
);

export default memo(FilesPage);
