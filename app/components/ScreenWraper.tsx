import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import BackgroundContext from '../../contexts/BackgroundContext';
import Header from './Header';

interface ScreenWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function ScreenWrapper({ children, className = '' }: ScreenWrapperProps) {
    const bgColor = 'bg-blue-50';
    return (
        <BackgroundContext.Provider value={bgColor}>
            <SafeAreaView className={`flex-1 ${bgColor} ${className}`}>
            <Header />
                {children}
            </SafeAreaView>
        </BackgroundContext.Provider>
    );
}
