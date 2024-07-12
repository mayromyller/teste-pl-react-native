import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import * as S from './drawerContent.style';

import { HelpIcon } from '~/assets/icons/helpIcon';
import { ToggleThemeButton } from '~/components/app/toggleThemeButton';
import { useGetRandomUser } from '~/services/api/randomUser/useGetRandomUser';

export function DrawerContent(props: any) {
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();

  const navigation = useNavigation();

  function handleNavigateToProfile() {
    navigation.navigate('ProfileScreen');
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  const { data } = useGetRandomUser();
  const { first, last } = data?.name ?? {};
  const email = data?.email ?? '';
  const { large } = data?.picture ?? {};

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: colors.drawerBackground,
        }}>
        <S.Box onPress={handleNavigateToProfile}>
          <S.UserImage source={{ uri: large }} alt="Imagem do usuário" />

          <View>
            <S.Text>
              {first} {last}
            </S.Text>
            <S.HelText>{email}</S.HelText>
          </View>
        </S.Box>

        <View style={{ paddingHorizontal: 8 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          paddingHorizontal: 24,
          backgroundColor: colors.drawerBackground,
        }}>
        <View
          style={{
            backgroundColor: colors.drawerContent,
            height: 2,
            width: '100%',
            borderRadius: 2,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <HelpIcon color={colors.drawerContent} />
          <Text
            style={{
              color: colors.drawerContent,
              fontSize: 15,
              fontWeight: '500',
            }}>
            Colour Scheme
          </Text>
        </View>
      </View>

      <View style={{ backgroundColor: colors.drawerBackground, padding: 8, paddingBottom: bottom }}>
        <ToggleThemeButton />
      </View>
    </View>
  );
}
