import { Pressable, Text } from 'react-native';

import { RightArrow } from '~/assets/icons/rightArrow';

type GrabButtonProps = {
  badge?: string;
};

export function GrabButton({ badge = '#111' }: GrabButtonProps) {
  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        borderRadius: 100,
        paddingVertical: 4,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Inter_Medium',
          color: badge,
        }}>
        Grab Offer
      </Text>
      <RightArrow color={badge} />
    </Pressable>
  );
}
