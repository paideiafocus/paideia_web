import api from '@/utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

interface ISuccessResponse {
  token: string;
  status: string;
}

interface IErrorResponse {
  message: string;
}

interface IAuthUser {
  loading: boolean;
  feedbackError: string;
  authUser: any;
}

const useLoginUser = (): IAuthUser => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const authUser = useCallback(({ email, password }, navigation) => {
    setLoading(true);

    const credentials = {
      email: email.value,
      password: password.value,
    };

    api({ url: '/auth', method: 'POST', data: credentials })
      .then(({ data: { status, token } }: AxiosResponse<ISuccessResponse>) => {
        navigation(status);
        localStorage.setItem('token', token);
      })
      .catch(({ response: { data } }: AxiosError<IErrorResponse>) => {
        setFeedbackError(data.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { authUser, loading, feedbackError };
};

export default useLoginUser;
