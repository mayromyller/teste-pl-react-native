import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function MenuIcon({ size = 32, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.333 8c0-.736.597-1.333 1.334-1.333h20a1.333 1.333 0 110 2.666h-20A1.333 1.333 0 015.333 8zM5.333 16.333c0-.736.597-1.333 1.334-1.333h20a1.333 1.333 0 010 2.667h-20a1.333 1.333 0 01-1.334-1.334zM5.333 24.333c0-.736.597-1.333 1.334-1.333h20a1.333 1.333 0 010 2.667h-20a1.333 1.333 0 01-1.334-1.334z"
        fill={color}
      />
    </Svg>
  );
}
