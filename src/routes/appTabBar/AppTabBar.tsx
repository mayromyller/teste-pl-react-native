import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';

import { tabBarOptions } from './tabOptions';
import { BottomTabParamList } from '../app-tab.routes';

import { BottomTabIcon } from '~/components/icons/bottomTabIcon';

export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 8,
        backgroundColor: colors.cardBackground,
        alignItems: 'center',
        height: 72,
        gap: 4,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const tabItem = tabBarOptions[route.name as keyof BottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            {isFocused ? (
              <BottomTabIcon name={tabItem.icons.focused} color={colors.activeTab} />
            ) : (
              <BottomTabIcon name={tabItem.icons.focused} color={colors.inactiveTab} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
