import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function WalletIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6.17V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V9a3.001 3.001 0 00-2-2.83zM4 5a1 1 0 011-1h12a1 1 0 011 1v1H5a1 1 0 01-1-1zm0 2.83c.313.11.65.17 1 .17h14a1 1 0 011 1v2h-3a3 3 0 100 6h3v2a1 1 0 01-1 1H5a1 1 0 01-1-1V7.83zM17 13h3v2h-3a1 1 0 110-2z"
        fill={color}
      />
    </Svg>
  );
}
