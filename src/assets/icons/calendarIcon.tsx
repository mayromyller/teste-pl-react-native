import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function CalendarIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M2 13a1 1 0 011-1h18a1 1 0 011 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3v-6zM7 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a3 3 0 013 3v2a1 1 0 01-1 1H3a1 1 0 01-1-1V7a3 3 0 013-3h1V3a1 1 0 011-1z"
      />
    </Svg>
  );
}
