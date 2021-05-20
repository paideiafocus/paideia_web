import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IField {
  value: string;
}

interface ICandidatePayload {
  fullname: IField;
  birth_date: IField;
  phone1: IField;
  cpf: IField;
  rg: IField;
  citizen: IField;
  course: IField;
}

interface ICandidateHook {
  loading: boolean;
  feedbackError: string;
  createCandidate: any;
}

const useCandidate = (): ICandidateHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const createCandidate = useCallback(
    (
      {
        fullname,
        birth_date,
        phone1,
        cpf,
        rg,
        citizen,
        course,
      }: ICandidatePayload,
      navigation
    ) => {
      setLoading(true);
      setFeedbackError('');

      const candidateData = {
        fullname: fullname.value,
        birth_date: birth_date.value,
        phone1: phone1.value,
        cpf: cpf.value,
        rg: rg.value,
        citizen: citizen.value,
        course: course.value,
      };

      api({ url: '/candidate', method: 'POST', data: candidateData })
        .then(() => {
          navigation();
        })
        .catch(() => {
          setFeedbackError('Erro!');
        })
        .finally(() => setLoading(false));
    },
    []
  );

  return { createCandidate, loading, feedbackError };
};

export default useCandidate;
