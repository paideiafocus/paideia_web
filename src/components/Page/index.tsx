import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import * as S from './styles';

const Page: React.FC = ({ children }) => {
  return (
    <S.PageContainer>
      <Header />
      <S.PageContent>{children}</S.PageContent>
      <Footer />
    </S.PageContainer>
  );
};

export default Page;
