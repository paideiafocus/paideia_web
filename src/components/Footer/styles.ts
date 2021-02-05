import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const Footer = styled.footer`
  background-color: ${color.green.normal};
  padding: 1rem 1.5rem;
  color: #fff;
  border: 1px solid #dedede;
  border-radius: 0.2rem;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
  overflow: hidden;
  bottom: 0;
`;
