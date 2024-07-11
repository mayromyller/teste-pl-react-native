import { Svg, Path } from 'react-native-svg';

import { IconProps } from './iconTypes';

export function MessageIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9.12695C7 8.57467 7.44772 8.12695 8 8.12695H16C16.5523 8.12695 17 8.57467 17 9.12695C17 9.67924 16.5523 10.127 16 10.127H8C7.44772 10.127 7 9.67924 7 9.12695Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13.127C7 12.5747 7.44772 12.127 8 12.127H12C12.5523 12.127 13 12.5747 13 13.127C13 13.6792 12.5523 14.127 12 14.127H8C7.44772 14.127 7 13.6792 7 13.127Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.71963 17.5905C7.07906 17.291 7.53213 17.127 8 17.127H19C19.5523 17.127 20 16.6792 20 16.127V6.12695C20 5.57467 19.5523 5.12695 19 5.12695H5C4.44772 5.12695 4 5.57467 4 6.12695V19.8569L6.71963 17.5905ZM8 19.127H19C20.6569 19.127 22 17.7838 22 16.127V6.12695C22 4.4701 20.6569 3.12695 19 3.12695H5C3.34315 3.12695 2 4.4701 2 6.12695V19.8569C2 21.5525 3.97771 22.4789 5.28037 21.3933L8 19.127Z"
        fill={color}
      />
    </Svg>
  );
}
