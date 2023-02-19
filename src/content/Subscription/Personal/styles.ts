import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  margin: 2rem 0 0.5rem;
`;

export const InputLarge = styled(TextField)`
  width: 90%;

  @media (min-width: 46rem) {
    width: 30%;
  }
`;
