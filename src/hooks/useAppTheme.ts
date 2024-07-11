import { useContext } from 'react';

import { ThemeContext } from '~/theme/context/ThemeContext';

export function useAppTheme() {
  const context = useContext(ThemeContext);

  return context;
}
