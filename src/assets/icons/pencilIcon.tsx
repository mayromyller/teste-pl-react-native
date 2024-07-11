import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function PencilIcon({ size = 14, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 15" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48 2.721a1.75 1.75 0 012.474 0l.825.825a1.75 1.75 0 010 2.475l-6.062 6.062a.583.583 0 01-.298.16l-3.094.618a.583.583 0 01-.686-.686l.618-3.094a.583.583 0 01.16-.298l6.062-6.062zm1.649.825l.825.825a.583.583 0 010 .825l-.825.825-1.65-1.65.825-.825a.583.583 0 01.825 0zm-2.475 1.65L3.367 9.483l-.413 2.063 2.063-.413 4.287-4.287-1.65-1.65z"
        fill={color}
      />
    </Svg>
  );
}
