import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ScrollViewContainer, ViewContainer } from './components/screenContainer';

import { useSafeArea } from '~/hooks/useSafeArea';

export interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  headerComponent?: React.ReactNode;
}

export function Screen({ children, scrollable = false, headerComponent }: ScreenProps) {
  const { colors } = useTheme();
  const { bottom } = useSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <Container backgroundColor={colors.background}>
      <View>{headerComponent}</View>
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: bottom,
        }}>
        {children}
      </View>
    </Container>
  );
}
