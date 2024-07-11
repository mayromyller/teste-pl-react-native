import { useRef } from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './input.style';

export type InputProps = TextInputProps & {
  startComponent?: React.ReactNode;
  endComponent?: React.ReactNode;
};

export function Input({ startComponent, endComponent, ...textInputProps }: InputProps) {
  const { colors } = useTheme();
  const inputRef = useRef<TextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <S.Box>
      <Pressable
        onPress={focusInput}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {startComponent && (
          <View
            style={{
              marginRight: 8,
            }}>
            {startComponent}
          </View>
        )}
        <TextInput
          ref={inputRef}
          placeholderTextColor={colors.placeholderText}
          style={{
            fontWeight: '600',
            fontSize: 14,
            color: colors.placeholderText,
          }}
          {...textInputProps}
        />
      </Pressable>
    </S.Box>
  );
}
