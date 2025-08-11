import StackNavigator from './app/navigation/StackNavigator';
import './global.css'; // jika kamu pakai nativewind
import { useLoadFonts } from './hooks/useLoadFont';

export default function App() {
    const fontsLoaded = useLoadFonts();

    if (!fontsLoaded) return null;

    return <StackNavigator />;
}
