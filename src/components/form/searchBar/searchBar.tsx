import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './searchBar.style';

import { ArrowIcon } from '~/assets/icons/arrowIcon';
import { SearchIcon } from '~/assets/icons/searchIcon';

export type SearchBarProps = TextInputProps & {
  canGoBack?: boolean;
  endComponent?: boolean;
};

export function SearchBar({ canGoBack, endComponent, ...textInputProps }: SearchBarProps) {
  const { colors } = useTheme();
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <S.Box isSearchBar={!!canGoBack}>
      <Pressable
        onPress={focusInput}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {canGoBack && (
          <View
            style={{
              marginRight: 8,
            }}>
            <Pressable onPress={navigation.goBack}>
              <ArrowIcon size={24} color={colors.text} />
            </Pressable>
          </View>
        )}
        <TextInput
          ref={inputRef}
          placeholderTextColor={colors.placeholderMainSearchInput}
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: colors.placeholderText,
            flexShrink: 1,
            flexGrow: 1,
            padding: 0,
          }}
          {...textInputProps}
        />
        {endComponent && (
          <S.SearchIconWrapper>
            <SearchIcon />
          </S.SearchIconWrapper>
        )}
      </Pressable>
    </S.Box>
  );
}
