import { Svg, Path, G, ClipPath, Defs, Circle, Rect } from 'react-native-svg';

import { IconProps } from './iconTypes';

export function NotificationIcon({ size = 24, color = '#111', fillColor = '#6759FF' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
      <G clip-path="url(#clip0_1_7278)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16.7229C2 16.342 2.15471 15.9775 2.42864 15.713L3.45759 14.7191C3.84928 14.3408 4.06977 13.8191 4.06814 13.2746L4.05867 10.1216C4.04543 5.71014 7.61789 2.12695 12.0293 2.12695C16.4314 2.12695 20 5.69554 20 10.0976L20 13.2985C20 13.829 20.2107 14.3377 20.5858 14.7127L21.5858 15.7127C21.851 15.978 22 16.3377 22 16.7127C22 17.4938 21.3668 18.127 20.5858 18.127H16C16 20.3361 14.2091 22.127 12 22.127C9.79086 22.127 8 20.3361 8 18.127H3.40408C2.62863 18.127 2 17.4983 2 16.7229ZM10 18.127C10 19.2315 10.8954 20.127 12 20.127C13.1046 20.127 14 19.2315 14 18.127H10ZM18 13.2985C18 14.3594 18.4214 15.3768 19.1716 16.127L4.87851 16.127C5.64222 15.3729 6.07136 14.343 6.06813 13.2686L6.05867 10.1155C6.04875 6.81105 8.7248 4.12695 12.0293 4.12695C15.3268 4.12695 18 6.80011 18 10.0976L18 13.2985Z"
          fill={color}
        />
        <Circle cx="18" cy="6.12695" r="5" fill={fillColor} stroke="white" strokeWidth="2" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_7278">
          <Rect width="24" height="24" fill="white" transform="translate(0 0.126953)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
