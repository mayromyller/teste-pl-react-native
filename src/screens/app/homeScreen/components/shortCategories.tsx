import { useNavigation } from '@react-navigation/native';
import { View, Pressable } from 'react-native';

import { shortItemsMap } from '../../categoriesScreen/itensMap';

import { BoxCard } from '~/components/app/box-card/boxCard';
import { Typography } from '~/components/app/typography/typography';
import { useAppTheme } from '~/hooks/useAppTheme';

export function ShortCategories() {
  const { theme } = useAppTheme();
  const navigation = useNavigation();

  return (
    <BoxCard>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 16 }}>
        {shortItemsMap.map((item) => (
          <Pressable
            key={item.id}
            style={{
              gap: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              if (item.navigateTo === 'CategoriesScreen') {
                navigation.navigate('CategoriesScreen');
              } else {
                // TODO: navigate to item.navigateTo
              }
            }}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: item.bg,
                justifyContent: 'center',
                width: 58,
                height: 58,
                borderRadius: 29,
                borderColor: theme === 'light' ? item.border : 'rgba(242, 242, 242, 0.1)',
                borderWidth: item.border ? 1 : 0,
              }}>
              {item.icon}
            </View>
            <Typography font="Inter_Medium" size={13} color="text">
              {item.label}
            </Typography>
          </Pressable>
        ))}
      </View>
    </BoxCard>
  );
}
