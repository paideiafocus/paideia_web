import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IResultsData {
  name: string;
  lastname: string;
  question_id: string;
  user_id: string;
  modelo: number;
  pergunta: number;
  selecionado: 'a' | 'b' | 'c' | 'd';
  acertou: 's' | 'n';
  materia: string;
  fullname?: string;
}

interface IGetResultsHook {
  loading: boolean;
  feedbackError: string;
  getAdmResults: any;
  materias: string[];
  resultsData: IResultsData[];
}

const useGetResults = (): IGetResultsHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [resultsData, setResultsData] = useState<IResultsData[]>();
  const [materias, setMaterias] = useState<string[]>();

  const getAdmResults = useCallback(() => {
    setLoading(true);
    setFeedbackError('');

    api({ url: '/simuladoadmcompleto' })
      .then(({ data }) => {
        const diciplinas = data.reduce((acc, curr) => {
          if (acc.some(item => item === curr.materia)) {
            return acc;
          }
          return [...acc, curr.materia];
        }, []);
        setMaterias(diciplinas);

        const results = data.reduce(
          (
            acc,
            { user_id, materia, name, lastname, acertou }: IResultsData
          ) => {
            const foundIndex = acc.findIndex(
              item => item.user_id === user_id && item.materia === materia
            );
            if (foundIndex !== -1) {
              const updateCount = acc;
              updateCount[foundIndex] = {
                ...updateCount[foundIndex],
                correct:
                  acertou === 's'
                    ? updateCount[foundIndex].correct + 1
                    : updateCount[foundIndex].correct,
              };

              return [...updateCount];
            }

            const info = {
              user_id,
              fullname: `${name} ${lastname}`,
              correct: acertou === 's' ? 1 : 0,
              materia,
            };

            return [...acc, info];
          },
          []
        );

        setResultsData(results);
      })
      .catch(() => {
        setFeedbackError('Erro!');
      })
      .finally(() => setLoading(false));
  }, []);

  return { getAdmResults, resultsData, materias, loading, feedbackError };
};

export default useGetResults;
