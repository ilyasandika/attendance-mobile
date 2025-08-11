import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TextStyle,
    ViewStyle,
    ScrollView, Pressable,
} from 'react-native';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';
import ScreenWrapper from '../components/ScreenWraper';
import { useBackgroundColor } from '../../contexts/BackgroundContext';
import HorizontalDatePicker from '../components/HorizontalDatePicker';
import { AntDesign, Feather } from '@expo/vector-icons';
import InfoCard from '../components/InfoCard';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../utils/helper';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    const bgColor = useBackgroundColor();
    const [expendedItemId, setExpendedItemId] = useState<string>("");
    const [expended, setExpended] = useState<boolean>(false);
    const {t} = useTranslation();

    return (
        <ScreenWrapper>
            <View className={`flex-1 ${bgColor}`}>
                <ScrollView contentContainerStyle={{ padding: 20 }} className="">
                    <HorizontalDatePicker />
                    <Text className="mb-4 mt-4 font-quick-semibold text-xl ">
                        {capitalize(t('attendanceInformation'))}
                    </Text>
                    <View className="mb-4 w-full flex-row flex-wrap items-center gap-x-4 gap-y-4">
                        <InfoCard
                            title="Check In"
                            icon={<AntDesign name={'login'} size={14} />}
                            value="07:00 WIB"
                            subValue="Early Arrival"
                        />
                        <InfoCard
                            title="Check Out"
                            icon={<AntDesign name={'logout'} size={14} />}
                            value="17:00 WIB"
                            subValue="On Time"
                        />
                        <InfoCard
                            title="Total Hours"
                            icon={<AntDesign name={'clockcircleo'} size={14} />}
                            value="07:00"
                            subValue="Working Hours"
                        />
                        <InfoCard
                            title="Break Time"
                            icon={<Feather name={'coffee'} size={14} />}
                            value="01 Hours"
                            subValue="12:00 - 13:00"
                        />
                    </View>


                    {/*table*/}

                    <View className="w-full bg-white rounded-2xl p-4 px-6">
                        <Text className="w-full border-b border-gray-500 py-2 text-lg font-quick-semibold mb-4">Your Attendance Record</Text>
                        <View className="gap-4">
                        {/*item*/}
                            <Pressable className="flex flex-row justify-between items-center gap-4" onPress={() => setExpended(!expended)}>
                                <View>
                                    <Text className="font-quick-bold text-lg">Ilyas Andika</Text>
                                    <Text className="font-quick-medium text-lg">Jabatan</Text>
                                </View>
                                <View>
                                    <Text className="font-quick-medium text-lg text-right">07:00 - 10:00</Text>
                                    <Text className="font-quick-medium">08 August 2025</Text>
                                </View>
                            </Pressable>

                            {expended && (
                                <View className="gap-3 p-4 border border-gray-200">
                                    <View className="flex flex-row justify-between items-center gap-4">
                                        <Text className="font-quick-bold">ID</Text>
                                        <Text className="font-quick-medium">2314141</Text>
                                    </View>
                                    <View className="flex flex-row justify-between items-center gap-4">
                                        <Text className="font-quick-bold">Role</Text>
                                        <Text className="font-quick-medium">Helpdesk Support</Text>
                                    </View>
                                    <View className="flex flex-row justify-between items-center gap-4">
                                        <Text className="font-quick-bold">Status</Text>
                                        <Text className="font-quick-medium">On Time</Text>
                                    </View>
                                    <View className="flex flex-row justify-between items-center gap-4">
                                        <Text className="font-quick-bold">Work Hours</Text>
                                        <Text className="font-quick-medium">8 Hours</Text>
                                    </View>
                                </View>
                            )}
                        </View>


                    </View>





                    <View className="mb-20" />
                </ScrollView>








                {/* flying button */}
                <TouchableOpacity
                    onPress={() => console.log('Button ditekan')}
                    className="absolute bottom-6 right-6 rounded-full bg-primary p-4 shadow-lg"
                >
                    {/* Bisa ganti Text ini dengan Icon juga */}
                    <Text className="text-lg font-bold text-white">+ Check In</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}
