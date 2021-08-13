import { FC, memo } from 'react';
import PrivatePage from '@/components/PrivatePage';
import Simulado from '../content/simulado';

const SimuladoPage: FC = () => (
  <PrivatePage>
    <Simulado />
  </PrivatePage>
);

export default memo(SimuladoPage);
