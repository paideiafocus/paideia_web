import { memo } from 'react';
import Page from '@/components/Page';

import rules from './rules.json';

const Term = () => {
  console.log(rules);
  return (
    <Page>
      <div>
        <h1>INSCRIÇÃO 1º SEMESTRE 2021</h1>

        <div>
          <h3>TERMO DE RESPONSABILIDADE - REGRAS DE FREQUÊNCIA E CONDUTA</h3>
          <b>
            Ao se inscrever no CURSINHO FOCUS da ASSOCIAÇÃO PAIDEIA, o (a) aluno
            (a) assume a responsabilidade de cumprir e respeitar as seguintes
            normas:
          </b>

          <div id="termo">
            <ol>
              {rules.map(rule => (
                <li key={rule}>
                  <div>{rule}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="col-sm-12 mt-3">
            <div className="alert alert-warning" role="alert">
              Baixe o termo e realize seu preenchimento, guarde esse documento
              pois em etapas futuras será pedido que seja enviado o termo
              durante a inscrição.
              <a
                // style="font-weight: bold; color: blue;"
                href="../../../../../assets/pdf/termo_responsabilidade.pdf"
                target="_blank"
              >
                Baixar termo
              </a>
            </div>
          </div>

          {/* <div class="confirma-termos">
      <input
        type="checkbox"
        [(ngModel)]="theCheckbox"
        data-md-icheck
        (change)="toggleVisibility($event)"
        id="checkbox-confirma-termos"
      />
      <label for="checkbox-confirma-termos" class="ml-2"
        >Li e aceito os termos de responsabilidade.</label
      >
    </div> */}

          {/* <div class="text-center">
      <button *ngIf="!marked" class="btn btn-success mt-3" disabled="true">
        Avançar
      </button>
      <button *ngIf="marked" class="btn btn-success mt-3" (click)="next()">
        Avançar
      </button>
    </div> */}
        </div>
      </div>
    </Page>
  );
};

export default memo(Term);
