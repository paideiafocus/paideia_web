import api from '@/utils/api';
import { useCallback, useState } from 'react';

interface IField {
  value: string | boolean;
}

interface ISocioeconomicPayload {
  genre: IField;
  cinema: IField;
  sports: IField;
  exam_entrance: IField;
  elementary_school: IField;
  age: IField;
  informed: IField;
  internet: IField;
  internet_activity: IField;
  reading_activity: IField;
  read: IField;
  read_qtd: IField;
  place: IField;
  high_school: IField;
  live_with_friend: IField;
  live_with_grandfather: IField;
  live_with_couple: IField;
  live_with_mother: IField;
  live_with_father: IField;
  live_with_alone: IField;
  live_qtd: IField;
  live_time: IField;
  live_type: IField;
  study_why: IField;
  music: IField;
  no_activity: IField;
  tv: IField;
  work_candidate: IField;
  work_study: IField;
  work_father: IField;
  transport: IField;
  participate_ead: IField;
  understand_ead: IField;
  local_quarantine: IField;
  unprotected_people: IField;
  responsibilities: IField;
  smartphone: IField;
  internet_smartphone: IField;
  internet_smartphone_limit: IField;
  equips: IField;
  pc_shared: IField;
  study_local: IField;
  internet_quality: IField;
}

interface ISocioeconomicHook {
  loading: boolean;
  feedbackError: string;
  createSocioeconomic: any;
}

const useSocioeconomic = (): ISocioeconomicHook => {
  const [loading, setLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const createSocioeconomic = useCallback(
    (
      {
        genre,
        cinema,
        sports,
        exam_entrance,
        elementary_school,
        age,
        informed,
        internet,
        internet_activity,
        reading_activity,
        read,
        read_qtd,
        place,
        high_school,
        live_with_friend,
        live_with_grandfather,
        live_with_couple,
        live_with_mother,
        live_with_father,
        live_with_alone,
        live_qtd,
        live_time,
        live_type,
        study_why,
        music,
        no_activity,
        tv,
        work_candidate,
        work_study,
        work_father,
        transport,
        participate_ead,
        understand_ead,
        local_quarantine,
        unprotected_people,
        responsibilities,
        smartphone,
        internet_smartphone,
        internet_smartphone_limit,
        equips,
        pc_shared,
        study_local,
        internet_quality,
      }: ISocioeconomicPayload,
      navigation
    ) => {
      setLoading(true);
      setFeedbackError('');

      const socioeconomicData = {
        genre: genre.value,
        cinema: cinema.value,
        sports: sports.value,
        exam_entrance: exam_entrance.value,
        elementary_school: elementary_school.value,
        age: age.value,
        informed: informed.value,
        internet: internet.value,
        internet_activity: internet_activity.value,
        reading_activity: reading_activity.value,
        read: read.value,
        read_qtd: read_qtd.value,
        place: place.value,
        high_school: high_school.value,
        live_with_friend: live_with_friend.value,
        live_with_grandfather: live_with_grandfather.value,
        live_with_couple: live_with_couple.value,
        live_with_mother: live_with_mother.value,
        live_with_father: live_with_father.value,
        live_with_alone: live_with_alone.value,
        live_qtd: live_qtd.value,
        live_time: live_time.value,
        live_type: live_type.value,
        study_why: study_why.value,
        music: music.value,
        no_activity: no_activity.value,
        tv: tv.value,
        work_candidate: work_candidate.value,
        work_study: work_study.value,
        work_father: work_father.value,
        transport: transport.value,
        participate_ead: participate_ead.value,
        understand_ead: understand_ead.value,
        local_quarantine: local_quarantine.value,
        unprotected_people: unprotected_people.value,
        responsibilities: responsibilities.value,
        smartphone: smartphone.value,
        internet_smartphone: internet_smartphone.value,
        internet_smartphone_limit: internet_smartphone_limit.value,
        equips: equips.value,
        pc_shared: pc_shared.value,
        study_local: study_local.value,
        internet_quality: internet_quality.value,
      };

      api({ url: '/socioeconomic', method: 'POST', data: socioeconomicData })
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

  return { createSocioeconomic, loading, feedbackError };
};

export default useSocioeconomic;
