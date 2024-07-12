import { createContext, useState, PropsWithChildren } from 'react';
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
      <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
