import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';

import * as S from './styles';

interface PageProps {
  align?: string;
  isFull?: boolean;
}

const Page: React.FC<PageProps> = ({ align, isFull, children }) => {
  return (
    <S.PageContainer>
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

      <Header />
      <S.PageContent align={align} isFull={isFull}>
        {children}
      </S.PageContent>
      <Footer />
    </S.PageContainer>
  );
};

export default Page;
