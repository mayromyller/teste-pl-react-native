import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function MenuHorizontalIcon({ size = 20, color = '#6F767E' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.667 10a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0zM11.667 10a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0zM16.667 10a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0z"
        fill={color}
      />
    </Svg>
  );
}
