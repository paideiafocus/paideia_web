import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const DepositionsContent = styled.div`
  /* display: flex;
  flex-direction: column;

  @media (min-width: 46rem) {
    flex-direction: row;
  } */
`;

interface CardDepositionProps {
  lastCard?: boolean;
}

const borderStyled = `1px ${color.pink.dark} solid`;

export const CardDeposition = styled.div<CardDepositionProps>`
  margin-bottom: ${p => (p.lastCard ? '6rem' : '2rem')};
  border-bottom: ${p => (p.lastCard ? 'none' : borderStyled)};

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 0;

    @media (min-width: 46rem) {
      font-size: 1.75rem;
    }
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;

    b {
      color: ${color.green.dark};
    }
  }

  img {
    float: left;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;

    @media (min-width: 46rem) {
      width: initial;
      margin-bottom: 0;
    }
  }
`;
