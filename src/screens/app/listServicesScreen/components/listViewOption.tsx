import { useState, useMemo } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

import { GridIcon } from '~/assets/icons/gridIcon';
import { ListFilledIcon } from '~/assets/icons/listFilledIcon';
import { useAppTheme } from '~/hooks/useAppTheme';

export function ListViewOption() {
  const [activeView, setActiveView] = useState<'list' | 'grid'>('list');

  const { theme } = useAppTheme();
  const { colors } = useTheme();

  const isLightTheme = theme === 'light';

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          gap: 8,
          alignItems: 'center',
        },
        pressable: {
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          shadowColor: 'rgba(0, 0, 0, 0.4)',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 7.68,
          elevation: 8,
        },
        listLight: {
          backgroundColor: activeView === 'list' ? '#FCFCFC' : '#F7F7F7',
        },
        gridLight: {
          backgroundColor: activeView === 'grid' ? colors.white : '#F7F7F7',
        },
        listDark: {
          backgroundColor: activeView === 'list' ? '#29303C' : '#111926',
        },
        gridDark: {
          backgroundColor: activeView === 'grid' ? '#29303C' : '#111926',
        },
        iconListLight: {
          color: activeView === 'list' ? colors.primary : '#9A9FA5',
        },
        iconGridLight: {
          color: activeView === 'grid' ? colors.primary : '#9A9FA5',
        },
        iconListDark: {
          color: colors.white,
        },
      }),
    [activeView, theme]
  );

  const handlePress = (view: 'list' | 'grid') => () => setActiveView(view);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress('list')}
        style={[styles.pressable, isLightTheme ? styles.listLight : styles.listDark]}>
        <ListFilledIcon
          size={20}
          color={isLightTheme ? styles.iconListLight.color : styles.iconListDark.color}
        />
      </Pressable>
      <Pressable
        onPress={handlePress('grid')}
        style={[styles.pressable, isLightTheme ? styles.gridLight : styles.gridDark]}>
        <GridIcon
          size={20}
          color={isLightTheme ? styles.iconGridLight.color : styles.iconListDark.color}
        />
      </Pressable>
    </View>
  );
}
