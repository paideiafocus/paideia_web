import api from '@/utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

interface IFeedback {
  type: '' | 'danger' | 'success';
  message: string;
}

interface IResponse {
  message: string;
}

interface IUpdatePassword {
  loading: boolean;
  feedback: IFeedback;
  updatePassword: any;
}

const useUpdatePassword = (): IUpdatePassword => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<IFeedback>({
    type: '',
    message: '',
  });

  const updatePassword = useCallback(
    ({ newPassword, confirmNewPassword }, token, navigation) => {
      setLoading(true);

      const password = {
        newPassword: newPassword.value,
        confirmNewPassword: confirmNewPassword.value,
        token,
      };

      api({
        url: '/password/update',
        method: 'PUT',
        data: password,
      })
        .then(({ data }: AxiosResponse<IResponse>) => {
          setFeedback({ type: 'success', message: data.message });
          navigation();
        })
        .catch(({ response: { data } }: AxiosError<IResponse>) => {
          setFeedback({ type: 'danger', message: data.message });
        })
        .finally(() => setLoading(false));
    },
    []
  );

  return { updatePassword, loading, feedback };
};

export default useUpdatePassword;
