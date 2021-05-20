import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

interface IMessageProps {
  isBold: boolean;
  top: string | number;
  type?: 'danger' | 'success';
}

export const Message = styled.span<IMessageProps>`
  margin-top: ${p => p.top};
  color: ${p => (p.type === 'danger' ? color.red.normal : color.green.normal)};
  font-weight: ${p => (p.isBold ? 'bold' : 'initial')};
`;
