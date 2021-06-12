const cpfFormat = (value: string): string => {
  if (value.length > 14) {
    return value.substring(0, value.length - 1);
  }

  let cpf = value;

  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
};

export default cpfFormat;
