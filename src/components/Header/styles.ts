import styled from 'styled-components';
import { BottomNavigation } from '@material-ui/core';

import theme from '@/config/theme';

const { color } = theme;

export const HeaderNav = styled.nav`
  margin-bottom: 1.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem 0;

  img {
    width: 86%;

    @media (min-width: 46rem) {
      width: 60%;
    }
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 46rem) {
    display: block;
  }
`;

export const NavigationContainer = styled(BottomNavigation)`
  background-color: ${color.green.normal} !important;
  border-radius: 4px;
  box-shadow: 0.5px 0.5px;

  span {
    font-size: 1rem !important;
    font-weight: bold;
  }
`;

export const MobileMenu = styled.div`
  display: block;
  background-color: ${color.green.normal};

  @media (min-width: 46rem) {
    display: none;
  }
`;
