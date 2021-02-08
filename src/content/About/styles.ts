import styled from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export const AboutContainer = styled.section`
  p {
    text-justify: auto;
  }
  .separa {
    border-top: 4px ${color.green.normal} solid;
    margin-bottom: 13px;
    margin-top: 5px;
  }
  h6 {
    color: ${color.pink.dark};
    text-align: center;
  }
  h2 {
    text-align: center;
  }
`;
