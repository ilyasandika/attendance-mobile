import { View, Text } from 'react-native';
import ScreenWrapper from '../components/ScreenWraper';

export default function SettingsScreen() {
    return (
        <ScreenWrapper>
            <View className="flex-1 items-center justify-center bg-white">
                <Text className="text-2xl font-bold">Ini Halaman Settings</Text>
            </View>
        </ScreenWrapper>
    );
}
