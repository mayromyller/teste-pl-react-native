import { Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export function NotificationScreen() {
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
      <Text>NotificationScreen</Text>
    </View>
  );
}
