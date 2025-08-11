import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utils/api';

const AuthServices = {
    login: async (data: object) => {
        try {
            return await api.post('/login', data, {
                headers: {
                    Accept: 'application/json',
                },
            });
        } catch (error: any) {
            throw error.response || 'Something went wrong';
        }
    },

    logout: async () => {
        try {
            const response = await api.get('/logout');
            await AsyncStorage.removeItem('token');
            return response;
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    },
};

export default AuthServices;
