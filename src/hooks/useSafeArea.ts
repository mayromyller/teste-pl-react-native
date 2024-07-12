import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useSafeArea() {
  const { bottom, top } = useSafeAreaInsets();

  return {
    top: Math.max(top, 20),
    bottom: Math.max(bottom, 20),
  };
}
