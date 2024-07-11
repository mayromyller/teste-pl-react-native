import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function PersonIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.5 10.97a4 4 0 000-7.94A5.977 5.977 0 0116 7a5.978 5.978 0 01-1.5 3.97zM20 20a1 1 0 002 0v-2a5 5 0 00-4.698-4.991 8.008 8.008 0 012.303 3.503c.252.439.395.947.395 1.488v2z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15a3 3 0 00-3 3v2a1 1 0 11-2 0v-2a5 5 0 015-5h6a5 5 0 015 5v2a1 1 0 11-2 0v-2a3 3 0 00-3-3H7zM10 5a2 2 0 100 4 2 2 0 000-4zM6 7a4 4 0 118 0 4 4 0 01-8 0z"
        fill={color}
      />
    </Svg>
  );
}
