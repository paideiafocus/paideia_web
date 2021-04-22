import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 86%;
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 46rem) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: block;

  @media (min-width: 46rem) {
    display: none;
  }
`;
