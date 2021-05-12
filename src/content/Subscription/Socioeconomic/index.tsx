import { memo, useCallback, useState, useEffect } from 'react';
import Page from '@/components/Page';
import { Button, Checkbox, Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useRouter } from 'next/router';

import * as S from './styles';
import questionsOneAnswer from './questionsOneAnswer.json';
import questionsMultipleAnswer from './questionsMultipleAnswer.json';

interface IMultiple {
  label: string;
  fieldName: string;
}

interface IQuestionMultipleAnswer {
  id: number;
  text: string;
  answers: IMultiple[];
}

interface IQuestionOneAnswer {
  id: number;
  fieldName: string;
  text: string;
  answers: string[];
}

const FORM = {
  genre: { value: '', error: '' },
  cinema: { value: false, error: '' },
  sports: { value: false, error: '' },
  exam_entrance: { value: '', error: '' },
  elementary_school: { value: '', error: '' },
  age: { value: '', error: '' },
  informed: { value: '', error: '' },
  internet: { value: '', error: '' },
  internet_activity: { value: false, error: '' },
  reading_activity: { value: false, error: '' },
  read: { value: '', error: '' },
  read_qtd: { value: '', error: '' },
  place: { value: '', error: '' },
  high_school: { value: '', error: '' },
  live_with_friend: { value: false, error: '' },
  live_with_grandfather: { value: false, error: '' },
  live_with_couple: { value: false, error: '' },
  live_with_mother: { value: false, error: '' },
  live_with_father: { value: false, error: '' },
  live_with_alone: { value: false, error: '' },
  live_qtd: { value: '', error: '' },
  live_time: { value: '', error: '' },
  live_type: { value: '', error: '' },
  study_why: { value: '', error: '' },
  music: { value: false, error: '' },
  no_activity: { value: false, error: '' },
  tv: { value: false, error: '' },
  work_candidate: { value: '', error: '' },
  work_study: { value: '', error: '' },
  work_father: { value: '', error: '' },
  transport: { value: '', error: '' },
};

const fieldsActivity = [
  'no_activity',
  'sports',
  'internet_activity',
  'reading_activity',
  'cinema',
  'music',
  'tv',
];

const fieldsLive = [
  'live_with_friend',
  'live_with_grandfather',
  'live_with_couple',
  'live_with_mother',
  'live_with_father',
  'live_with_alone',
];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const fieldsBoolean = [...fieldsActivity, ...fieldsLive];

const Socioeconomic = () => {
  const [socioeconomic, setSocioeconomic] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (window) {
      window.scroll(0, 0);
    }
  }, []);

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/conclui');
  }, [router]);

  const handleChangeField = useCallback(
    event => {
      const { value, name } = event.currentTarget;
      const error = !value ? 'campo é obrigatório' : '';
      let newValue = value;

      if (fieldsBoolean.includes(name)) {
        newValue = !socioeconomic[name].value;
      }

      const newSocioeconomic = {
        ...socioeconomic,
        [name]: {
          value: newValue,
          error,
        },
      };

      setSocioeconomic(() => newSocioeconomic);

      const validRadioButton = Object.keys(newSocioeconomic).some(
        key => !newSocioeconomic[key].value && !fieldsBoolean.includes(key)
      );
      const validActivityField = fieldsActivity.some(
        key => newSocioeconomic[key].value
      );
      const validLiveField = fieldsLive.some(
        key => newSocioeconomic[key].value
      );

      const formError =
        validRadioButton || !validActivityField || !validLiveField;

      setIsFormError(() => formError);
    },
    [socioeconomic]
  );

  return (
    <Page align="center">
      <h2>SOCIOECONÔMICO</h2>

      <S.Form>
        <Grid container spacing={3}>
          {questionsOneAnswer.map((question: IQuestionOneAnswer) => (
            <Grid
              item
              xs={12}
              lg={4}
              key={question.id}
              style={{ margin: '1.5rem 0' }}
            >
              <FormControl component="fieldset">
                <FormLabel
                  component="legend"
                  style={{
                    textAlign: 'initial',
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  {`${question.id}) ${question.text}`}
                </FormLabel>
                <RadioGroup
                  aria-label={question.fieldName}
                  name={question.fieldName}
                  onChange={handleChangeField}
                >
                  {question.answers.map((answer, index) => (
                    <FormControlLabel
                      value={answer}
                      control={<Radio color="primary" />}
                      label={`${letters[index]}) ${answer}`}
                      key={answer}
                      style={{ textAlign: 'initial' }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          ))}

          {questionsMultipleAnswer.map((question: IQuestionMultipleAnswer) => (
            <Grid item xs={12} lg={4} key={question.id}>
              <FormControl component="fieldset">
                <FormLabel
                  component="legend"
                  style={{
                    textAlign: 'initial',
                    fontWeight: 'bold',
                    color: '#000',
                  }}
                >
                  {`${question.id}) ${question.text}`}
                </FormLabel>
                {question.answers.map((answer, index) => (
                  <FormControlLabel
                    value
                    control={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <Checkbox
                        checked={socioeconomic[answer.fieldName].value}
                        onChange={handleChangeField}
                        name={answer.fieldName}
                        color="primary"
                      />
                    }
                    label={`${letters[index]}) ${answer.label}`}
                    key={answer.fieldName}
                    style={{ textAlign: 'initial' }}
                  />
                ))}
              </FormControl>
            </Grid>
          ))}
        </Grid>

        <S.ButtonContainer>
          <Button
            variant="contained"
            color="secondary"
            disabled={isFormError}
            onClick={handleNavigation}
          >
            Salvar dados socioeconômicos
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Socioeconomic);
