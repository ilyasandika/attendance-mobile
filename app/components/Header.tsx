import { Image, Pressable, Text, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import userServices from '../../services/userServices';
import { user } from '../types/userTypes';
import { API_URL } from '@env';

const Header = () => {
    const [user, setUser] = React.useState<user>();

    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await userServices.getCurrent();
                setUser(response.payload)
            } catch (err) {
                console.log(err);
            }
        }

        fetchUser();
    }, [])

    return (
        <View className="mt-10 flex flex-row items-center justify-between px-8">
            <View className="flex flex-row items-center gap-4">
                {user?.photo ?
                    <Image
                        source={{ uri: `${API_URL}/storage/${user?.photo}` }}
                        className="h-12 w-12 rounded-full"
                    /> :
                     <Ionicons name="person-circle-sharp" size={48} />
                }
                <View>
                    <Text className="font-quick-bold text-xl">{user?.name}</Text>
                    <Text className="font-quick text-xl">{user?.role}</Text>
                </View>
            </View>
            <Pressable className="rounded-full  bg-white p-3" onPress={() => console.log('Logout ditekan')}>
                <AntDesign name="logout" size={20} />
            </Pressable>
        </View>
    )
}

export default Header;