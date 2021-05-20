import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IFileHook {
  loading: boolean;
  feedbackError: string;
  createFiles: any;
}

interface IField {
  value: string;
}

interface IFilesPayload {
  RG: IField;
  CPF: IField;
  HISTORIC: IField;
  CITIZEN: IField;
  ADDRESS: IField;
  SCHOLARSHIP: IField;
  PHOTO: IField;
  EJA: IField;
}

const useFile = (): IFileHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const createFiles = useCallback((files: IFilesPayload, navigation) => {
    setLoading(true);
    setFeedbackError('');

    const filesList = Object.keys(files).map(key => ({
      type: key,
      file: files[key].value,
    }));

    api({ url: '/files', method: 'POST', data: { filesList } })
      .then(() => {
        navigation();
      })
      .catch(() => {
        setFeedbackError('Erro!');
      })
      .finally(() => setLoading(false));
  }, []);

  return { createFiles, loading, feedbackError };
};

export default useFile;
