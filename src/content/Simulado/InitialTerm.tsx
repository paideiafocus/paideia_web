/* eslint-disable react/jsx-one-expression-per-line */
import { memo } from 'react';
import * as S from './styles';

const InitialTerm = ({ iniciarSimulado }) => {
  return (
    <div>
      <div className="text-center">
        <h4>NORMAS E PROCEDIMENTOS:</h4>
      </div>

      <S.Term>
        <ol>
          <li>
            <div>
              O simulado é composto por questões objetivas (Testes) com
              alternativa (A,B,C,D), das quais somente uma atende às condições
              do enunciado.
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
              As questões objetivas (Testes) versarão sobre o conteúdo abordado
              em sala de aula. As áreas do conhecimento relacionadas são:
              Matemática, Química, Física, Biologia, Geografia, História, Inglês
              e Português (literatura e gramática).
            </div>
          </li>
          <li>
            <div>
              O simulado é parte de um
              <b>
                <u> Processo de Autoavaliação</u>
              </b>
              . É vedada a utilização de livros, impressos, apontamentos,
              aparelhos eletrônicos para consulta online ou quaisquer outros
              meios que possam ser usados como fonte de pesquisa para a
              realização do simulado.
            </div>
          </li>
          <li>
            <div>
              O simulado terá a duração de <b>2 (duas) horas. ATENÇÃO:</b> A
              realização do simulado não admite interrupção. Uma vez iniciado o
              simulado é acionado, automaticamente, o cronômetro que contabiliza
              o tempo de execução já pré-estabelecido. Ao final do tempo
              programado para a resolução do simulado ele será bloqueado e não
              haverá mais possibilidade de respondê-lo.
            </div>
          </li>
          <li>
            <div>
              O simulado online não admite que o usuário faça uso da função
              <b>“retroceder”</b> (voltar a uma questão anterior). Caso o
              usuário tente fazer uso desta função, voltando a uma questão
              anterior, será bloqueada a tela do simulado.
            </div>
          </li>
          <li>
            <div>
              As questões aparecerão em uma sequência pré-estabelecidas e serão
              liberadas uma a uma conforme a sua resolução.
            </div>
          </li>
          <li>
            <div>
              Recomendamos que na resolução dos exercícios deste primeiro
              simulado sejam gastos em média <b>3 minutos</b> por questão.
            </div>
          </li>
          <li>
            <div>
              Ao final do simulado será exibido um relatório simplificado do
              desempenho do usuário informando a quantidade de acertos por
              disciplina. Neste relatório serão consideradas apenas as questões
              efetivamente respondidas
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

      <div className="text-center">
        <button type="button" onClick={() => iniciarSimulado()}>
          Começar
        </button>
      </div>
    </div>
  );
};

export default memo(InitialTerm);
