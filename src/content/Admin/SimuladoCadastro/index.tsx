/* eslint-disable react/no-danger */
import { memo, useEffect, useCallback, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  resp_e: field,
  correta: field,
  img: field,
};

const selectOptions = [
  'Português',
  'Matemática',
  'Física',
  'Biologia',
  'História',
  'Química',
  'Geografia',
  'Sociologia',
  'Filosofia',
  'Gramática',
  'Literatura',
  'Arte',
  'Inglês',
];

const alternatives = ['resp_a', 'resp_b', 'resp_c', 'resp_d', 'resp_e'];

const SimuladoCadastro = () => {
  const [questionsQuantity, setQuestionsQuantity] = useState<number>(0);
  const [question, setQuestion] = useState(FORM);
  const [isFormError, setIsFormError] = useState(true);
  const [loadingQuantity, setLoadingQuantity] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { loading, createQuestion } = useCreateQuestion();

  const handleOpenOrCloseModal = useCallback(
    () => setModalIsOpen(oldState => !oldState),
    []
  );

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
          <ButtonForm onClick={handleOpenOrCloseModal}>Preview</ButtonForm>
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

        <Dialog
          open={modalIsOpen}
          onClose={handleOpenOrCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ minWidth: '100%' }}>
                <table>
                  <thead>
                    <tr style={{ border: '1rem solid black' }}>
                      <th style={{ textAlign: 'center' }}>
                        <u>
                          <div className="ques">Questão</div>
                          {Number(questionsQuantity) + 1}
                        </u>
                      </th>
                      <td className="col-10 bordas flex-center-align">
                        <div>
                          <h4>{question.materia.value}</h4>
                          <div className="p-2">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: question.enunciado.value,
                              }}
                            />

                            {question.img.value && (
                              <img
                                src={question.img.value}
                                alt={`${Number(questionsQuantity) + 1} ${question.materia.value
                                  }`}
                                style={{ width: '100%', marginTop: '1rem' }}
                              />
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          fontWeight: 'bolder',
                          minHeight: '6rem',
                        }}
                      >
                        a)
                      </td>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: question.resp_a.value,
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          fontWeight: 'bolder',
                          minHeight: '6rem',
                        }}
                      >
                        b)
                      </td>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: question.resp_b.value,
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          fontWeight: 'bolder',
                          minHeight: '6rem',
                        }}
                      >
                        c)
                      </td>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: question.resp_c.value,
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          fontWeight: 'bolder',
                          minHeight: '6rem',
                        }}
                      >
                        d)
                      </td>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: question.resp_d.value,
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          fontWeight: 'bolder',
                          minHeight: '6rem',
                        }}
                      >
                        e)
                      </td>
                      <td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: question.resp_e.value,
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpenOrCloseModal} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Page>
  );
};

export default memo(SimuladoCadastro);
