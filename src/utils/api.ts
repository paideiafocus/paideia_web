import axios, {
  AxiosInstance,
  AxiosPromise,
  Method,
  ResponseType,
} from 'axios';

interface IHeaders {
  'Content-Type': string;
  Authorization?: string;
}

interface IConfig {
  responseType: ResponseType;
  headers: IHeaders;
  baseURL: string;
}

interface IApi {
  url: string;
  method?: Method;
  data?: unknown;
}

const config: IConfig = {
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: `${process.env.URL_API}`,
  baseURL: `http://localhost:3333`,
};

const api = ({ url, method, data }: IApi): AxiosPromise<AxiosInstance> => {
  const token = localStorage && localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const instance = axios.create(config);

  const request: IApi = {
    method: method || 'GET',
    url,
  };

  if (data) {
    request.data = data;
  }

  return instance(request);
};

export default api;
