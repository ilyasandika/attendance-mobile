import { createContext, useContext } from 'react';

const BackgroundContext = createContext<string>('white');

export const useBackgroundColor = () => useContext(BackgroundContext);

export default BackgroundContext;
