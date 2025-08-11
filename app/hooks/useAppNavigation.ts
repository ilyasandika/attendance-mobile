import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';

const useAppNavigation = () => {
    return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useAppNavigation;
