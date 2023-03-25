import { memo } from 'react';

import Text from '@/components/Text';
import * as S from './styles';
import OptionCard from './OptionCard';

interface ICards {
  pdfLink?: string;
  imageSrc: string;
  title: string;
}

interface IInformationAreaProps {
  titleArea: string;
  cards: Array<ICards>;
}

const InformationArea: React.FC<IInformationAreaProps> = ({
  titleArea,
  cards,
}) => {
  return (
    <S.SelectiveProcessContainer>
      <Text as="h2" color="#c757a1" isCenter>
        {titleArea}
      </Text>
      <S.Options>
        {cards.map(({ pdfLink, imageSrc, title }) => (
          <OptionCard pdfLink={pdfLink} imageSrc={imageSrc} title={title} />
        ))}
        {/* <OptionCard
          pdfLink="edital.pdf"
          imageSrc="edital.png"
          title="Manual do candidato"
        />
        <OptionCard
          pdfLink="secretaria_projetos.pdf"
          imageSrc="edital.png"
          title="Carta de serviços ao usuário da secretaria de projetos"
        />
        <OptionCard
          pdfLink="manual_inscricao.pdf"
          imageSrc="info_basica.png"
          title="Manual inscrição"
        />
        <OptionCard
          pdfLink="requerimento.pdf"
          imageSrc="requerimento.png"
          title="Requerimento"
        />
        <OptionCard
          imageSrc="perguntas_frequentes.png"
          title="Perguntas frequentes"
        /> */}
      </S.Options>
    </S.SelectiveProcessContainer>
  );
};

export default memo(InformationArea);
