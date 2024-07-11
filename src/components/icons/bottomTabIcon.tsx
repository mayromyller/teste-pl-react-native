import React from 'react';
import { Pressable } from 'react-native';

import { HomeIcon } from './homeIcon';
import { IconProps } from './iconTypes';
import { MessageIcon } from './messageIcon';
import { NotificationIcon } from './notificationIcon';
import { OutlineIcon } from './outlineIcon';

export interface BottomTabIconProps extends IconProps {
  name: IconName;
  onPress?: () => void;
}

export function BottomTabIcon({ name, onPress, size, color, fillColor }: BottomTabIconProps) {
  const SVGIcon = icons[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color,
    fillColor,
  };

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}

const icons = {
  home: HomeIcon,
  message: MessageIcon,
  outline: OutlineIcon,
  notification: NotificationIcon,
};

type IconType = typeof icons;
type IconName = keyof IconType;
