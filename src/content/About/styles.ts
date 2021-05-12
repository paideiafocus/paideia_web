import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const AboutContainer = styled.section`
  margin-bottom: 2rem;

  p {
    text-justify: auto;
    text-align: justify;
  }

  h6 {
    color: ${color.pink.dark};
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  h2 {
    text-align: center;
  }
`;

export const Line = styled.div`
  border-top: 4px ${color.green.normal} solid;
  margin-bottom: 13px;
  margin-top: 5px;
`;

export const TextBlock = styled.p`
  margin-bottom: 1rem;
`;

export const ServiceColumn = styled.div`
  padding: 0 0.5rem;

  p {
    text-align: left;
  }
`;
