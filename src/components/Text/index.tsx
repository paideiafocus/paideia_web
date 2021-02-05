import { css } from 'styled-components';

import * as S from './styles';

interface TextProps {
  as?: any;
  isCenter?: boolean;
  color?: string;
}

const Text: React.FC<TextProps> = ({ as, children, isCenter, color }) => {
  const customTag = as || 'p';

  return (
    <S.TextTag as={customTag} isCenter={isCenter} color={color}>
      {children}
    </S.TextTag>
  );

  // return <TextTag>{children}</TextTag>;
};

export default Text;
