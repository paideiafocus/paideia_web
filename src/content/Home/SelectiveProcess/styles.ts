import styled from 'styled-components';

export const SelectiveProcessContainer = styled.section`
  background: #eee;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 0.18rem 0.18rem #cccccc;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const OptionCard = styled.div`
  text-transform: uppercase;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const NextLink = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  p {
    margin-top: 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
