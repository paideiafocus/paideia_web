import { createGlobalStyle } from 'styled-components';
import theme from '@/config/theme';

const { color } = theme;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
    color: #121214;
    font-family: Menco light, Arthura Thin, Arial, Helvetica, sans-serif;
  }

  div h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: ${color.pink.dark};
  }

  h2 {
    margin-top: 22px;
    margin-bottom: 18px;
    color: ${color.pink.dark};
    font-size: 2.2rem;
    font-weight: 500;
  }

  a {
    color: ${color.green.dark};
  }
`;
