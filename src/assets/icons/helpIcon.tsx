import { Svg, Path, Circle } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function HelpIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill={color}
      />
      <Circle cx={12} cy={18} r={1} fill={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8c-.87 0-1.611.555-1.886 1.333a1 1 0 11-1.886-.666A4.001 4.001 0 1113 13.874V15a1 1 0 11-2 0v-2a1 1 0 011-1 2 2 0 000-4z"
        fill={color}
      />
    </Svg>
  );
}
