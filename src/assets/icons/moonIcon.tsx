import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function MoonIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.316 6.025a7 7 0 109.725 9.725 11.004 11.004 0 01-9.725-9.725zm10.934 7.792c.866 0 1.612.763 1.27 1.558A9 9 0 118.691 3.547c.795-.342 1.558.403 1.558 1.27a9 9 0 009 9z"
        fill={color}
      />
    </Svg>
  );
}
