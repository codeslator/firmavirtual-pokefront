import axios, { AxiosInstance } from 'axios';
import { environment } from '../global';

export const stackRentApi: AxiosInstance = axios.create({
  baseURL: environment.FIRMAVIRTUAL_API_URL,
});