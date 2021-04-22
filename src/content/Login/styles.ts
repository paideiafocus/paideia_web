import styled from 'styled-components';

export const LoginSection = styled.section`
  display: flex;
  justify-content: center;
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
  margin-bottom: 0.75rem;

  div {
    width: 100%;
  }
`;

export const ForgotPassword = styled.div`
  margin: 0.25rem 0 1rem;
  text-align: left;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Submit = styled.div`
  margin-bottom: 2rem;
`;
