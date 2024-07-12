import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import * as S from './toggleThemeButton.style';

import { MoonIcon } from '~/assets/icons/moonIcon';
import { SunIcon } from '~/assets/icons/sunIcon';
import { useAppTheme } from '~/hooks/useAppTheme';

export function ToggleThemeButton() {
  const { toggleTheme, theme } = useAppTheme();
  const { colors } = useTheme();

  const sunIconColor = theme === 'light' ? colors.text : colors.white;
  const moonIconColor = theme === 'dark' ? colors.text : colors.white;

  const { bottom } = useSafeAreaInsets();

  return (
    <S.Box
      style={{
        marginBottom: bottom + 14,
      }}>
      <S.Option isActive={theme === 'light'} onPress={() => toggleTheme('light')}>
        <SunIcon color={sunIconColor} />
        <S.Text isActive={theme === 'light'}>Light</S.Text>
      </S.Option>

      <S.Option isActive={theme === 'dark'} onPress={() => toggleTheme('dark')}>
        <MoonIcon color={moonIconColor} />
        <S.Text isActive={theme === 'dark'}>Dark</S.Text>
      </S.Option>
    </S.Box>
  );
}
