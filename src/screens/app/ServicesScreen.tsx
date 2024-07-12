import { Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export function ServicesScreen() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>ServicesScreen</Text>
    </View>
  );
}
