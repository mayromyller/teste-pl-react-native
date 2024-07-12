import { Svg, Path } from 'react-native-svg';

import { IconProps } from '~/components/icons/iconTypes';

export function StarIcon({ size = 17, color = '#FFC554' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
      <Path
        d="M7.158 2.562c.415-1.194 2.103-1.194 2.518 0l.63 1.814c.184.526.676.884 1.233.895l1.92.04c1.263.025 1.785 1.63.778 2.395l-1.53 1.16a1.333 1.333 0 00-.47 1.448l.555 1.838c.366 1.21-1 2.202-2.037 1.48l-1.576-1.096a1.333 1.333 0 00-1.524 0L6.08 13.632c-1.038.722-2.404-.27-2.038-1.48l.556-1.838a1.333 1.333 0 00-.47-1.449l-1.53-1.16c-1.008-.763-.486-2.37.778-2.395l1.919-.04a1.333 1.333 0 001.232-.894l.63-1.814z"
        fill="#FFC554"
      />
    </Svg>
  );
}
