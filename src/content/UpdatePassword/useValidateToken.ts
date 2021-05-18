import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IFeedback {
  message: '' | 'VALID_TOKEN' | 'INVALID_TOKEN';
}

interface IValidateToken {
  loading: boolean;
  feedback: IFeedback;
  validateToken: any;
}

const useValidateToken = (): IValidateToken => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<IFeedback>({ message: '' });

  const validateToken = useCallback(token => {
    setLoading(true);

    api({
      url: '/password/validate',
      method: 'POST',
      data: { token },
    })
      .then(() => {
        setFeedback({ message: 'VALID_TOKEN' });
      })
      .catch(() => {
        setFeedback({ message: 'INVALID_TOKEN' });
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, feedback, validateToken };
};

export default useValidateToken;
