import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { RootStackParamList } from '../types/navigationTypes';
import useAppNavigation from '../hooks/useAppNavigation';
import authServices from '../../services/authServices';
import ErrorList from '../components/error/ErrorList';
import AsyncStorage from '@react-native-async-storage/async-storage';

type errorsType = {
    employeeId?: string[];
    password?: string[];
};

export default function LoginScreen() {
    const navigation = useAppNavigation();
    const [checked, setChecked] = useState(false);
    const [errors, setErrors] = useState<errorsType>({});
    const [generalErrors, setGeneralErrors] = useState<string[]>([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await authServices.login({ employeeId: username, password });
            const { token } = response.data.payload;
            await AsyncStorage.setItem('token', token);
            navigation.navigate('Main');
        } catch (err: any) {
            if (err && err.status === 422) {
                setErrors({ ...errors, ...err.data.errors });
            } else {
                setGeneralErrors(err.data.errors);
            }
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-white pb-10">
            <View className="mb-10 flex w-full flex-col items-center">
                <Text className="mb-2 font-quick-bold text-4xl text-primary">Welcome!</Text>
                <Text className="mb-4 font-quick-bold text-xl text-gray-500">
                    Please enter your details
                </Text>
            </View>
            <View className="flex w-full flex-col items-center">
                <ErrorList errors={generalErrors} className="" />
                <TextInput
                    onChangeText={text => {
                        setUsername(text);
                        setErrors({ ...errors, employeeId: undefined });
                        setGeneralErrors([]);
                    }}
                    placeholder="Username"
                    className="mb-4 w-4/5 border-b-2 font-quick-bold text-lg text-primary"
                />
                <ErrorList errors={errors.employeeId} className="mb-4" />

                <TextInput
                    onChangeText={text => {
                        setPassword(text);
                        setErrors({ ...errors, password: undefined });
                        setGeneralErrors([]);
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    className="mb-4 w-4/5 border-b-2 font-quick-bold text-lg text-primary"
                />
                <ErrorList errors={errors.password} className="mb-4" />
            </View>

            <View className="mt-2 w-4/5 flex-row items-center justify-between px-1">
                <Pressable
                    onPress={() => setChecked(!checked)}
                    className="flex-row items-center gap-2"
                >
                    <View className="h-5 w-5 items-center justify-center rounded border-2 border-primary">
                        {checked && <Text className="text-sm text-primary">✔️</Text>}
                    </View>
                    <Text className="font-quick text-sm">Remember Me</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        /* ganti dengan navigasi atau handler */
                    }}
                >
                    <Text className="font-quick text-sm text-primary underline">
                        Forgot Password?
                    </Text>
                </Pressable>
            </View>
            <Pressable
                className="mt-8 h-14 w-4/5 items-center justify-center rounded-full bg-primary py-3"
                onPress={() => handleSubmit()}
            >
                <Text className="text-center font-quick-semibold text-white">Log In</Text>
            </Pressable>
        </View>
    );
}
