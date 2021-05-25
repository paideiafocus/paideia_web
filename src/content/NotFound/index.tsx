import { memo } from 'react';
import Page from '@/components/Page';

import * as S from './styles';

const NotFound = () => {
  return (
    <Page align="center">
      <S.NotFoundSection>
        <h1>Desculpe... mas a página que você está procurando não existe.</h1>
      </S.NotFoundSection>
    </Page>
  );
};

export default memo(NotFound);
