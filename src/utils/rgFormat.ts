const rgFormat = (value: string): string => {
  if (value.length > 12) {
    return value.substring(0, value.length - 1);
  }

  let rg = value;

  rg = rg.replace(/\D/g, '');
  rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');

  return rg;
};

export default rgFormat;
