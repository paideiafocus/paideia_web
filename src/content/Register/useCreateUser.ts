import { AxiosResponse, AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import api from '../../utils/api';

interface IFeedback {
  type: '' | 'danger' | 'success';
  message: string;
}

interface ICreateUser {
  loading: boolean;
  feedback: IFeedback;
  createUser: any;
}

interface IField {
  value: string;
  error: string;
}

interface IUser {
  name: IField;
  lastname: IField;
  email: IField;
  confirm_email: IField;
  password: IField;
  confirm_password: IField;
}

interface ISuccessResponse {
  name: string;
  email: string;
}

interface IErrorResponse {
  message: string;
}

const useCreateUser = (): ICreateUser => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<IFeedback>({
    type: '',
    message: '',
  });

  const createUser = useCallback((user: IUser, setOpenModal: any) => {
    setLoading(true);

    const {
      name,
      lastname,
      email,
      confirm_email,
      password,
      confirm_password,
    } = user;

    if (email.value !== confirm_email.value) {
      setFeedback({
        type: 'danger',
        message:
          'E-mail e confirme seu e-mail estão diferentes. Tente novamente.',
      });
      setOpenModal(true);
      setLoading(false);
      return;
    }

    if (password.value !== confirm_password.value) {
      setFeedback({
        type: 'danger',
        message:
          'Sua senha e confirmação de senha estão diferentes. Tente novamente.',
      });
      setOpenModal(true);
      setLoading(false);
      return;
    }

    const newUser = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    };

    api({ url: '/users', method: 'POST', data: newUser })
      .then(({ data }: AxiosResponse<ISuccessResponse>) => {
        setOpenModal(true);
        setFeedback({
          type: 'success',
          message: `${data.name}, seu cadastro foi realizado com sucesso! Enviamos ao seu e-mail ${data.email} maiores informações para dar sequência ao seu acesso ao sistema`,
        });
      })
      .catch(({ response: { data } }: AxiosError<IErrorResponse>) => {
        setOpenModal(true);
        setFeedback({
          type: 'danger',
          message: data.message,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  return { createUser, loading, feedback };
};

export default useCreateUser;
