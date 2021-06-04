import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface ISubscriber {
  code: number;
  enrollment: number;
  name: string;
  lastname: string;
  email: string;
  status: string;
  candidate_id: string;
  citizen: string;
  cpf: string;
  course: string;
  birth_date: string;
  rg: string;
  phone1: string;
  cinema: number;
  sports: number;
  exam_entrance: string;
  elementary_school: string;
  age: string;
  informed: string;
  internet: string;
  internet_activity: number;
  reading_activity: number;
  read: string;
  read_qtd: string;
  place: string;
  high_school: string;
  live_with_friend: number;
  live_with_grandfather: number;
  live_with_couple: number;
  live_with_mother: number;
  live_with_father: number;
  live_with_alone: number;
  live_qtd: string;
  live_time: string;
  live_type: string;
  study_why: string;
  music: number;
  no_activity: number;
  genre: string;
  tv: number;
  work_candidate: string;
  work_father: string;
  transport: string;
}

interface ISubscribersHook {
  loading: boolean;
  feedbackError: string;
  getSubscribers: any;
  subscribersData: ISubscriber[];
}

const useSubscribers = (): ISubscribersHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [subscribersData, setSubscribersData] = useState();

  const getSubscribers = useCallback(() => {
    setLoading(true);

    api({ url: '/subscribers' })
      .then(({ data }) => {
        setSubscribersData(data);
      })
      .catch(() => {
        setFeedbackError('Erro!');
      })
      .finally(() => setLoading(false));
  }, []);

  return { getSubscribers, subscribersData, loading, feedbackError };
};

export default useSubscribers;
