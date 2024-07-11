import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function SunIcon({ size = 24, color = '#111' }: IconProps) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 18a6 6 0 100-12 6 6 0 000 12zM12.245 1.5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM12.245 19.5a1 1 0 011 1v.997a1 1 0 11-2 0V20.5a1 1 0 011-1zM1.747 11.998a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM19.747 11.998a1 1 0 011-1h.997a1 1 0 110 2h-.997a1 1 0 01-1-1zM4.822 19.422a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM17.55 6.694a1 1 0 010-1.414l.704-.705a1 1 0 111.415 1.414l-.705.705a1 1 0 01-1.414 0zM4.822 4.575a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM17.55 17.303a1 1 0 011.414 0l.705.705a1 1 0 01-1.415 1.414l-.704-.705a1 1 0 010-1.414z"
        fill={color}
      />
    </Svg>
  );
}
