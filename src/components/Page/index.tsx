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
      <Header />
      <S.PageContent align={align} isFull={isFull}>
        {children}
      </S.PageContent>
      <Footer />
    </S.PageContainer>
  );
};

export default Page;
