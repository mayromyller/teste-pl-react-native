import 'react-native-gesture-handler';

import RootStack from './src/routes';

import { ThemeProvider } from '~/theme/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
