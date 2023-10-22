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
export const vauxAPI = (token = '') => {
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
        return Promise.reject(response || request);
      }
    );
    return vauxInstance;
  };