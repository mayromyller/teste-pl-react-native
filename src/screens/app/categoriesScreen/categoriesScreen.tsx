import { FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './categoriesScreen.style';
import { itensMap, ItensMap } from './itensMap';

import { BoxCard } from '~/components/app/box-card/boxCard';
import { Header } from '~/components/app/header/header';
import { Screen } from '~/components/app/screen/screen';
import { TitleSection } from '~/components/app/title-section/titleSecton';
import { SearchBar } from '~/components/form/searchBar/searchBar';

const numColumns = 3;
const gap = 16;

export function CategoriesScreen() {
  const { colors } = useTheme();

  const renderItem = ({ item }: { item: ItensMap }) => {
    return (
      <S.Box>
        <S.IconWrapper
          style={{
            backgroundColor: item.bg,
          }}>
          {item.icon}
        </S.IconWrapper>
        <Text
          style={{ fontSize: 16, fontWeight: '500', textAlign: 'center', color: colors.text }}
          numberOfLines={2}>
          {item.label}
        </Text>
      </S.Box>
    );
  };

  return (
    <Screen
      scrollable={false}
      headerComponent={
        <Header>
          <SearchBar canGoBack placeholder="Search Category" endComponent />
        </Header>
      }>
      <BoxCard style={{ marginTop: 16, gap: 16 }}>
        <TitleSection title="All Categories" />

        <FlatList
          data={itensMap}
          renderItem={renderItem}
          contentContainerStyle={{ gap: 24 }}
          columnWrapperStyle={{ gap, justifyContent: 'space-between' }}
          numColumns={numColumns}
        />
      </BoxCard>
    </Screen>
  );
}
