import { memo, FC, ReactNode } from 'react';
import * as S from './styles';

interface AlertProps {
  kind: 'danger' | 'warning';
  children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({ kind, children }) => {
  return (
    <S.Alert kind={kind} role="alert">
      {children}
    </S.Alert>
  );
};

export default memo(Alert);
