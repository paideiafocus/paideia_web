import { TextField } from '@material-ui/core';
import styled from 'styled-components';
// import theme from '@/config/theme';

// const { color } = theme;

export const UpdatePasswordSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  min-height: 50vh;

  /* @media (min-width: 46rem) {
  } */
`;

export const TextFieldCustom = styled(TextField)`
  width: 100%;
`;

export const Submit = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  margin-top: 1.5rem;
  font-weight: bold;
`;
