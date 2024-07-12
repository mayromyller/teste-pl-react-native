import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function SearchIcon({ size = 17, color = '#FFFFFF' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.439a4.939 4.939 0 118.499 3.423.76.76 0 00-.137.137A4.939 4.939 0 013 7.439zm8.93 5.052a6.439 6.439 0 111.06-1.06l2.59 2.588a.75.75 0 01-1.06 1.061l-2.59-2.589z"
        fill={color}
      />
    </Svg>
  );
}
