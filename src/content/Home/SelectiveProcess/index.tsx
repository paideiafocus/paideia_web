import { memo } from 'react';

import Text from '@/components/Text';
import * as S from './styles';
import OptionCard from './OptionCard';

const SelectiveProcess: React.FC = () => {
  return (
    <S.SelectiveProcessContainer>
      <Text as="h2" color="#c757a1" isCenter>
        Processo Seletivo
      </Text>
      <S.Options>
        {/* <OptionCard
          pdfLink="informacoes.pdf"
          imageSrc="info_basica.png"
          title="Informações básicas"
        /> */}
        {/* <OptionCard
          pdfLink="edital.pdf"
          imageSrc="edital.png"
          title="Manual do candidato"
        /> */}
        <OptionCard
          pdfLink="REQUERIMENTO - 2018.pdf"
          imageSrc="requerimento.png"
          title="Requerimento"
        />
        <OptionCard
          imageSrc="perguntas_frequentes.png"
          title="Perguntas frequentes"
        />
      </S.Options>
      {/* <S.Options onlyOne>
        <OptionCard
          imageSrc="perguntas_frequentes.png"
          title="Perguntas frequentes"
        />
      </S.Options> */}
    </S.SelectiveProcessContainer>
  );
};

export default memo(SelectiveProcess);
