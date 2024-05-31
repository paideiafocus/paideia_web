import styled from 'styled-components';
// import theme from '@/config/theme';

// const { color } = theme;

export const InfosInitialAlert = styled.div`
  line-height: 1.5;
  ol {
    text-align: left;
  }
`;

export const TextContainer = styled.div`
  img {
    width: 100% !important;
  }
`;

export const Term = styled.div`
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  padding: 1rem 3rem;

  ol {
    /* padding-top: 7px;
    padding-bottom: 14px; */

    li {
      text-align: left;
      font-weight: bold;
      margin-top: 1rem;

      div {
        font-weight: initial;
      }
    }
  }
`;

export const Form = styled.form`
  table {
    width: 100%;
  }

  td,
  th {
    border: 1px solid #000;
    padding: 0.5rem;
    text-align: justify;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24rem;
`;
