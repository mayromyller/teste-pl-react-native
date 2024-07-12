import { Text, TextProps } from 'react-native';
import { DefaultTheme, useTheme } from 'styled-components/native';

interface TypographyProps extends TextProps {
  font?: 'Inter_Regular' | 'Inter_Medium' | 'Inter_SemiBold' | 'Inter_Bold';
  size?: number;
  color?: keyof DefaultTheme['colors'];
}

export function Typography({
  font = 'Inter_Regular',
  size = 16,
  color,

  ...textProps
}: TypographyProps) {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: font,
          fontSize: size,
          color: color ? colors[color] : colors.text,
        },
      ]}
      {...textProps}
    />
  );
}
