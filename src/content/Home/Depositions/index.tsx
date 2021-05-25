import { memo, useCallback } from 'react';
import Button from '@material-ui/core/Button';

import { useRouter } from 'next/router';
import * as S from './styles';

const Depositions: React.FC = () => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    router.push('/mais-depoimentos');
  }, [router]);

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
            Aos professores, queridos professores, meu muito obrigada. Muito
            obrigada pelo interesse em formar pessoas muito mais que formar
            alunos. Muito obrigada por todas as vezes que nos escutaram...
          </p>
          <strong>Caroline Cândido Veroneze</strong>
        </S.DepositionsCard>
      </S.DepositionsContent>

      <S.SeeMoreDepositions>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNavigation}
        >
          Ver mais depoimentos
        </Button>
      </S.SeeMoreDepositions>
    </S.DepositionsContainer>
  );
};

export default memo(Depositions);
