import React from 'react';
import { Text, View } from 'react-native';

type ErrorListProps = {
    errors?: string[];
    className?: string;
};

const ErrorList = ({ errors, className = '' }: ErrorListProps) => {
    if (!errors || errors.length < 1) return null;

    const errorList = Array.isArray(errors) ? errors : [errors];

    return (
        <View className={`w-4/5 rounded-lg bg-red-500/20 px-4 py-2 ${className}`}>
            {errorList.map((error, index) => (
                <Text key={index} className="mb-1 text-sm text-red-500">
                    • {error}
                </Text>
            ))}
        </View>
    );
};

export default ErrorList;
