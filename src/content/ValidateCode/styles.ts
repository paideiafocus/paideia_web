import styled from 'styled-components';

export const Form = styled.form`
  legend {
    margin: 2rem 0;
  }

  @media (min-width: 46rem) {
    min-height: 56vh;
  }
`;

export const GroupField = styled.div`
  margin: 1rem 0 3rem;

  div {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 1rem;
  color: red;
  font-weight: bold;
`;

export const Submit = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
