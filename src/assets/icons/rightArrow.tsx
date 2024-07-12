import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function RightArrow({ color = '#111' }: IconProps) {
  return (
    <Svg width={5} height={9} viewBox="0 0 5 9" fill="none">
      <Path
        d="M.75 1l3.5 3.5L.75 8"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
