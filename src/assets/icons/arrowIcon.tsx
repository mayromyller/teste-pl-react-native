import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function ArrowIcon({ size = 25, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        d="M11.424 17.92a1 1 0 11-1.414 1.414l-5.793-5.793a2 2 0 010-2.828L10.01 4.92a1 1 0 111.414 1.414l-4.793 4.793h14.086a1 1 0 110 2H6.631l4.793 4.793z"
        fill={color}
      />
    </Svg>
  );
}
