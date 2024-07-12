import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Dimensions, Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';

import { GrabButton } from './components/grabButton';
import { ServicesSection } from './components/servicesSection';
import { ShortCategories } from './components/shortCategories';
import { data, OfferType } from './data';

import { InfoIcon } from '~/assets/icons/infoIcon';
import { RightArrow } from '~/assets/icons/rightArrow';
import { BoxCard } from '~/components/app/box-card/boxCard';
import { DrawerHeader } from '~/components/app/header/drawerHeader';
import { Screen } from '~/components/app/screen/screen';
import { TitleSection } from '~/components/app/title-section/titleSecton';
import { Typography } from '~/components/app/typography/typography';
import { SearchBar } from '~/components/form/searchBar/searchBar';
import { useAppTheme } from '~/hooks/useAppTheme';
import { tokens } from '~/theme/tokens';

const WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = WIDTH * 0.72;

export function HomeScreen() {
  const navigation = useNavigation();
  const { theme } = useAppTheme();
  const { colors } = useTheme();

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function handleNavigateToServices() {
    navigation.navigate('ListServicesScreen');
  }

  function renderOffItem(offer: OfferType) {
    return (
      <View
        style={{
          flexDirection: 'column',
          gap: 12,
          backgroundColor: offer.bg,
          paddingVertical: 20,
          paddingHorizontal: 12,
          borderRadius: 14,
          width: CARD_WIDTH,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}>
          <Text
            style={{
              fontFamily: 'Inter_SemiBold',
              fontSize: 13,
              color: offer.text,
            }}>
            {offer.label}
          </Text>

          <InfoIcon />
        </View>

        <Text style={{ color: '#1A1D1F', fontSize: 48, fontFamily: 'Inter_SemiBold' }}>
          {offer.cta}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <GrabButton badge={offer.badge} />
        </View>
      </View>
    );
  }

  return (
    <Screen scrollable headerComponent={<DrawerHeader onPress={handleOpenDrawer} />}>
      <View style={{ gap: 16 }}>
        <BoxCard style={{ marginTop: 16, gap: 16 }}>
          <View>
            <Typography
              size={14}
              font="Inter_SemiBold"
              style={{
                color: theme === 'light' ? tokens.colors.gray : colors.helpText,
                textTransform: 'uppercase',
              }}>
              Hello Mayro 👋
            </Typography>

            <Typography font="Inter_Bold" size={32} color="textInfo">
              What you are looking for today
            </Typography>
          </View>

          <SearchBar placeholder="Search what you need..." endComponent />
        </BoxCard>

        <ShortCategories />

        <BoxCard>
          <FlatList
            data={data.offers}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={({ item }) => renderOffItem(item)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
          />
        </BoxCard>

        <BoxCard>
          <View style={{ gap: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TitleSection title="Cleaning Services" />

              <Pressable
                onPress={handleNavigateToServices}
                style={{
                  borderWidth: 1,
                  borderColor: theme === 'light' ? '#F2F2F2' : 'rgba(242, 242, 242, 0.1)',
                  borderRadius: 100,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                }}>
                <Typography font="Inter_SemiBold" size={12} color="text">
                  See All
                </Typography>
                <RightArrow color={colors.text} />
              </Pressable>
            </View>

            <ServicesSection />
          </View>
        </BoxCard>
      </View>
    </Screen>
  );
}
