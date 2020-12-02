import React from 'react';

import * as S from './styles';

const Depositions: React.FC = () => {
  return (
    <S.DepositionsContainer>
      <h2>depoimentos</h2>
      <S.DepositionsContent>
        <S.DepositionsCard borderDirection="right">
          <p>
            Não há palavras suficientes para descrever a imensa gratidão que
            tenho pelo Cursinho Focus e por cada um dos professores que nos
            ensinou, e tenho certeza que continuam ensinando, com muita
            sabedoria...
          </p>
          <strong>Patricia Evelin</strong>
        </S.DepositionsCard>

        <S.DepositionsCard borderDirection="left">
          <p>
            Não há palavras suficientes para descrever a imensa gratidão que
            tenho pelo Cursinho Focus e por cada um dos professores que nos
            ensinou, e tenho certeza que continuam ensinando, com muita
            sabedoria...
          </p>
          <strong>Patricia Evelin</strong>
        </S.DepositionsCard>
      </S.DepositionsContent>
      <S.SeeMoreDepositions>
        <button type="button">Ver mais depoimentos</button>
      </S.SeeMoreDepositions>
    </S.DepositionsContainer>
  );
};

export default Depositions;
