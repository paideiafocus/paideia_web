import { memo } from 'react';

import { Grid } from '@material-ui/core';
import Page from '@/components/Page';
import * as S from './styles';

const About = () => {
  return (
    <Page>
      <S.AboutContainer>
        <Grid container>
          <Grid item xs={12}>
            <h1> SOBRE </h1>
            <h2> Um Projeto Social - Um pouco das nossas origens </h2>

            <S.TextBlock>
              <b>
                <i>
                  “Olhar não é apenas dirigir os olhos para perceber o real fora
                  de nós. É, tantas vezes, sinônimo de cuidar, zelar, guardar,
                  ações que trazem o outro para a esfera dos cuidados do
                  sujeito: olhar por um jovem, olhar por um trabalho, olhar por
                  um projeto.”
                </i>
              </b>
            </S.TextBlock>

            <S.TextBlock>
              Foi a partir deste olhar que iniciamos, no ano de 2003, as
              discussões para a organização de uma associação civil sem fins
              lucrativos e econômicos na cidade de Louveira, a Associação
              Paidéia.
            </S.TextBlock>

            <S.TextBlock>
              No Salão Paroquial da Igreja de São Sebastião nos reunimos todos,
              três professores e mais dezesseis jovens, que ansiosos e vibrantes
              com a idéia, ajudaram a construir as bases do que seria o Focus
              Vestibulares, um cursinho comunitário, voltado para o atendimento
              de alunos egressos do sistema público de ensino que, por conta de
              suas condições materiais, não teriam condições de arcar com os
              custos de um curso pré-vestibular particular.
            </S.TextBlock>

            <S.TextBlock>
              Foram precisos mais dois anos de caminhada para que o sonho se
              concretizasse. E assim, em agosto de 2005, em parceria com a
              Prefeitura Municipal de Louveira, iniciamos nossas atividades em
              uma das salas da E. M. E. F. Vila Pasti.
            </S.TextBlock>

            <S.TextBlock>
              O cursinho comunitário Focus Vestibulares da Associação Paidéia é
              um projeto social sem fins lucrativos, mantido pela Prefeitura
              Municipal de Louveira e cujo objetivo é possibilitar o acesso
              gratuito a um curso pré-vestibular de qualidade dando aos jovens
              que não podem arcar com os custos de um cursinho particular a
              possibilidade de prosseguirem seus estudos em nível superior.
            </S.TextBlock>
          </Grid>

          <br />

          <Grid item xs={12}>
            <div className="separa" />
            <h2> NOSSOS SERVIÇOS </h2>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Preparatório ENEM</h6>
              <p>
                Além da preparação para o vestibular os nossos alunos contam
                ainda com um preparatório para o ENEM com aulas, material e
                testes específicos para este processo seletivo.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Aulas Complementares Específicas</h6>
              <p>
                Nestas aulas os alunos recebem orientação específica sobre cada
                conteúdo ministrado além de participarem da resolução de listas
                de exercícios.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Material Didático</h6>
              <p>
                Ético Sistema de Ensino, da Editora Saraiva tem o conteúdo
                exigido pelos principais vestibulares do Brasil e tudo isso
                atualizado, colorido e conforme o novo acordo ortográfico.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Simulados</h6>
              <p>
                Com questões dos principais vestibulares para que os alunos
                possam avaliar seu aproveitamento.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Oficinas de Redação</h6>
              <p>
                Necessárias para o aprimoramento tanto nos vestibulares como
                para o ENEM.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Acompanhamento Psicológico</h6>
              <p>
                Atendimento especializado visando ajudar na escolha
                profissional.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Roteiros Culturais</h6>
              <p>
                Visitas a Centros Culturais, Teatros, Museus, Universidades
                entre outros.
              </p>
            </S.ServiceColumn>
          </Grid>

          <Grid item xs={3}>
            <S.ServiceColumn>
              <div className="separa" />
              <h6>Cursinho Online</h6>
              <p>Plantão de dúvidas virtual (em implantação).</p>
            </S.ServiceColumn>
          </Grid>
        </Grid>
      </S.AboutContainer>
    </Page>
  );
};

export default memo(About);
