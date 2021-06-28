import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import SimuladoResultado from '../../content/Admin/SimuladoResultado';

const SimuladoResultadoPage: FC = () => (
  <PrivatePage>
    <SimuladoResultado />
  </PrivatePage>
);

export default memo(SimuladoResultadoPage);
