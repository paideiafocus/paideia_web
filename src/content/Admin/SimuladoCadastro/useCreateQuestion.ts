import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface ICreateQuestion {
  loading: boolean;
  createQuestion: any;
}

const useCreateQuestion = (): ICreateQuestion => {
  const [loading, setLoading] = useState(false);

  const createQuestion = useCallback(async (question, pergunta) => {
    setLoading(true);
    await api({
      url: '/cadastraSimulado',
      method: 'POST',
      data: {
        pergunta,
        materia: question.materia.value,
        enunciado: question.enunciado.value,
        resp_a: question.resp_a.value,
        resp_b: question.resp_b.value,
        resp_c: question.resp_c.value,
        resp_d: question.resp_d.value,
        resp_e: question.resp_e.value,
        correta: question.correta.value,
        img: question.img.value,
      },
    });
    setLoading(false);
  }, []);

  return {
    loading,
    createQuestion,
  };
};

export default useCreateQuestion;
