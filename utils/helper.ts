import asyncStorage from '@react-native-async-storage/async-storage/src/AsyncStorage';

 const capitalize = (text : string, all : boolean = true) => {
        if (!text) return '';

        if (all) {
            return text
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        return text.charAt(0).toUpperCase() + text.slice(1);
    };





export {
    capitalize
};


