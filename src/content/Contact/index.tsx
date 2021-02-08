import { memo } from 'react';

import Page from '@/components/Page';
import * as S from './styles';

const Contact = () => {
  return (
    <Page align="center">
      <S.ContactSection>
        <h1>CONTATO</h1>

        <p>
          Para entrar em contato envie uma mensagem através do Facebook ou envie
          um email para:
          <br />
          contato@associacaopaideia.org.br
        </p>
      </S.ContactSection>
    </Page>
  );
};

export default memo(Contact);
