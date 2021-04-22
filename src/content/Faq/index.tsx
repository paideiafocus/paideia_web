/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { memo } from 'react';

import Page from '@/components/Page';
import * as S from './styles';

const Faq = () => {
  return (
    <Page>
      <S.FaqSection>
      <h1>FAQ – PERGUNTAS FREQUENTES</h1>
      <h4>Quando começam as novas inscrições?</h4>

      <p>
        A Associação Paideia mantem duas turmas anuais de Pré-Vestibular: no 1º
        SEMESTRE (Fevereiro até Junho), para os Vestibulares de Inverno, e no 2º
        SEMESTRE (Agosto até Dezembro), para os Vestibulares de Verão e ENEM. As
        inscrições ocorrem no início de cada semestre. Para o <b>1º SEMESTRE</b>
        , as inscrições ocorrem em <b>Janeiro</b>; para o <b>2º SEMESTRE</b> as
        inscrições ocorrem em <b>Julho</b>. Acompanhe a nossa página no Facebook,
        onde são divulgadas todas as datas de inscrição.{' '}
        <a href="https://www.facebook.com/focuscursinho/" target="_blank" rel="noopener noreferrer">
          (Página do Facebook)
        </a>
      </p>

      <h4>O curso é pago ou gratuito?</h4>
      <p>
        O curso Pré-Vestibular é gratuito. Apenas o material é custeado pelo (a)
        aluno (a).
      </p>

      <h4>Sou de outra cidade, posso me inscrever?</h4>
      <p>
        O curso Pré-Vestibular é uma ação da Prefeitura Municipal de Louveira, em
        parceira com a Associação Paideia, e atende exclusivamente os moradores da
        cidade de Louveira.
      </p>

      <h4>Como faço para me inscrever?</h4>
      <p>
        As inscrições são realizadas através do site da Associação Paideia{' '}
        <a href="https://www.associacaopaideia.org.br">
          (www.associacaopaideia.org.br).
        </a>
      </p>
      <S.Alert kind="danger" role="alert">
        <b>ATENÇÃO!</b> As inscrições são EXCLUSIVAMENTE pela internet.
      </S.Alert>

      <h4>O Cursinho Focus oferece algum curso à distância?</h4>
      <p>
        A Associação Paideia, mantenedora do Cursinho Focus Pré-Vestibular,  <b>NÃO</b> possui
        plataforma <b>EAD – Educação à Distância.</b> Portanto, <b>não há cursinho online</b>, apenas
         aula no formato presencial.
      </p>

      <h4>
        Fiz minha inscrição, mas não compareci a uma das etapas do processo
        seletivo. O que eu faço?
      </h4>
      <S.Alert kind="danger" role="alert"><b>ATENÇÃO!</b></S.Alert>
      <p>
        Caso o (a) candidato (a), tenha faltado a <b>Reunião de Confirmação de Matrícula</b>, ele(a)
        deverá entrar em contato
        com a coordenação do cursinho através do e-mail
        contato@associacaopaideia.org.br, em até 24h, confirmando sua presença na <b>Prova Diagnóstica</b>.
        Só serão aceitas as justificativas que estiverem
        relacionadas às questões de trabalho, doença ou óbito conforme está
        relacionado no MANUAL DE INSCRIÇÃO DO CANDIDATO
      </p>

      <h4>COMO DEVE SER FEITA A SOLICITAÇÃO:</h4>
      <p>
        <b>IMPRIMIR</b> o requerimento disponível no site da Associação Paideia
        (página principal);
      </p>
      <p>
        <b>JUSTIFICAR</b> a ausência (relato de próprio punho através do
        requerimento impresso);
      </p>
      <p>
        <b>ANEXAR</b> a documentação válida (atestado de trabalho, doença ou óbito);
      </p>
      <p><b>ENTREGAR</b> os documentos no dia da <b>Prova Diagnóstica</b>.</p>
      <S.Alert kind="warning" role="alert">
        <b>FIQUE ATENTO(A)! É OBRIGATÓRIO</b> o <b>ENVIO DO E-MAIL</b> confirmando
        o interesse pela vaga e a presença na <b>Prova Diagnóstica</b>.
      </S.Alert>

      <h4>
        Onde fica a sede cursinho Focus? Tem algum telefone em que eu possa ligar?
      </h4>
      <p>
        O cursinho atende exclusivamente pelo site, portanto, não temos sede física
        ou telefone comercial. A <b>Coordenação do Cursinho</b> estará à disposição
        de toda a comunidade <b>a partir do início do semestre letivo do cursinho (período de aulas)</b>
        , na <b>EMEF Vila Pasti, Rua Orlando Pasti, 239 – Vila Pasti, Louveira – SP</b>.
        O horário de atendimento da coordenação: <b>terça e quinta das 19h30min às 21h</b>.
      </p>

      <h4>
        Não recebi nenhum e-mail de confirmação e/ou quaisquer outros referentes ao
        Focus Cursinho. O que eu faço?
      </h4>
      <p>
        ATENÇÃO! Os seus dados cadastrais precisam estar corretamente preenchidos na
        hora da inscrição. Verifique se você preencheu corretamente os dados
        referentes ao seu e-mail (letras maiúsculas, letras minúsculas, número ou
        símbolos). Verificado se as informações estão corretas, verifique sua <b>caixa de spam</b>. Caso
        tenha efetuado todas essas etapas, e, mesmo
        assim, não tenha recebido nenhuma mensagem, observe o <b>Calendário de Inscrição</b> e
        compareça a{' '}
        <b>Reunião de Confirmação de Matrícula conforme a data e horário previstos
          no MANUAL DO CANDIDATO
        </b>.
      </p>
      <S.Alert kind="danger" role="alert">
        CUIDADO! NÃO PREENCHA A FICHA DE INSCRIÇÃO NOVAMENTE.
      </S.Alert>
      <S.Alert kind="warning" role="alert">
        FIQUE LIGADO(A)! Na inscrição NÃO UTILIZE e-mail que não seja do(a)
        próprio(a) candidato(a).
      </S.Alert>

      <h4>Não tenho algum dos documentos exigidos. O que faço?</h4>
      <p>
        Todos os documentos pedidos são uma exigência contratual entre a Prefeitura
        Municipal de Louveira e a Associação Paideia. Caso ocorra algum problema com
        a documentação solicitada entre em contato pelo e-mail:
        contato@associacaopaideia.org.br.
      </p>
      <S.Alert kind="danger" role="alert">
        ATENÇÃO! É responsabilidade do (a) candidato (a) PROVIDÊNCIAR
        ANTECIPADAMENTE todos os documentos exigidos no Processo Seletivo.
      </S.Alert>

      <h4>Estou prestando Concurso Público, posso fazer o Focus Cursinho?</h4>
      <p>
        O Cursinho é voltado <b>EXCLUSIVAMENTE</b> para os exames vestibulares e
        ENEM. <b>TODA</b> a nossa grade curricular é direcionada para os
        vestibulares e ENEM.
      </p>

      </S.FaqSection>
    </Page>
  );
};

export default memo(Faq);
