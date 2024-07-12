import { Image, Text, View } from 'react-native';

import { ListViewOption } from './components/listViewOption';
import { data } from './data';

import { MenuHorizontalIcon } from '~/assets/icons/menuHorizontal';
import { StarIcon } from '~/assets/icons/starIcon';
import { BoxCard } from '~/components/app/box-card/boxCard';
import { Header } from '~/components/app/header/header';
import { Screen } from '~/components/app/screen/screen';
import { TitleSection } from '~/components/app/title-section/titleSecton';
import { Typography } from '~/components/app/typography/typography';
import { SearchBar } from '~/components/form/searchBar/searchBar';

export function ListServicesScreen() {
  return (
    <Screen
      scrollable
      headerComponent={
        <Header>
          <SearchBar canGoBack placeholder="Search Category" endComponent />
        </Header>
      }>
      <View style={{ gap: 12, marginTop: 12 }}>
        <BoxCard style={{ marginTop: 16, gap: 16 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TitleSection title="AC Service" />

            <ListViewOption />
          </View>

          {data.map((item) => (
            <View key={item.id} style={{ gap: 12, marginTop: 12 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: 12,
                }}>
                <Image source={item.image} style={{ width: 105, height: 116 }} />

                <View style={{ gap: 6, flex: 1 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{ flexDirection: 'row', gap: 6 }}>
                      <StarIcon />
                      <Typography color="text" font="Inter_Bold" size={12}>
                        {item.note}{' '}
                        <Typography color="inactiveTab" font="Inter_Bold" size={12}>
                          ({item.quantity})
                        </Typography>
                      </Typography>
                    </View>
                    <MenuHorizontalIcon />
                  </View>

                  <Typography color="text" font="Inter_SemiBold" size={14}>
                    {item.title}
                  </Typography>
                  <Text style={{ fontSize: 12, color: '#9A9FA5' }}>{item.infoText}</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        marginTop: 10,
                        paddingVertical: 4,
                        paddingHorizontal: 6,
                        backgroundColor: '#B5E4CA',
                        borderRadius: 6,
                      }}>
                      <Text style={{ color: '#1A1D1F', fontSize: 12, fontFamily: 'Inter_Bold' }}>
                        {item.value}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </BoxCard>
      </View>
    </Screen>
  );
}
