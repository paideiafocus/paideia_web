import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Simulado from '../content/Simulado';

const SimuladoPage: FC = () => (
  <PrivatePage>
    <Simuladoescondido />
  </PrivatePage>
);

export default memo(SimuladoPage);
