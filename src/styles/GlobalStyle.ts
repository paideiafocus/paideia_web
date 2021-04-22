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
    font-size: 2.5rem;
    font-weight: 500;
    color: ${color.pink.dark};
  }

  h2 {
    margin-top: 22px;
    margin-bottom: 18px;
    color: ${color.pink.dark};
    font-size: 2.2rem;
    font-weight: 500;
  }

  h4 {
    margin-top: 26px;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  a {
    color: ${color.green.dark};
  }

  p{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;
