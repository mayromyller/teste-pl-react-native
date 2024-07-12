import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function InfoIcon({ color = '#6F767E', size = 16 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.667 8.5a6.667 6.667 0 11-13.334 0 6.667 6.667 0 0113.334 0zM8 7.833c.368 0 .667.299.667.667v3.334a.667.667 0 11-1.334 0V8.5c0-.368.299-.667.667-.667zM8 6.5a.667.667 0 100-1.333A.667.667 0 008 6.5z"
        fill={color}
      />
    </Svg>
  );
}
