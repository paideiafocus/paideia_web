/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Page from '@/components/Page';
import Alert from '@/components/Alert';
import api from '@/utils/api';
import ButtonForm from '@/components/ButtonForm';
import InitialTerm from './InitialTerm';
import * as S from './styles';

interface IRadio extends HTMLElement {
  checked?: boolean;
}

const Simulado = () => {
  // EVITA COPIAR CONTEUDO:
  // oncontextmenu="return false" ondragstart="return false" onselectstart="return false"
  const [retorno, setRetorno] = useState<any>();
  const [modelo, setModelo] = useState();
  const [iniTempo, setIniTempo] = useState<string>();
  const [fimTempo, setFimTempo] = useState<string>();
  const [inicio, setInicio] = useState(true);
  const [selecionado, setSelecionado] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const loadInfoSimulado = useCallback(async () => {
    setLoading(true);

    const modeloResponse = await api({ url: '/modelo' })
      .then(({ data }) => data.numeroModelo)
      .catch(() => 'ERRO 1');
    setModelo(modeloResponse);

    const retornoResponse = await api({ url: '/simulado' })
      .then(({ data }) => data[0])
      .catch(() => 'ERRO 2');
    setRetorno(retornoResponse);

    setInicio(() => !retornoResponse);

    await api({ url: '/alunosimulado' }).then(({ data }) => {
      if (data[0]) {
        setIniTempo(data[0].horaInicio);
        setFimTempo(data[0].horaFimMax);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    // caso o aluno ja tenha respondido todas as questões
    // this.getGabaritoSimples(this.idUser);

    loadInfoSimulado();
  }, [loadInfoSimulado]);

  const verificaHoraFim = useCallback(horaFim => {
    let horaFimFinal = '00';
    // ADICIONANDO 2 HORAS, LOGO TOTAL DE 2 HORAS DE DURAÇÃO DE SIMULADO MAXIMO
    if (Number(horaFim) + 2 < 24) {
      horaFimFinal = horaFim + 2;
    }
    return horaFimFinal;
  }, []);

  // pega data inicial e final do aluno
  const getHoraInicioFim = useCallback(async () => {
    const data = new Date();
    const horaIni = `00${data.getHours()}`;
    const minutoIni = `00${data.getMinutes()}`;
    const segundoIni = `00${data.getSeconds()}`;
    const horaFim = `00${verificaHoraFim(data.getHours())}`;
    const minutoFim = `00${data.getMinutes()}`;
    const segundoFim = `00${data.getSeconds()}`;

    const iniTempoFormated = `${horaIni.slice(-2)}:${minutoIni.slice(
      -2
    )}:${segundoIni.slice(-2)}`;
    const fimTempoFormated = `${horaFim.slice(-2)}:${minutoFim.slice(
      -2
    )}:${segundoFim.slice(-2)}`;

    setIniTempo(iniTempoFormated);
    setFimTempo(fimTempoFormated);

    await api({
      url: '/alunosimulado',
      method: 'POST',
      data: { horaInicio: iniTempoFormated, horaFimMax: fimTempoFormated },
    });
  }, [verificaHoraFim]);

  const iniciarSimulado = useCallback(async () => {
    window.scrollTo(0, 0);

    const retornoResponse = await api({ url: `/simuladoq1/${modelo}` }).then(
      ({ data }) => data[0]
    );

    setRetorno(retornoResponse);
    setInicio(false);
    getHoraInicioFim();
  }, [getHoraInicioFim, modelo]);

  const handleSelectAnswer = useCallback(event => {
    const { value } = event.currentTarget;
    setSelecionado(value);
  }, []);

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();

      await api({
        url: '/simulado',
        method: 'POST',
        data: {
          modelo: retorno.modelo,
          pergunta: retorno.pergunta,
          selecionado,
        },
      });

      setSelecionado('');
      const radioA: IRadio = document.getElementById('opcao-a');
      const radioB: IRadio = document.getElementById('opcao-b');
      const radioC: IRadio = document.getElementById('opcao-c');
      const radioD: IRadio = document.getElementById('opcao-d');
      radioA.checked = false;
      radioB.checked = false;
      radioC.checked = false;
      radioD.checked = false;

      // quando for respondida a ultima pergunta, COLOCAR Nº DA ULTIMA PERGUNTA
      if (retorno.pergunta === 24) {
        // FINALIZAR SIMULADO E IR AO GABARITO
        //  this.router.navigate(["/gabarito-simples"]);
      } else {
        // PASSAR PARA PROXIMA ALTERNATIVA
        loadInfoSimulado();
        window.scrollTo(0, 0);
      }
    },
    [loadInfoSimulado, retorno, selecionado]
  );

  const answers = useMemo(() => ['resp_a', 'resp_b', 'resp_c', 'resp_d'], []);

  return (
    <Page align="center">
      <h2>Simulado</h2>

      <Alert kind="paideia">
        <S.InfosInitialAlert>
          <p>
            <b>
              ATENÇÃO! Caso ocorra de não aparecer as alternativas das questões
              realize o seguinte procedimento:
            </b>
          </p>
          <ol>
            <li>
              Atualize sua página, clicando CTRL + F5 (recarrega navegador
              limpando o cache).
            </li>
            <li>Saia de sua conta, em seguida realize o login novamente. </li>
            <li>
              Verifique a versão de seu navegador, se necessário realize a
              atualização do navegador (apenas Chrome e FireFox devem ser
              usados).
            </li>
          </ol>
        </S.InfosInitialAlert>
      </Alert>

      {loading && (
        <S.LoadingContainer>
          <CircularProgress color="secondary" />
        </S.LoadingContainer>
      )}

      {/* inicio do simulado */}
      {!loading && inicio && <InitialTerm iniciarSimulado={iniciarSimulado} />}

      {/* ja iniciou simulado */}
      {!loading && !inicio && retorno && (
        <div>
          <div className="text-center">
            <p>Você iniciou o simulado as {iniTempo} </p>
            <p className="mt-1">
              <u>
                <b>ATENÇÃO!</b> O simulado deve ser concluído antes das
                <b> {fimTempo}</b>
              </u>
            </p>
          </div>
          <br />

          <S.Form>
            <table>
              <thead>
                <tr>
                  <th className="col-2 bordas text-center questao flex-center">
                    <u>
                      <div className="ques">Questão</div>
                      {retorno.pergunta}
                    </u>
                  </th>
                  <td className="col-10 bordas flex-center-align">
                    <div>
                      <h4>{retorno.materia}</h4>
                      <div className="p-2">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: retorno.enunciado,
                          }}
                        />
                        <img
                          src={retorno.img}
                          alt={`${retorno.pergunta} ${retorno.materia}`}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </thead>

              <tbody>
                {answers.map(answer => (
                  <tr key={answer}>
                    <td>
                      {`${answer.slice(5)})`}

                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="selecionado"
                          id={`opcao-${answer.slice(5)}`}
                          value={answer.slice(5)}
                          onChange={handleSelectAnswer}
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: retorno[answer],
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ButtonForm
              type="submit"
              onClick={onSubmit}
              disabled={!selecionado}
            >
              Confirmar
            </ButtonForm>
          </S.Form>
        </div>
      )}
    </Page>
  );
};

export default memo(Simulado);
