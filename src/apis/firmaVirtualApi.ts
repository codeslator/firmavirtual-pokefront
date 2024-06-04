import axios, { AxiosInstance } from 'axios';
import { environment } from '../global';

export const firmaVirtualApi: AxiosInstance = axios.create({
  baseURL: environment.FIRMAVIRTUAL_API_URL,
});