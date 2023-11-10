import axios, { AxiosError, AxiosResponse } from 'axios';
import { environment } from '../environment/environment';

const { baseURL } = environment || {};
const commonConfig = {
  timeout: 60 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};
export const vauxAPI = (token:any = '') => {
    const vauxInstance = axios.create({
      ...commonConfig,
      baseURL: baseURL,
    });
  
    vauxInstance.interceptors.request.use(
      (config) => {
        if (token && config.headers) {
          config.headers['Authorization'] = `Bearer ${token}` || '';
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  
    vauxInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        const { response, request } = error || {};
        if (error.status === 401) {

        }
        return Promise.reject(response || request);
      }
    );
    return vauxInstance;
  };