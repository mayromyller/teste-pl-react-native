import { Svg, Path } from 'react-native-svg';

import { IconProps } from './iconTypes';

export function HomeIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 25">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M5 22.127a3 3 0 01-3-3v-7.664a3 3 0 01.993-2.23l7-6.3a3 3 0 014.014 0l7 6.3a3 3 0 01.993 2.23v7.664a3 3 0 01-3 3H5zm15-10.664v7.664a1 1 0 01-1 1h-3v-5a3 3 0 00-3-3h-2a3 3 0 00-3 3v5H5a1 1 0 01-1-1v-7.664a1 1 0 01.331-.743l7-6.3a1 1 0 011.338 0l7 6.3a1 1 0 01.331.743zm-10 8.664v-5a1 1 0 011-1h2a1 1 0 011 1v5h-4z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
