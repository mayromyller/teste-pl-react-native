import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import HomeCleanImage from '~/assets/images/02.png';
import CarpetCleanImage from '~/assets/images/03.png';
import { Typography } from '~/components/app/typography/typography';

type ItemsService = {
  id: number;
  label: string;
  image: ImageSourcePropType;
  offer?: boolean;
};

const items: ItemsService[] = [
  {
    id: 1,
    label: 'Home Cleaning',
    image: HomeCleanImage,
    offer: true,
  },
  {
    id: 2,
    label: 'Carpet Cleaning',
    image: CarpetCleanImage,
  },
  {
    id: 3,
    label: 'Home Cleaning',
    image: HomeCleanImage,
  },
];

export function ServicesSection() {
  function renderItem(item: ItemsService) {
    return (
      <View
        style={{
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground source={item.image} style={{ width: 139, height: 154, borderRadius: 14 }}>
          {item.offer && (
            <View
              style={{
                position: 'absolute',
                top: 8,
                paddingHorizontal: 8,
                paddingVertical: 3,
                left: 8,
                borderRadius: 14,
                backgroundColor: '#FF5959',
              }}>
              <Typography font="Inter_SemiBold" size={12} color="white">
                10% OFF
              </Typography>
            </View>
          )}
        </ImageBackground>
        <Typography font="Inter_SemiBold" size={14} color="text">
          {item.label}
        </Typography>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      horizontal
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 16 }}
    />
  );
}
