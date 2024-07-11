import { useNavigation } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './header.style';

import { ArrowIcon } from '~/assets/icons/arrowIcon';

type Props = PropsWithChildren & {
  canGoBack?: boolean;
  searchBar?: React.ReactNode;
};

export function Header({ children, canGoBack = false, searchBar }: Props) {
  const renderCanGoBack = !searchBar && canGoBack;

  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <S.Box>
      {renderCanGoBack && (
        <Pressable style={{ padding: 12 }} onPress={navigation.goBack}>
          <ArrowIcon color={colors.text} />
        </Pressable>
      )}
      {children}
    </S.Box>
  );
}
