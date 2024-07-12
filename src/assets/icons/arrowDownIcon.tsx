import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function ArrowDownIcon({ color = '#111' }: IconProps) {
  return (
    <Svg width={9} height={6} viewBox="0 0 9 6" fill="none">
      <Path
        d="M3.793 4.793L.707 1.707C.077 1.077.523 0 1.414 0h6.172c.89 0 1.337 1.077.707 1.707L5.207 4.793a1 1 0 01-1.414 0z"
        fill={color}
      />
    </Svg>
  );
}
