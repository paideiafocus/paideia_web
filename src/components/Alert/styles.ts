import styled from 'styled-components';
import theme from '@/config/theme';

interface AlertProps {
  kind: 'danger' | 'warning' | 'paideia';
}

const {
  color: { red, yellow },
} = theme;

const alertColors = {
  danger: {
    background: red.light,
    text: red.dark,
    border: red.lighter,
  },
  warning: {
    background: yellow.light,
    text: yellow.dark,
    border: yellow.lighter,
  },
  paideia: {
    background: '#dd9bc7',
    text: '#000',
    border: red.lighter,
  },
};

export const Alert = styled.div`
  background-color: ${(p: AlertProps) => alertColors[p.kind].background};
  color: ${(p: AlertProps) => alertColors[p.kind].text};
  border-color: ${(p: AlertProps) => alertColors[p.kind].border};
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;
