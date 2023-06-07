/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { memo } from 'react';

import Page from '@/components/Page';
import Alert from '@/components/Alert';
import * as S from './styles';

const Faq = () => {
  return (
    <Page>
      <S.FaqSection>
        <h1 style={{ textAlign: 'center' }}>FAQ – PERGUNTAS FREQUENTES</h1>
        <h4>Quando começam as novas inscrições?</h4>

        <p>
          Anualmente a Associação Paideia, através do Focus Pré-Vestibular,
          oferece duas turmas de <b>Semi Extensivo</b>: uma turma no{' '}
          <b>1º SEMESTRE (Fevereiro a Junho)</b>, para os{' '}
          <b>Vestibulares de Inverno</b> e outra turma no <b>2º SEMESTRE</b>{' '}
          (Agosto a Dezembro), para os <b>Vestibulares de Verão</b> e{' '}
          <b>ENEM</b>. As inscrições ocorrem no início de cada semestre. Para a
          turma do <b>1º SEMESTRE</b> as inscrições ocorrem em <b>Janeiro</b> e
          para a turma do <b>2º SEMESTRE</b> as inscrições ocorrem em{' '}
          <b>Julho</b>. Acompanhe as nossas mídias sociais, Instagram e Facebook
          onde são publicadas todas informações e notícias sobre o Focus
          Pré-Vestibular como as datas para inscrição.
          {/* <a href="https://www.facebook.com/focuscursinho/" target="_blank" rel="noopener noreferrer">
          (Página do Facebook)
        </a> */}
        </p>

        <h4>O curso é pago ou gratuito?</h4>
        <p>
          <b>O curso Focus Pré-Vestibular</b> é{' '}
          <b>
            <u>gratuito</u>
          </b>
          . Através de uma parceria entre a <b>Associação Paideia</b> e a{' '}
          <b>Prefeitura Municipal de Louveira</b> é possível garantir a isenção
          de custos diretos para os alunos. Não há nenhuma cobrança de taxa de
          inscrição, de mensalidade ou de material didático
        </p>

        <h4>Sou de outra cidade, posso me inscrever?</h4>
        <p>
          O curso <b>Focus Pré-Vestibular</b> é uma ação da{' '}
          <b>Prefeitura Municipal de Louveira</b> em parceira com a Associação
          Paideia e atende <b>exclusivamente</b> os moradores da cidade de
          Louveira.
        </p>

        <h4>Como faço para me inscrever?</h4>
        <p>
          No período de inscrição o (a) candidato (a) deverá{' '}
          <b>acessar o site</b> da Associação Paideia munido de todos os
          documentos exigidos para cadastra-se a uma das vagas oferecidas. O
          endereço do site é{' '}
          <a href="https://www.associacaopaideia.org.br">
            www.associacaopaideia.org.br
          </a>
        </p>
        <Alert kind="danger">
          <b>ATENÇÃO!</b> Todo o processo de inscrição é realizado{' '}
          <b>exclusivamente</b> pela internet através do site da Associação
          Paideia{' '}
          <a href="https://www.associacaopaideia.org.br">
            www.associacaopaideia.org.br
          </a>
        </Alert>

        <h4>
          Como ficarão as aulas do Focus Pré-Vestibular durante a pandemia,
          serão presenciais ou virtuais?
        </h4>
        <p>
          Enquanto durar a suspensão das atividades presenciais,{' '}
          <b>devido à pandemia de COVID-19, as aulas serão virtuais</b>, isto é
          não presenciais, mantendo-se os dias e turnos estabelecidos para as
          aulas presenciais durante o ensino remoto. Caso haja alguma alteração
          no formato da estrutura os alunos serão comunicados através de e-mail
          e das mídias sociais da Associação Paideia.
        </p>
        <Alert kind="danger">
          <b>ATENÇÃO!</b> As <b>aulas são ao vivo</b>, isto é, são dadas em
          tempo real e acontecem de{' '}
          <b>
            segunda à sexta-feira das 19h até 22h15 e aos sábados das 14h às 18h
          </b>
          . A Associação Paideia grava todas as aulas para registro e
          documentação do serviço prestado à Prefeitura Municipal de Louveira.
          Ainda não temos uma ‘playlist’ das aulas gravas em 2020. Esperamos em
          breve disponibilizar um catálogo com as aulas dadas no ano anterior
          para consulta e uso dos alunos.
        </Alert>

        <h4>
          Fiz minha inscrição mas acabei não realizei a Prova Diagnóstica ou não
          participei da Reunião de Confirmação de Matrícula. O que eu faço
          agora?
        </h4>
        <Alert kind="danger">
          <b>ATENÇÃO!</b>
        </Alert>
        <p>
          Caso o (a) candidato (a), tenha deixado de fazer a Prova Diagnóstica
          ou tenha faltado a Reunião de Confirmação de Matrícula, ele(a){' '}
          <b>
            deverá entrar em contato com a coordenação do cursinho através do
            e-mail
          </b>
          contato@associacaopaideia.org.br, para notificar sua desistência ou
          justificar a sua ausência. Só serão aceitas as justificativas que
          estiverem relacionadas às questões de trabalho, doença ou óbito O
          tempo máximo permitido para o envio da notificação ou justificativa é
          de 1(um) dia após a data final da Prova Diagnóstica e 1(um) dia após a
          data final da Reunião de Confirmação de Matrícula. Terminado o prazo
          para a notificação ou justificativa a vaga do (a) candidato (a){' '}
          <b>
            será cancelada e o (a) mesmo (a) perderá o direito de participar do
            preparatório pelo período de 1(um) semestre letivo
          </b>
          .
        </p>

        <h4>Como faço para encaminhar a minha notificação ou justificativa?</h4>
        <p>
          O (A) candidato (a) deve acessar o site da Associação Paideia e clicar
          no ícone <b>Requerimento</b> e imprimir o formulário. Depois de
          impresso o<b>Requerimento</b> deve ser preenchido, de próprio punho,
          com as informações que o (a) candidato (a) considera importantes ou
          necessárias para notificar a sua desistência da vaga ou justificar a
          sua ausência e interesse pela vaga. Após o preenchimento do{' '}
          <b>Requerimento</b> o (a) candidato (a) deverá digitalizar o
          formulário junto com a documentação que valide o fato relatado
          (atestado de trabalho, doença ou óbito) e encaminhar para o e-mail
          contato@associacaopaideia.org.br
        </p>
        <Alert kind="warning">
          <b>FIQUE ATENTO(A)!</b> É OBRIGATÓRIO O ENVIO DO E-MAIL tanto para
          notificar a distência da vaga como para justificar a ausência e
          interesse pela vaga. Também é obrigatório o envio de e-mail para
          justificar a ausência em uma das etapas da inscrição como da Prova
          Diagnóstica ou da Reunião de Confirmação de Matrícula. Para validar a
          justificativa é necessário anexar os documentos comprobatórios
          digitalizados juntamente com o <b>requerimento</b> preenchido.
        </Alert>

        <h4>
          Onde fica a sede Focus Pré-Vestibular? Tem algum e-mail ou telefone
          que eu possa ligar ou comunicar-me através do whatsapp?
        </h4>
        <p>
          As aulas presenciais acontecem na EMEF Vila Pasti.{' '}
          <b>Durante a pandemia não estamos atendendo presencialmente</b>. Caso
          o (a) candidato (a) precise de mais alguma informação ou
          esclarecimento, solicitamos que entre em contato conosco através de
          nosso e-mail institucional que é o contato@associacaopaideia.org.br
        </p>
        <p>
          Também temos um <b>número de telefone</b> a disposição dos nossos
          alunos que é o <b>(19) 98916 8768</b>. Nesse telefone temos vinculado
          o <b>whatsapp</b> para atendimento da comunidade estudantil. Além
          desses dois canais de comunicação, o e-mail institucional e o
          telefone, a comunidade estudantil poderá se informar através das
          nossas redes sociais como{' '}
          <b>Instagram</b> e <b>Facebook</b> . ATENÇÃO!Você que pretende fazer o
          cursinho conosco divulgue entre seus amigos, colegas e conhecidos as
          nossas mídias sociais. Ajude a Associação Paideia e o Focus
          Pré-Vestibular a ser conhecido por todas e todos os membros da
          comunidade estudantil de Louveira SP. Siga a gente pelo{' '}
          <b>Instagram</b> e pelo <b>Facebook</b>!
        </p>
        <p>
          A Coordenação do Focus Pré-Vestibular estará à disposição a partir do
          início das inscrições e durante todo o semestre letivo (período de
          aula) para atendimento da comunidade em geral.
        </p>

        <h4>
          Não recebi nenhum e-mail de confirmação e/ou quaisquer outros e-mails
          referentes ao Focus Pré-Vestibular. O que eu faço?
        </h4>
        <p>
          ATENÇÃO! Tenha muita atenção e tome muito cuidado ao preencher os
          dados na hora da inscrição. Verifique se você preencheu corretamente
          todos os campos solicitados com os dados referentes ao seu e-mail
          (letras maiúsculas, letras minúsculas, número ou símbolos). ATENÇÃO,
          SE LIGA NESSA DICA! Não cadastre emails de terceiros (pai, mãe,
          namorado, namorada, amigo, amiga, vizinhos, etc). Ao preencher o
          cadastro de inscrição use o seu próprio e-mail.
        </p>
        <p>
          Feita a verificação dos dados e observado que todas as informações
          estão corretas, olhe a sua caixa de spam. Caso tenha efetuado todas
          essas etapas, e, mesmo assim, não tenha recebido nenhuma mensagem,
          observe o Cronograma de Inscrição existente no Edital de Ingresso e
          participe da Reunião de Confirmação de Matrícula na data e horário
          previstos.
        </p>

        {/* <Alert kind="danger">
          CUIDADO! NÃO PREENCHA A FICHA DE INSCRIÇÃO NOVAMENTE.
        </Alert>
        <Alert kind="warning">
          FIQUE LIGADO(A)! Na inscrição NÃO UTILIZE e-mail que não seja do(a)
          próprio(a) candidato(a).
        </Alert> */}

        <h4>Não tenho algum dos documentos exigidos. O que faço?</h4>
        <p>
          Todos os documentos solicitados são uma exigência contratual entre a
          Prefeitura Municipal de Louveira e a Associação Paideia. Caso ocorra
          algum problema com a documentação exigida entre em contato pelo nosso
          e-mail institucional: contato@associacaopaideia.org.br.
        </p>
        <Alert kind="danger">
          ATENÇÃO! É responsabilidade do (a) candidato (a) PROVIDÊNCIAR
          ANTECIPADAMENTE todos os documentos exigidos no Processo Seletivo.
        </Alert>

        <h4>
          Estou prestando Concurso Público, posso fazer o Focus Pré-Vestibular?
        </h4>
        <p>
          O Focus Pré-Vestibular é um preparatório voltado EXCLUSIVAMENTE para
          os exames vestibulares e ENEM. A nossa grade curricular é toda
          direcionada para os exames vestibulares e ENEM.
        </p>
      </S.FaqSection>
    </Page>
  );
};

export default memo(Faq);
