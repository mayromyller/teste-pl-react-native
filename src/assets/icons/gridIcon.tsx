import Svg, { Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function GridIcon({ size = 20, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.567 1.667a2.5 2.5 0 00-2.5 2.5v11.666a2.5 2.5 0 002.5 2.5h11.667a2.5 2.5 0 002.5-2.5V4.167a2.5 2.5 0 00-2.5-2.5H4.567zm7.5 1.666H8.734v3.334h3.333V3.333zm1.667 0v3.334h3.333v-2.5a.833.833 0 00-.833-.834h-2.5zm-1.667 5H8.734v3.334h3.333V8.333zm1.667 3.334V8.333h3.333v3.334h-3.333zm-1.667 1.666H8.734v3.334h3.333v-3.334zm1.667 3.334v-3.334h3.333v2.5c0 .46-.373.834-.833.834h-2.5zM4.567 3.333h2.5v3.334H3.734v-2.5c0-.46.373-.834.833-.834zm-.833 5h3.333v3.334H3.734V8.333zm0 5h3.333v3.334h-2.5a.833.833 0 01-.833-.834v-2.5z"
        fill={color}
      />
    </Svg>
  );
}
