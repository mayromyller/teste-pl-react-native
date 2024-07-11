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
  theme: ThemeType.light,
  toggleTheme: (theme: ThemeType) => {},
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(ThemeType.light);

  function toggleTheme(theme: ThemeType) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
