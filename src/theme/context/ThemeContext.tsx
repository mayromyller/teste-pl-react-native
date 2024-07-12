import { createContext, useState, PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import { darkTheme } from '../darkTheme';
import { lightTheme } from '../lightTheme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

export const ThemeContext = createContext({
  theme: '',
  themeType: ThemeType.light,
  toggleTheme: (theme: string) => {},
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [themeType, setThemeType] = useState(ThemeType.light);

  function toggleTheme(theme: string) {
    if (theme === 'light') {
      setTheme('light');
      setThemeType(ThemeType.light);
    } else {
      setTheme('dark');
      setThemeType(ThemeType.dark);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      <StatusBar
        barStyle={themeType === ThemeType.light ? 'dark-content' : 'light-content'}
        backgroundColor={themeType === ThemeType.light ? '#fff' : '#000'}
      />
      <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
