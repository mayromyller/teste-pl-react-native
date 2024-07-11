import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import * as S from './toggleThemeButton.style';

import { MoonIcon } from '~/assets/icons/moonIcon';
import { SunIcon } from '~/assets/icons/sunIcon';
import { useAppTheme } from '~/hooks/useAppTheme';
import { ThemeType } from '~/theme/context/ThemeContext';

export function ToggleThemeButton() {
  const [active, setActive] = useState('light');

  const { toggleTheme } = useAppTheme();
  const { colors } = useTheme();

  const sunIconColor = active === 'light' ? colors.text : colors.white;
  const moonIconColor = active === 'dark' ? colors.text : colors.white;

  function handleToggleTheme(theme: string) {
    if (theme === 'light') {
      setActive('light');
      toggleTheme(ThemeType.light);
    } else {
      setActive('dark');
      toggleTheme(ThemeType.dark);
    }
  }

  const { bottom } = useSafeAreaInsets();

  return (
    <S.Box
      style={{
        marginBottom: bottom + 14,
      }}>
      <S.Option isActive={active === 'light'} onPress={() => handleToggleTheme('light')}>
        <SunIcon color={sunIconColor} />
        <S.Text isActive={active === 'light'}>Light</S.Text>
      </S.Option>

      <S.Option isActive={active === 'dark'} onPress={() => handleToggleTheme('dark')}>
        <MoonIcon color={moonIconColor} />
        <S.Text isActive={active === 'dark'}>Dark</S.Text>
      </S.Option>
    </S.Box>
  );
}
