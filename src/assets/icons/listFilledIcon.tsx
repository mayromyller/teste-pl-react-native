import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function ListFilledIcon({ size = 20, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.234 5.833c0-.46.373-.833.833-.833h10a.833.833 0 010 1.667h-10a.833.833 0 01-.833-.834zM6.234 10c0-.46.373-.833.833-.833h10a.833.833 0 010 1.666h-10A.833.833 0 016.234 10zM6.234 14.167c0-.46.373-.834.833-.834h10a.833.833 0 010 1.667h-10a.833.833 0 01-.833-.833z"
        fill={color}
      />
      <Path
        d="M4.567 5.833a.833.833 0 11-1.667 0 .833.833 0 011.667 0zM4.567 10A.833.833 0 112.9 10a.833.833 0 011.667 0zM4.567 14.167a.833.833 0 11-1.667 0 .833.833 0 011.667 0z"
        fill={color}
      />
    </Svg>
  );
}
