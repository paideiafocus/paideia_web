import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import GlobalStyle from '../styles/GlobalStyle';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Associação Paideia</title>
        <meta
          name="description"
          content="A Associação Paideia é uma ONG destinada a preparar jovens para os vestibulares."
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="Associação Paideia" />
        <meta
          name="abstract"
          content="A Associação Paideia é uma ONG destinada a preparar jovens para os vestibulares."
        />
        <meta
          property="og:url"
          content="https://www.associacaopaideia.org.br/inicio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/logo/square-logo.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        //<GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// import GlobalStyle from '../styles/GlobalStyle';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <GlobalStyle />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
