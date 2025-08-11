import { Text, TextInput, View, TextInputProps } from 'react-native';

type InputChangeHandler = (text: string) => void;

type TextBoxProps = {
    id: string;
    label?: string;
    name: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'textarea';
    placeholder?: string;
    value?: string | number;
    handleChange?: InputChangeHandler;
    onlyBottom?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: string;
    children?: React.ReactNode;
    disabledDisplay?: boolean;
    toolTipMessage?: string;
};

const TextBox = ({
    id,
    label,
    name,
    type = 'text',
    placeholder,
    value = '',
    handleChange,
    onlyBottom = false,
    disabled = false,
    readOnly = false,
    error,
    children,
    disabledDisplay = false,
    toolTipMessage = 'Hubungi admin jika ingin merubah data',
}: TextBoxProps) => {
    // Base styles using Tailwind classes
    const baseInputStyle = 'w-full text-sm';
    const errorStyle = error ? 'border-red-500' : 'border-primary/20';
    const inputStyle = onlyBottom
        ? `border-b ${error ? 'border-red-500' : 'border-primary'} p-2`
        : `border rounded-md py-2 px-4 ${errorStyle} ${disabledDisplay ? 'bg-primary/10' : ''}`;

    return (
        <View>
            <View className={`flex-col ${error ? 'animate-shake' : ''}`}>
                {label && <Text className="text-sm font-semibold">{label}</Text>}

                {type === 'textarea' ? (
                    <TextInput
                        multiline
                        numberOfLines={4}
                        id={id}
                        editable={!disabled && !readOnly}
                        placeholder={placeholder}
                        onChangeText={handleChange}
                        value={value?.toString()}
                        className={`mt-2 rounded-md border p-2 ${baseInputStyle} ${error ? 'border-red-500' : 'border-primary/20'}`}
                    />
                ) : !children ? (
                    <View className="relative w-full">
                        <TextInput
                            id={id}
                            editable={!disabled && !readOnly}
                            placeholder={placeholder}
                            onChangeText={handleChange}
                            value={value?.toString()}
                            secureTextEntry={type === 'password'}
                            keyboardType={type === 'number' ? 'numeric' : 'default'}
                            className={`${baseInputStyle} ${inputStyle}`}
                        />
                    </View>
                ) : (
                    <View className="mt-2 border-b border-primary p-2">
                        <Text className="text-sm text-gray-700">{children || '-'}</Text>
                    </View>
                )}

                {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
            </View>
        </View>
    );
};

export default TextBox;
