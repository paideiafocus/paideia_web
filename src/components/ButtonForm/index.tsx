import { memo, MouseEvent, ReactNode } from 'react';
import ButtonMaterial from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import * as S from './styles';

interface IButtonFormProps {
  disabled?: boolean;
  onClick(e: MouseEvent<HTMLElement>): void;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

const ButtonForm: React.FC<IButtonFormProps> = ({
  disabled,
  onClick,
  loading,
  type,
  children,
}) => {
  return (
    <ButtonMaterial
      variant="contained"
      color="primary"
      disabled={disabled || false}
      onClick={onClick}
      type={type || 'button'}
    >
      <S.Content>
        {!loading && children}
        {loading && <CircularProgress color="secondary" />}
      </S.Content>
    </ButtonMaterial>
  );
};

export default memo(ButtonForm);
