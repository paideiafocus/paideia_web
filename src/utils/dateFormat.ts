const dateFormat = (value: string): string => {
  if (value.length > 10) {
    return value.substring(0, value.length - 1);
  }

  let date = value;

  date = date.replace(/\D/g, '');
  date = date.replace(/(\d{2})(\d)/, '$1/$2');
  date = date.replace(/(\d{2})(\d)/, '$1/$2');

  return date;
};

export default dateFormat;
