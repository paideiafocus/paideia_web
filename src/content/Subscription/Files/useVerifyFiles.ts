import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IFilesHook {
  loading: boolean;
  feedbackError: string;
  verifyFiles: any;
  filesIsVerified: boolean | undefined;
}

const useVerifyFiles = (): IFilesHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [filesIsVerified, setIsVerify] = useState(false);

  const verifyFiles = useCallback(() => {
    setLoading(true);

    api({ url: '/files/verify', method: 'POST' })
      .then(({ data }) => {
        setIsVerify(data);
      })
      .catch(() => {
        setFeedbackError('Erro!');
      })
      .finally(() => setLoading(false));
  }, []);

  return { verifyFiles, filesIsVerified, loading, feedbackError };
};

export default useVerifyFiles;
