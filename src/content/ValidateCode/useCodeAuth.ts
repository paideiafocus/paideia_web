import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import api from '@/utils/api';

interface IFeedback {
  type: '' | 'danger' | 'success';
  message: string;
}

interface IErrorResponse {
  message: string;
}

interface ICodeAuth {
  loading: boolean;
  feedback: IFeedback;
  validateCode: any;
}

const useCodeAuth = (): ICodeAuth => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<IFeedback>({
    type: '',
    message: '',
  });

  const validateCode = useCallback((code, openModal) => {
    setLoading(true);

    api({ url: '/auth/validate', method: 'PUT', data: { code: code.value } })
      .then(() => {
        openModal();
        setFeedback({
          type: 'success',
          message: 'Código validado com sucesso!',
        });
      })
      .catch(({ response: { data } }: AxiosError<IErrorResponse>) => {
        setFeedback({
          type: 'danger',
          message: data.message,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  return { validateCode, loading, feedback };
};

export default useCodeAuth;
