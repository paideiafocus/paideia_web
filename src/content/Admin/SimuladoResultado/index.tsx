import { memo, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '@/components/Page';
import useGetResults from './useGetResults';
import reduceResults from './reduceResults';
import getTotal from './getTotal';
import * as S from './styles';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginBottom: '3rem',
  },
});

// deixar dinâmico
const totalQuestionsMaterias = {
  Multidisciplinar: 9,
  Lógica: 5,
  Matemática: 5,
  Português: 5,
  Física: 5,
  Biologia: 5,
  História: 5,
  Química: 5,
  Geografia: 5,
  Sociologia: 5,
  Filosofia: 5,
  Arte: 5,
  Inglês: 5,
};

const SimuladoResultado = () => {
  const classes = useStyles();
  const {
    getAdmResults,
    materias,
    resultsData,
    loading,
    feedbackError,
  } = useGetResults();

  useEffect(() => {
    getAdmResults();
  }, [getAdmResults]);

  const resultsDataFormatted = useMemo(
    () => resultsData && reduceResults(resultsData),
    [resultsData]
  );

  return (
    <Page isFull>
      <h1>Resultados Completo</h1>

      <S.ResultTable className={classes.table} aria-label="customized table">
        <thead>
          <tr>
            <S.ResultTableTh>Aluno</S.ResultTableTh>
            {materias &&
              materias.map(materia => (
                <S.ResultTableTh key={materia}>{materia}</S.ResultTableTh>
              ))}
            <S.ResultTableTh>Total</S.ResultTableTh>
          </tr>
        </thead>
        <tbody>
          {resultsDataFormatted &&
            resultsDataFormatted.map(result => (
              <tr key={result.fullname}>
                <S.ResultTableTd>{result.fullname}</S.ResultTableTd>
                {result.materias.map((materia, index) => (
                  <S.ResultTableTd
                    key={`${materia.user_id}_${materias[index]}`}
                  >
                    {`${materia.correct}/
                    ${totalQuestionsMaterias[materia.name]}`}
                  </S.ResultTableTd>
                ))}
                <S.ResultTableTd>
                  <b>{getTotal(result.materias)}</b>
                </S.ResultTableTd>
              </tr>
            ))}
        </tbody>
      </S.ResultTable>
    </Page>
  );
};

export default memo(SimuladoResultado);
