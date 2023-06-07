/* eslint-disable react/jsx-one-expression-per-line */
import { memo } from 'react';
import ButtonForm from '@/components/ButtonForm';
import * as S from './styles';

const InitialTerm = ({ iniciarSimulado }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="text-center">
        <h4>NORMAS E PROCEDIMENTOS:</h4>
      </div>

      <S.Term>
        <ol>
          <li>
            <div>
              O simulado é composto por <b>questões objetivas</b> (Testes) com{' '}
              <b>quatro alternativas</b> (A,B,C,D), das quais somente uma é
              correta.
            </div>
          </li>
          <li>
            <div>
              Responda a todas as questões. Para o cômputo da nota serão
              considerados apenas os acertos.
            </div>
          </li>
          <li>
            <div>
              <strong>
                As <b>questões objetivas</b> (Testes) versarão sobre o conteúdo
                abordado no E.M. (Ensino Médio). As áreas do conhecimento
                relacionadas são: Português e Matemática. Também fará parte da
                Prova Diagnóstica a elaboração de uma Redação. O{' '}
                <b>link para acessar o arquivo da folha de redação e o tema</b>{' '}
                seguem abaixo:
                <br />
                <a href="/assets/pdf/redacao_tema.pdf" target="_blank">
                  Tema proposto
                </a>
                <br />
                <a href="/assets/pdf/redacao_folha.pdf" target="_blank">
                  Folha de redação
                </a>
              </strong>
            </div>
          </li>
          <li>
            <div>
              A Prova diagnóstica é parte de um <b>Processo de Autoavaliação</b>
              . É<b> vedada</b> a utilização de livros, impressos, apontamentos,
              aparelhos eletrônicos para consulta online ou quaisquer outros
              meios que possam ser usados como fonte de pesquisa para a
              realização da prova.
            </div>
          </li>
          {/* <li>
            <div>
              Sobre a redação: leia com atenção o{' '}
              <a href="/assets/pdf/redacao_tema.pdf" target="_blank">
                tema
              </a>
              , imprima a{' '}
              <a href="/assets/pdf/redacao_folha.pdf" target="_blank">
                folha de redação
              </a>{' '}
              e a faça de forma manuscrita, digitalize e envie para nosso e-mail{' '}
              <b>contato@associacaopaideia.org.br</b>
            </div>
          </li> */}
          <li>
            <div>
              A Prova {/* Diagnóstica */}
              terá a duração de <b>2:30 (duas horas e trinta minutos)</b>.{' '}
              <b>ATENÇÃO</b>: A realização da prova não admite interrupção. Uma
              vez iniciada a prova é acionado, automaticamente, o cronômetro que
              contabiliza o tempo de execução já pré-estabelecido. Ao final do
              tempo programado para a resolução da prova ela será bloqueada e
              não não haverá mais possibilidade de respondê-la.
            </div>
          </li>
          <li>
            <div>
              A prova online não admite que o usuário faça uso da função{' '}
              <b>“retroceder” (voltar a uma questão anterior)</b>. Caso o
              usuário tente fazer uso desta função, voltando a uma questão
              anterior, será bloqueada a tela da prova.
            </div>
          </li>
          <li>
            <div>
              As questões aparecerão em uma sequência pré-estabelecidas e serão
              liberadas uma a uma conforme a sua resolução.
            </div>
          </li>
          {/* <li>
            <div>
              Recomendamos que na resolução dos exercícios dessa primeira prova
              sejam gastos em média <b>3 minutos</b> por questão.
            </div>
          </li> */}
          <li>
            <div>
              Ao final da prova será exibido um relatório simplificado do
              desempenho do aluno informando a quantidade de acertos por
              disciplina. Neste relatório serão consideradas apenas as questões
              efetivamente respondidas.
            </div>
          </li>
          {/* <li>
  <div style={{fontWeight:'initial'}}>
    O gabarito estará disponível no site da Associação Paideia em
    03/02/2020.
  </div>
</li>  */}
        </ol>
      </S.Term>

      <p>
        Caso ainda tenha alguma dúvida referente ao simulado, entre em contato
        conosco:{' '}
        <b>
          <em>contato@associacaopaideia.org.br</em>
        </b>
      </p>

      <div style={{ marginTop: '2rem' }}>
        <ButtonForm onClick={() => iniciarSimulado()}>Começar</ButtonForm>
      </div>
    </div>
  );
};

export default memo(InitialTerm);
