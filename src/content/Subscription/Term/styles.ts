import styled from 'styled-components';

export const TermList = styled.div`
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 1.5rem 0;
  padding: 0.5rem;

  ol {
    padding: 0.5rem 2rem 1rem;

    li {
      font-weight: bold;
      margin-top: 14px;
    }
  }
`;

export const TermItem = styled.div`
  font-weight: initial;
  text-align: justify;
`;

export const Confirm = styled.div`
  margin-top: 16px;
  padding: 8px;

  input {
    margin-right: 0.25rem;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
