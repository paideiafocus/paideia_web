import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import SimuladoCadastro from '../../content/Admin/SimuladoCadastro';

const SimuladoCadastroPage: FC = () => (
  <PrivatePage>
    <SimuladoCadastro />
  </PrivatePage>
);

export default memo(SimuladoCadastroPage);
