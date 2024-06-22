import api from '@/utils/api';
import { AxiosResponse } from 'axios';
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
  school_bus: IField;
}

interface ICandidateHook {
  createIsloading: boolean;
  feedbackError: string;
  createCandidate: any;
  searchCandidate: any;
  searchIsloading: boolean;
}

interface ICandidateData {
  citizen: string;
  cpf: string;
  course: string;
  birth_date: string;
  fullname: string;
  rg: string;
  phone1: string;
  school_bus: string;
}

const useCandidate = (): ICandidateHook => {
  const [createIsloading, setCreateIsLoading] = useState(false);
  const [searchIsloading, setSearchIsLoading] = useState(false);
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
        school_bus,
      }: ICandidatePayload,
      navigation
    ) => {
      setCreateIsLoading(true);
      setFeedbackError('');

      const candidateData = {
        fullname: fullname.value,
        birth_date: birth_date.value,
        phone1: phone1.value,
        cpf: cpf.value,
        rg: rg.value,
        citizen: citizen.value,
        course: course.value,
        school_bus: school_bus.value,
      };

      api({ url: '/candidate', method: 'POST', data: candidateData })
        .then(() => {
          navigation();
        })
        .catch(() => {
          setFeedbackError('Erro!');
        })
        .finally(() => setCreateIsLoading(false));
    },
    []
  );

  const searchCandidate = useCallback((updatePersonal, setIsFormError) => {
    setSearchIsLoading(true);
    setFeedbackError('');

    api({ url: '/candidate', method: 'GET' })
      .then(({ data }: AxiosResponse<ICandidateData>) => {
        const {
          citizen,
          cpf,
          course,
          birth_date,
          fullname,
          rg,
          phone1,
          school_bus,
        } = data;
        updatePersonal({
          fullname: { value: fullname || '', error: '' },
          birth_date: { value: birth_date || '', error: '' },
          phone1: { value: phone1 || '', error: '' },
          cpf: { value: cpf || '', error: '' },
          rg: { value: rg || '', error: '' },
          citizen: { value: citizen || '', error: '' },
          course: { value: course || '', error: '' },
          school_bus: { value: school_bus || '', error: '' },
        });
        if(cpf){
          setIsFormError(false);
        }
      })
      .catch(() => {
        setFeedbackError('Erro!');
      })
      .finally(() => setSearchIsLoading(false));
  }, []);

  return {
    createCandidate,
    createIsloading,
    feedbackError,
    searchCandidate,
    searchIsloading,
  };
};

export default useCandidate;
