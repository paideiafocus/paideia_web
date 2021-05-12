import styled from 'styled-components';

export const FaceContainer = styled.div`
  margin-bottom: 2rem;

  span {
    vertical-align: bottom;
    width: 340px;
    height: 500px;

    iframe {
      border: none;
      visibility: visible;
      width: 100%;
      height: 500px;

      @media (min-width: 46rem) {
        width: 340px;
      }
    }
  }
`;

export const NewsTitle = styled.div`
  margin: 1.5rem 0;

  h5 {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
