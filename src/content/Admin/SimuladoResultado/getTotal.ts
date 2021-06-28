interface IMaterias {
  name: string;
  correct: number;
}

const getTotal = (materias: IMaterias[]): number =>
  materias.reduce((acc, curr) => acc + curr.correct, 0);

export default getTotal;
