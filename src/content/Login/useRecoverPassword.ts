import api from '@/utils/api';
import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';

interface IErrorResponse {
  message: string;
}

interface IRecoverPassword {
  loading: boolean;
  feedbackMessage: string;
  recoverUserPassword: any;
}

const useRecoverPassword = (): IRecoverPassword => {
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(''); // MUDAR PARA OBJETO (IGUAL OUTRAS PAGINAS)

  const recoverUserPassword = useCallback(email => {
    setLoading(true);

    api({
      url: '/password/recover',
      method: 'POST',
      data: { email: email.value },
    })
      .then(() => {
        setFeedbackMessage(
          'Foi enviado ao seu e-mail instruções para a recuperação de sua senha'
        );
      })
      .catch(({ response: { data } }: AxiosError<IErrorResponse>) => {
        setFeedbackMessage(data.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { recoverUserPassword, loading, feedbackMessage };
};

export default useRecoverPassword;
