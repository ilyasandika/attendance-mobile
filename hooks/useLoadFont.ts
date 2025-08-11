import { useFonts } from 'expo-font';

export function useLoadFonts() {
    const [fontsLoaded] = useFonts({
        Quicksand: require('../assets/fonts/Quicksand-Regular.ttf'),
        'Quicksand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
        'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-SemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
        'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    });

    return fontsLoaded;
}
