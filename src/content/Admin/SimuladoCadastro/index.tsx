import { memo, useEffect, useCallback, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';
import Page from '@/components/Page';
import api from '@/utils/api';
import ButtonForm from '@/components/ButtonForm';
import * as S from './styles';
import useCreateQuestion from './useCreateQuestion';

const field = { value: '', error: '' };

const FORM = {
  materia: field,
  enunciado: field,
  resp_a: field,
  resp_b: field,
  resp_c: field,
  resp_d: field,
  correta: field,
  img: field,
};

const selectOptions = [
  'Física',
  'Biologia',
  'História',
  'Química',
  'Geografia',
  'Matemática',
  'Sociologia',
  'Filosofia',
  'Gramática',
  'Literatura',
];

const alternatives = ['resp_a', 'resp_b', 'resp_c', 'resp_d'];

const SimuladoCadastro = () => {
  const [questionsQuantity, setQuestionsQuantity] = useState<number>(0);
  const [question, setQuestion] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const [loadingQuantity, setLoadingQuantity] = useState(true);
  const { loading, createQuestion } = useCreateQuestion();

  const loadQuestionsQuantity = useCallback(async () => {
    setLoadingQuantity(true);
    await api({ url: '/cadastraSimulado' }).then(({ data }) => {
      setQuestionsQuantity(data.qtdPerguntas);
    });
    setLoadingQuantity(false);
  }, []);

  useEffect(() => {
    loadQuestionsQuantity();
  }, [loadQuestionsQuantity]);

  const handleChangeField = useCallback(
    event => {
      const { value, name } = event.target;
      let error = !value ? 'campo é obrigatório' : '';

      if (name === 'img') {
        error = '';
      }

      const newQuestion = {
        ...question,
        [name]: {
          value,
          error,
        },
      };

      setQuestion(() => newQuestion);

      const formError = Object.keys(newQuestion).some(
        key => key !== 'img' && !newQuestion[key].value
      );

      setIsFormError(() => formError);
    },
    [question]
  );

  const onSubmit = useCallback(async () => {
    createQuestion(question, Number(questionsQuantity) + 1);

    if (window) {
      window.scrollTo(0, 0);
      window.location.reload();
    }

    setQuestion(FORM);
  }, [createQuestion, question, questionsQuantity]);

  return (
    <Page>
      <h1>Cadastro Simulado</h1>

      <div>
        <h4>
          Questão
          {` ${Number(questionsQuantity) + 1 || 'Carregando...'}`}
        </h4>
        {loadingQuantity && <CircularProgress color="secondary" />}
        <br />

        <S.GroupField>
          <span style={{ marginRight: '1rem' }}>Matéria:</span>
          <Select
            labelId="demo-select-materia"
            id="select-materia"
            name="materia"
            value={question.materia.value}
            onChange={handleChangeField}
            displayEmpty
            error={Boolean(question.materia.error)}
          >
            <MenuItem value="">
              <em>Selecione</em>
            </MenuItem>

            {selectOptions.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </S.GroupField>

        <S.GroupField>
          <TextField
            id="img"
            name="img"
            label="Possui imagem? Se sim coloque o link no campo abaixo:"
            variant="outlined"
            size="small"
            value={question.img.value}
            helperText={question.img.error}
            error={Boolean(question.img.error)}
            onChange={handleChangeField}
            onBlur={handleChangeField}
          />
        </S.GroupField>

        <S.GroupField>
          <TextField
            id="enunciado"
            name="enunciado"
            label="Enunciado"
            variant="outlined"
            size="small"
            value={question.enunciado.value}
            helperText={question.enunciado.error}
            error={Boolean(question.enunciado.error)}
            onChange={handleChangeField}
            onBlur={handleChangeField}
            multiline
            rows={16}
          />
        </S.GroupField>

        <S.GroupField>
          <S.Table>
            {alternatives.map(alternative => (
              <tr key={alternative}>
                <th>{`${alternative.slice(5)})`}</th>
                <td>
                  <TextField
                    id={alternative}
                    name={alternative}
                    label={`Escreva a resposta ${alternative
                      .slice(5)
                      .toUpperCase()} aqui.`}
                    variant="outlined"
                    size="small"
                    value={question[alternative].value}
                    helperText={question[alternative].error}
                    error={Boolean(question[alternative].error)}
                    onChange={handleChangeField}
                    onBlur={handleChangeField}
                    multiline
                    rows={3}
                  />
                </td>
              </tr>
            ))}
          </S.Table>
        </S.GroupField>

        <S.GroupField>
          <span style={{ fontSize: '1.1rem' }}>Correta?</span>
          <Select
            labelId="demo-select-correta"
            id="select-correta"
            name="correta"
            value={question.correta.value}
            onChange={handleChangeField}
            displayEmpty
            error={Boolean(question.correta.error)}
            style={{ marginTop: '1rem' }}
          >
            <MenuItem value="">
              <em>Selecione</em>
            </MenuItem>

            {alternatives.map(option => (
              <MenuItem key={option} value={option.slice(5)}>
                {option.slice(5)}
              </MenuItem>
            ))}
          </Select>
        </S.GroupField>

        <S.GroupField center>
          <ButtonForm
            onClick={onSubmit}
            disabled={isFormError}
            loading={loading}
          >
            Salvar
          </ButtonForm>
        </S.GroupField>
      </div>
    </Page>
  );
};

export default memo(SimuladoCadastro);
