import { memo, useEffect } from 'react';
import Page from '@/components/Page';

import * as S from './styles';

const MoreDepositions = () => {
  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

  return (
    <Page>
      <div>
        <h1>DEPOIMENTOS</h1>
      </div>

      <S.CardDeposition>
        <h3>Patrícia Evelin S. Soares</h3>
        <p>
          <img
            src="/assets/depoimentos/depoimento-patricia-evelin.jpg"
            alt="Patrícia Evelin"
          />
          Não há palavras suficientes para descrever a imensa gratidão que tenho
          pelo Cursinho Focus e por cada um dos professores que nos ensinou, e
          tenho certeza que continuam ensinando, com muita sabedoria e
          dedicação. Sempre estudei em escola pública e sabia que teria que
          batalhar muito para conseguir cursar o meu tão sonhado curso de
          Direito. Quando falava que seria advogada, alguns parentes e amigos
          riam, não acreditavam na possibilidade, pois na região que morava,
          nível superior era apenas para os filhos de fazendeiros, atualmente as
          coisas mudaram muito por lá, ainda bem, mas eu acreditava e estava
          disposta a enfrentar o que fosse para conseguir.
        </p>
        <p>
          Aos meus 15 anos vim para São Paulo (sou mineira), pois sabia que aqui
          seria mais “fácil” a tentativa. Assim, no 2º ano do Ensino Médio,
          conheci a Profª Ana Sílvia que ao ver a minha vontade de ingressar em
          uma universidade, me falou sobre o Cursinho Focus e assim possibilitou
          que participasse dessa grande turma, que continua crescendo. No
          cursinho eu aprendi muito, as aulas eram excelentes, pois os
          professores ensinavam com amor, digo com toda convicção, eles estavam
          ali, assim como a Profª Ana Sílvia, pois acreditavam na transformação
          que a educação pode operar na vida de cada um daqueles jovens. E é
          isso mesmo, o conhecimento muda a nossa vida, abre portas e concretiza
          sonhos.
        </p>
        <p>
          Em 2009 passei no vestibular da Universidade Presbiteriana Mackenzie
          para o curso de Direito. Após, com a nota do Enem consegui bolsa de
          100% pelo Prouni. Tenho certeza que as aulas do cursinho e as oficinas
          de redação foram fundamentais para ambas as conquistas. Em junho deste
          ano enfrentei e superei a tão temida prova de ordem e em julho foi a
          minha formatura, foi maravilhoso dar esse presente aos meus pais.
          Atualmente sou advogada em uma empresa e pretendo fazer um mestrado,
          estudar sempre será minha maior paixão e espero poder contribuir com a
          sociedade, ensinando. Àqueles que estão começando, eu digo: tenham
          foco, disciplina e aproveitem toda a estrutura que o cursinho oferece,
          pois com certeza serão vitoriosos em seus sonhos.
        </p>
        <p>
          <strong>
            Ao Cursinho Focus a minha gratidão e o meu carinho, tenho muito
            orgulho de fazer parte desta história. Patrícia Evelin S. Soares
          </strong>
        </p>
      </S.CardDeposition>

      <S.CardDeposition>
        <h3>Caroline Candido Veroneze</h3>
        <p>
          <b>
            Caroline Candido Veroneze, 23 – Bacharel em Biblioteconomia e
            Ciência da Informação na UFSCar, São Carlos.
          </b>
        </p>
        <p>
          <img
            src="/assets/depoimentos/depoimento-caroline.jpg"
            alt="Caroline Candido"
          />
          Fiz cursinho no ano de 2008, quando estava no 3º ano do ensino médio,
          e não sabia ao certo qual curso queria seguir. Para mim, o cursinho
          foi muito bom, não apenas nas disciplinas desenvolvidas, mas também
          nos espaços de convivência, troca de experiências, no acompanhamento
          psicológico e nos próprios depoimentos de ex alunos que visitavam o
          cursinho para compartilhar suas experiências. Com certeza valeu a
          pena!
        </p>
        <p>
          Decidi pelo curso de biblioteconomia e ciência da informação por ser
          apaixonada por livros e admirar imensamente o trabalho de algumas
          bibliotecárias que conheci. Meu 1º ano foi complicado, apesar de me
          adaptar bem à cidade, o curso em si estava em fase de transição com
          muitas trocas de professores e estudos para reorganizar a grade
          curricular. Quase desisti. Mas antes quis experimentar trabalhar na
          área. Assim, consegui um estágio que, apesar de pagar pouco e ser em
          outra cidade, foi essencial para que eu decidisse continuar no curso.
          Amei a experiência e tive a certeza de que queria me formar em
          biblioteconomia.
        </p>
        <p>
          Hoje, trabalho na Diretoria de Ensino Região de Jundiaí, ocupando o
          cargo de Analista Sociocultural, administro a biblioteca da Diretoria
          de Ensino e trabalho no Programa Sala de Leitura juntamente com vários
          professores e professoras de escolas estaduais da região.
        </p>
        <p>
          <strong>
            Muito obrigada a todos os envolvidos na Associação Paideia, vocês
            fizeram a diferença na minha vida e tenho certeza que continuam a
            fazer a diferença na vida de muitas pessoas!
          </strong>
        </p>
      </S.CardDeposition>

      <S.CardDeposition>
        <h3>Aline Fransozi</h3>
        <p>
          <b>
            Aline Fransozi, 25 – Cursando engenharia florestal na USP,
            Piracicaba.
          </b>
        </p>
        <p>
          <img
            src="/assets/depoimentos/depoimento-aline.jpg"
            alt="Aline Fransozi"
          />
          Quando eu entrei no cursinho, eu ainda não tinha certeza sobre a
          carreira a seguir, mas eu queria estar preparada para quando chegasse
          o momento da decisão. Eu sempre estudei em escolas públicas, onde
          infelizmente não há incentivo para pensarmos “fora da caixa” e
          acabamos nos limitando a algumas poucas opções que nem sempre traduzem
          o que desejamos.
          <b>
            “Ao final de 2014, eu estarei formada no curso que eu queria, na
            melhor universidade do país. Qualquer agradecimento à Associação
            Paidéia é pouco pela mudança que foi provocada na minha vida.”
          </b>
        </p>
        <p>
          Mais do que aulas preparatórias para o vestibular, encontrei no
          cursinho uma equipe pronta para me apresentar um mundo de
          possibilidades e me convencer que eu poderia querer qualquer coisa!
          Com a orientação pedagógica e visitas às universidades promovidas pelo
          cursinho, eu descobri a carreira que me realizaria profissionalmente:
          Engenharia Florestal. Ainda afobada com as descobertas e um tanto
          insegura das possibilidades, me inscrevi para diversos cursos no
          primeiro ano. Para o meu espanto (sim, eles acreditaram mais do que
          eu!), passei em três universidades públicas – UNICAMP, UNESP e UniABC.
          Fiquei muito feliz por perceber que era possível, mas um pouco triste
          porque não passei justamente no curso que eu mais queria.
        </p>
        <p>
          Era o momento de tomar a decisão: fazer o curso que eu havia passado
          ou tentar mais uma vez o que eu realmente queria? Foi mais fácil
          passar no vestibular dessas três universidades do que desistir das
          mesmas, mas eu decidi acreditar no meu sonho e na capacidade da equipe
          em me preparar. Um ano depois eu ingressei em Engenharia Florestal na
          USP. Ao final de 2014, eu estarei formada no curso que eu queria, na
          melhor universidade do país. Qualquer agradecimento à Associação
          Paidéia é pouco pela mudança que foi provocada na minha vida. Hoje, eu
          espero poder retribuir um pouquinho do que fizeram por mim dizendo
          apenas uma palavra àqueles que estão iniciando essa jornada: Acredite!
        </p>
      </S.CardDeposition>

      <S.CardDeposition lastCard>
        <h3>Ana Silvia</h3>
        <p>
          <b>Diretora Presidente e Coordenadora Pedagógica do Cursinho Focus</b>
        </p>
        <p>
          <img
            src="/assets/depoimentos/depoimento-ana.jpg"
            alt="Coordenadora Pedagógica"
          />
          Nós do Focus Vestibulares da Associação Paidéia nutrimos a alegria de
          termos colaborado com os jovens de Louveira a realizarem o sonho de
          ingressar em uma universidade. Mais do que colaboradores nos tornamos
          agentes de uma mudança social e humana na vida daqueles que passaram
          pelo projeto.
        </p>
      </S.CardDeposition>
    </Page>
  );
};

export default memo(MoreDepositions);
