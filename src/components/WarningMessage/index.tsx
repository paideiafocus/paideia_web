import { FC, memo, ReactNode } from 'react';
import * as S from './styles';

interface IWarningMessage {
  isBold?: boolean;
  top?: string;
  type?: 'danger' | 'success';
  children: ReactNode;
}

const WarningMessage: FC<IWarningMessage> = ({
  isBold,
  top,
  type,
  children,
}) => (
  <S.Message isBold={isBold || false} top={top || 0} type={type || 'danger'}>
    {children}
  </S.Message>
);

export default memo(WarningMessage);
