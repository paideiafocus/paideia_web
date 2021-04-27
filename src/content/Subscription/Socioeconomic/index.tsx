/* eslint-disable prettier/prettier */
import { memo, useCallback, useState } from 'react';
import Page from '@/components/Page';
import { Button, Checkbox, Grid, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useRouter } from 'next/router';

import * as S from './styles';
import questionsOneAnswer from './questionsOneAnswer.json';
import questionsMultipleAnswer from './questionsMultipleAnswer.json';

// cinema,
// sports,
// exam_entrance,
// elementary_school,
// age, X
// informed,
// internet,
// internet_activity,
// reading_activity,
// read,
// read_qtd,
// place, X
// high_school,
// live_with_friend,
// live_with_grandfather,
// live_with_couple,
// live_with_mother,
// live_with_father,
// live_with_alone,
// live_qtd,
// live_time, X
// live_type,
// study_why,
// music,
// no_activity,
// genre, Gênero
// tv,
// work_candidate,
// work_study,
// work_father,
// transport,

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
  cinema: { value: '', error: '' },
  sports: { value: '', error: '' },
  exam_entrance: { value: '', error: '' },
  elementary_school: { value: '', error: '' },
  age: { value: '', error: '' },
  informed: { value: '', error: '' },
  internet: { value: '', error: '' },
  internet_activity: { value: '', error: '' },
  reading_activity: { value: '', error: '' },
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
  music: { value: '', error: '' },
  no_activity: { value: '', error: '' },
  tv: { value: '', error: '' },
  work_candidate: { value: '', error: '' },
  work_study: { value: '', error: '' },
  work_father: { value: '', error: '' },
  transport: { value: '', error: '' },
};

const fieldsBoolean = [
  'live_with_friend',
  'live_with_grandfather',
  'live_with_couple',
  'live_with_mother',
  'live_with_father',
  'live_with_alone',
]

const Socioeconomic = () => {
  const [socioeconomic, setSocioeconomic] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    router.push('/inscricao/arquivos');
  }, [router]);

  const handleChangeField = useCallback(
    event => {
      const { value, name } = event.currentTarget;
      const error = !value ? 'campo é obrigatório' : '';
      let newValue = value;

      if(fieldsBoolean.includes(name)){
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

      // const formError = Object.keys(newPersonal).some(
      //   key => !newPersonal[key].value
      // );
      // setIsFormError(() => formError);
      // console.log('formError');
      // console.log(formError);
    },
    [socioeconomic]
  );

  console.log(socioeconomic);

  return (
    <Page align="center">
      <h2>SOCIOECONÔMICO</h2>

      <S.Form>
        <Grid container spacing={3}>
          {questionsOneAnswer.map((question: IQuestionOneAnswer) => (
            <Grid item xs={12} lg={4} key={question.id}>
              <FormControl component="fieldset">
                <FormLabel component="legend">{question.text}</FormLabel>
                <RadioGroup
                  aria-label={question.fieldName}
                  name={question.fieldName}
                  onChange={handleChangeField}
                >
                  {question.answers.map(answer => (
                    <FormControlLabel
                      value={answer}
                      control={<Radio color="primary" />}
                      label={answer}
                      key={answer}
                    />
                    ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          ))}

          {questionsMultipleAnswer.map((question: IQuestionMultipleAnswer) => (
            <Grid item xs={12} lg={4} key={question.id}>
              <FormControl component="fieldset">
                <FormLabel component="legend">{question.text}</FormLabel>
                {question.answers.map(answer => (
                  <FormControlLabel
                    value
                    control={(
                      <Checkbox
                        checked={socioeconomic[answer.fieldName].value}
                        onChange={handleChangeField}
                        name={answer.fieldName}
                        color="primary"
                      />
                        )}
                    label={answer.label}
                    key={answer.fieldName}
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
            Salvar dados pessoais
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </Page>
  );
};

export default memo(Socioeconomic);
