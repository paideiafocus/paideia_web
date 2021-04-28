import { memo } from 'react';
import Page from '@/components/Page';

import * as S from './styles';

const Done = () => {
  return (
    <Page align="center">
      <S.DoneSection>
        <h3>
          Seus dados para inscrição foram enviados, verifique seu e-mail para
          saber qual sua situação referente a matrícula.
        </h3>
      </S.DoneSection>
    </Page>
  );
};

export default memo(Done);
