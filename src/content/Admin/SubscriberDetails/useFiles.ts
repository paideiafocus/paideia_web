import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IFile {
  type:
    | 'CITIZEN'
    | 'SCHOLARSHIP'
    | 'PHOTO'
    | 'CPF'
    | 'HISTORIC'
    | 'EJA'
    | 'ADDRESS'
    | 'RG';
  file: string;
}

interface IFilesHook {
  loading: boolean;
  feedbackError: string;
  getFiles: any;
  filesData: IFile[];
}

const useFiles = (): IFilesHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [filesData, setFilesData] = useState();

  const getFiles = useCallback((userId: string) => {
    setLoading(true);

    api({ url: `/files/${userId}` })
      .then(({ data }) => {
        setFilesData(data);
      })
      .catch(() => {
        setFeedbackError('Erro!');
      })
      .finally(() => setLoading(false));
  }, []);

  return { getFiles, filesData, loading, feedbackError };
};

export default useFiles;
