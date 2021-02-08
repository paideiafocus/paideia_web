import Footer from '../Footer';
import Header from '../Header';

import * as S from './styles';

interface PageProps {
  align?: string;
}

const Page: React.FC<PageProps> = ({ align, children }) => {
  return (
    <S.PageContainer>
      <Header />
      <S.PageContent align={align}>{children}</S.PageContent>
      <Footer />
    </S.PageContainer>
  );
};

export default Page;
