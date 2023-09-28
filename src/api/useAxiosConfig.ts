import axios from 'axios';
import { StorageEnum } from '../types';

const BASE_URL = 'https://glamorous-tuna-lapel.cyclic.app';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

// Add an interceptor to include the Authorization header
 axiosPrivate.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem(StorageEnum.StorageString)?.toString();
        

        if (accessToken !== "") {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
        }, (error) => Promise.reject(error)
    );

  export default axiosPrivate;