import api from '@/utils/api';
import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';

interface IErrorResponse {
  message: string;
}

interface IFeedback {
  type: '' | 'danger' | 'success';
  message: string;
}
interface IRecoverPassword {
  loading: boolean;
  feedback: IFeedback;
  recoverUserPassword: any;
}

const useRecoverPassword = (): IRecoverPassword => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<IFeedback>({
    type: '',
    message: '',
  });

  const recoverUserPassword = useCallback(email => {
    setLoading(true);

    api({
      url: '/password/recover',
      method: 'POST',
      data: { email },
    })
      .then(() => {
        setFeedback({
          type: 'success',
          message:
            'Foi enviado ao seu e-mail instruções para a recuperação de sua senha',
        });
      })
      .catch(({ response: { data } }: AxiosError<IErrorResponse>) => {
        setFeedback({ type: 'danger', message: data.message });
      })
      .finally(() => setLoading(false));
  }, []);

  return { recoverUserPassword, loading, feedback };
};

export default useRecoverPassword;
