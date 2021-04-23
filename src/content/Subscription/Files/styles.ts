import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const Form = styled.form`
  margin: 2rem 0;
`;

export const ButtonContainer = styled.div`
  margin: 2rem 0 0.5rem;
`;

export const FileField = styled.div`
  margin-top: 1rem;

  p {
    font-size: 110%;
    color: ${color.green.dark};
    font-weight: bold;
  }
`;
