import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (min-width: 46rem) {
    min-height: 56vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  @media (min-width: 46rem) {
    width: 50%;
  }
`;

export const GroupField = styled.div`
  margin-bottom: 2rem;

  div {
    width: 100%;
  }
`;

export const ForgotPassword = styled.div`
  margin: 1rem 0 3rem;
  text-align: left;

  button {
    color: ${color.green.dark};
  }
`;

export const Submit = styled.div`
  margin-bottom: 2rem;
`;
