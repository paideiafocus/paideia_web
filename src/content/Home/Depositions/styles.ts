import styled, { css } from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const DepositionsContainer = styled.section`
  h2 {
    text-transform: uppercase;
    text-align: center;
  }
`;

export const DepositionsContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 46rem) {
    flex-direction: row;
  }
`;

interface IDepositionsCardProps {
  borderDirection: 'right' | 'left';
}

export const DepositionsCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  ${(p: IDepositionsCardProps) =>
    p.borderDirection === 'right' &&
    css`
      border-right: 0.2rem solid ${color.pink.dark};
    `}

  ${(p: IDepositionsCardProps) =>
    p.borderDirection === 'left' &&
    css`
      border-left: 0.2rem solid ${color.pink.dark};
    `}

  strong {
    text-align: end;
  }
`;

export const SeeMoreDepositions = styled.div`
  margin: 2.2rem 0;
  text-align: center;

  button {
    padding: 0.7rem;
    cursor: pointer;
  }
`;
