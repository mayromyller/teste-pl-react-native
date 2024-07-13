import { Pressable, Text, View, Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './header.style';

import { ArrowDownIcon } from '~/assets/icons/arrowDownIcon';
import { MenuIcon } from '~/assets/icons/menuIcon';
import { useSafeArea } from '~/hooks/useSafeArea';
import { useGetRandomUser } from '~/services/api/randomUser/useGetRandomUser';

type Props = {
  onPress: () => void;
};

export function DrawerHeader({ onPress }: Props) {
  const { colors } = useTheme();

  const { data } = useGetRandomUser();
  const { top } = useSafeArea();

  const { number, name } = data?.location?.street ?? {};
  const fullAddress =
    number && name ? `${number}, ${name}` : 'Não foi possível carregar o endereço';

  return (
    <S.Box
      style={{
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginTop: Platform.OS === 'ios' ? top : 0,
      }}>
      <Pressable onPress={onPress} hitSlop={10}>
        <MenuIcon color={colors.textInfo} />
      </Pressable>

      <View>
        <Text
          style={{
            color: colors.helpText,
            fontSize: 9,
            fontWeight: '500',
            textTransform: 'uppercase',
          }}>
          Current Location
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text
            style={{
              color: colors.textInfo,
              fontSize: 13,
              fontWeight: '600',
            }}>
            {fullAddress}
          </Text>
          <View style={{ marginTop: 4 }}>
            <ArrowDownIcon color={colors.textInfo} />
          </View>
        </View>
      </View>
    </S.Box>
  );
}
