import axios from 'axios';
// import { getAuthToken } from "./helper";
import { Alert } from 'react-native';
import { API_URL } from '@env';
import asyncStorage from '@react-native-async-storage/async-storage/src/AsyncStorage';
import { navigate } from '../app/navigation/NavigationServices';
// const API_URL = 'http://192.168.232.213:8000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
});

api.interceptors.request.use(
    async config => {
        const token = await asyncStorage.getItem('token'); //
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Alert.alert("Session expired", "Please login again.");
            // navigate('login');
        }
        return Promise.reject(error);
    }
);

export default api;
