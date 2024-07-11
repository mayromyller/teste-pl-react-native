import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function MapIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.712 13.806a6.035 6.035 0 10-9.424 0l.006.007c.175.218.337.448.506.672.293.388.706.934 1.186 1.561.895 1.17 2.012 2.61 3.015 3.848a185.468 185.468 0 003.022-3.854c.48-.628.894-1.174 1.188-1.563.168-.223.327-.454.501-.671zm1.563 1.253l-.002.004c-.052.068-.522.696-1.203 1.591a191.082 191.082 0 01-3.748 4.785 1.695 1.695 0 01-2.643 0c-2.156-2.64-4.945-6.374-4.945-6.374l-.007-.008a8.035 8.035 0 1112.55-.006l-.003.003-.002.002h.005l-.002.003z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11a1 1 0 100-2 1 1 0 000 2zm3-1a3 3 0 11-6 0 3 3 0 016 0z"
        fill={color}
      />
    </Svg>
  );
}
