interface IResultsData {
  name: string;
  lastname: string;
  question_id: string;
  user_id: string;
  modelo: number;
  pergunta: number;
  selecionado: 'a' | 'b' | 'c' | 'd';
  acertou: 's' | 'n';
  materia: string;
  fullname?: string;
  correct?: number;
}

interface IMaterias {
  name: string;
  correct: number;
}

interface IReduceResults {
  user_id: string;
  fullname: string;
  materias: IMaterias[];
}

const reduceResults = (resultsData: IResultsData[]): any => {
  const results: any = resultsData.reduce(
    (acc, { user_id, fullname, correct, materia }) => {
      const foundIndex = acc.findIndex(item => item.user_id === user_id);

      // já existe registro
      if (foundIndex !== -1) {
        const updateMateria = acc;
        const foundIndexMateria = acc.findIndex(item => item.name === materia);

        // já existe materia no registro
        if (foundIndexMateria !== -1) {
          const materiaList = updateMateria[foundIndex].materias;
          materiaList[foundIndexMateria] = {
            ...materiaList[foundIndexMateria],
            correct: materiaList[foundIndexMateria].correct + correct,
          };
          updateMateria[foundIndex] = {
            ...updateMateria[foundIndex],
            materias: materiaList,
          };
        } else {
          updateMateria[foundIndex] = {
            ...updateMateria[foundIndex],
            materias: [
              ...updateMateria[foundIndex].materias,
              { name: materia, correct },
            ],
          };
        }

        return [...updateMateria];
      }

      const info = {
        user_id,
        fullname,
        materias: [{ name: materia, correct }],
      };

      return [...acc, info];
    },
    []
  );

  return results;
};

export default reduceResults;
