import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Simulado from '../content/Simulado';

const SimuladoPage: FC = () => (
  <PrivatePage>
    <Simulado />
  </PrivatePage>
);

export default memo(SimuladoPage);
