import { View, Text } from 'react-native';
import { useBackgroundColor } from '../../contexts/BackgroundContext';
import { AntDesign } from '@expo/vector-icons';
import { JSX } from 'react';

type InfoCardProps = {
    title: string;
    icon: JSX.Element | string;
    value: string;
    subValue: string;
};

const InfoCard = ({ title, icon, value, subValue }: InfoCardProps) => {
    const bgColor = useBackgroundColor();
    return (
        <>
            <View className="w-[47%] gap-2 rounded-2xl bg-white px-6 py-6">
                <View className="flex flex-row items-center  w-full gap-2">
                    <View className={`p-2 ${bgColor} rounded-full`}>{icon}</View>
                    <Text className="font-quick text-lg text-primary">{title}</Text>
                </View>
                <View className="gap-2">
                    <Text className="font-quick-semibold text-2xl text-primary">{value}</Text>
                    <Text className="font-quick text-lg text-primary">{subValue}</Text>
                </View>
            </View>
        </>
    );
};

export default InfoCard;
