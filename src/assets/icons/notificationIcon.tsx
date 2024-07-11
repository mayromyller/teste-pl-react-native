import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function NotificationIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 16.596c0-.38.155-.745.429-1.01l1.029-.994a2 2 0 00.61-1.444l-.01-3.153A7.97 7.97 0 1120 9.97v3.2a2 2 0 00.586 1.415l1 1a1.414 1.414 0 01-1 2.414H16a4 4 0 01-8 0H3.404A1.404 1.404 0 012 16.596zM10 18a2 2 0 104 0h-4zm8-4.828A4 4 0 0019.172 16H4.879a4 4 0 001.19-2.858l-.01-3.153A5.97 5.97 0 1118 9.97v3.2z"
        fill={color}
      />
    </Svg>
  );
}
