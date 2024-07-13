import { useNavigation } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { Pressable, Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './header.style';

import { ArrowIcon } from '~/assets/icons/arrowIcon';
import { useSafeArea } from '~/hooks/useSafeArea';

type Props = PropsWithChildren & {
  canGoBack?: boolean;
  searchBar?: React.ReactNode;
};

export function Header({ children, canGoBack = false, searchBar }: Props) {
  const renderCanGoBack = !searchBar && canGoBack;

  const navigation = useNavigation();
  const { colors } = useTheme();
  const { top } = useSafeArea();

  return (
    <S.Box style={{ marginTop: Platform.OS === 'ios' ? top : 0 }}>
      {renderCanGoBack && (
        <Pressable style={{ padding: 12 }} onPress={navigation.goBack}>
          <ArrowIcon color={colors.text} />
        </Pressable>
      )}
      {children}
    </S.Box>
  );
}
