import { memo } from 'react';

import Page from '@/components/Page';
import * as S from './styles';
import InformationArea from '../Home/InformationArea';

const Finance = () => {
  const cardsBalance = [
    {
      pdfLink: 'DRE_2020_PAIDEIA.pdf',
      imageSrc: 'requerimento.png',
      title: 'DRE 2020',
    },
    {
      pdfLink: 'BALANCO_2020_PAIDEIA.pdf',
      imageSrc: 'edital.png',
      title: 'Balanço 2020',
    },
    {
      pdfLink: 'DRE_2021_PAIDEIA.pdf',
      imageSrc: 'requerimento.png',
      title: 'DRE 2021',
    },
    {
      pdfLink: 'BALANCO_2021_PAIDEIA.pdf',
      imageSrc: 'edital.png',
      title: 'Balanço 2021',
    },
    {
      pdfLink: 'DRE_2022_PAIDEIA.pdf',
      imageSrc: 'requerimento.png',
      title: 'DRE 2022',
    },
    {
      pdfLink: 'BALANCO_2022_PAIDEIA.pdf',
      imageSrc: 'edital.png',
      title: 'Balanço 2022',
    },
  ];

  return (
    <Page align="center">
      <S.FinanceSection>
        <h1>DEMONSTRAÇÕES FINANCEIRAS DA ASSOCIAÇÃO PAIDEIA</h1>

        <p>
          As demonstrações financeiras têm diversas finalidades que <b>contribuem com a prosperidade e a
          manutenção de uma atividade seja ela sem fins lucrativos e econômicos ou com viés lucrativo
          e econômico</b>, por isso elas são muito importantes. Cada tipo de demonstração ajuda em
          diferentes situações e são a partir desses documentos que os gestores conseguem tomar
          decisões seguras quanto ao uso do dinheiro de uma <b>associação</b>, empresa ou qualquer outro
          empreendimento.
        </p>
        <p>
          As demonstrações financeiras têm diferentes finalidades. É importante conhecer e diferenciar
          cada uma delas, conheça-as a seguir:
        </p>

        <h3>DRE</h3>
        <p>
          A <b>Demonstração de Resultados do Exercício (DRE)</b> é um dos relatórios de maior importância,
          pois ele reúne todas as informações de receitas, de lucros e prejuízos por cada operação.
        </p>
        <p>
          Usualmente, o <b>DRE</b> é apresentado anualmente com resultados resumidos e verticais sobre as
          operações financeiras realizadas nos últimos 12 meses.
        </p>

        <h3>BALANÇO PATRIMONIAL</h3>
        <p>
          O balanço patrimonial é um documento contábil que apresenta a situação financeira de uma{' '}
          <b>associação</b>, empresa ou qualquer empreendimento em um determinado momento, composto
          por duas partes: <b>o ativo e o passivo</b>.
        </p>
        <p>
          O <b>ativo</b> refere-se aos bens e direitos da empresa, como imóveis, estoques, veículos, contas a
          receber, entre outros. Já o <b>passivo</b> são as obrigações da empresa, como dívidas, contas a pagar,
          empréstimos, etc.
        </p>
        <p>
          A diferença entre o ativo e o passivo está no patrimônio líquido, que figura o valor que a{' '}
          <b>associação</b>, empresa ou qualquer outro empreendimento tem em bens e direitos após quitar
          suas obrigações.
        </p>
        <p>
          Dessa forma, o balanço patrimonial é uma ótima ferramenta para gestores avaliarem a saúde
          financeira de uma associação, empresa ou qualquer outro empreendimento. Ele indica se a{' '}
          <b>associação</b>, empresa ou qualquer outro empreendimento está <b>saudável financeiramente</b>, se há
          dívidas em excesso ou se está havendo investimentos em ativos de forma estratégica.
        </p>

        <InformationArea titleArea="DRE e balanço patrimonial" cards={cardsBalance} />

      </S.FinanceSection>
    </Page>
  );
};

export default memo(Finance);
