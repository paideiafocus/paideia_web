import api from './api';

const isLogged = async (): Promise<boolean> => {
  const response = await api({ url: '/users/validate/token' })
    .then(({ status }) => status === 204)
    .catch(() => false);

  return response;
};

export default isLogged;
