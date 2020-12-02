import styled, { css } from 'styled-components';

export const DepositionsContainer = styled.section``;

export const DepositionsContent = styled.div`
  display: flex;
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
      border-right: 1px solid;
    `}

  ${(p: IDepositionsCardProps) =>
    p.borderDirection === 'left' &&
    css`
      border-left: 1px solid;
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
