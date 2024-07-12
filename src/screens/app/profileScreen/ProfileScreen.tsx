import { ActivityIndicator, Image, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './profileScreen.style';
import CountryImage from '../../../assets/images/01.png';

import { PencilIcon } from '~/assets/icons/pencilIcon';
import { BoxCard } from '~/components/app/box-card/boxCard';
import { Header } from '~/components/app/header/header';
import { Screen } from '~/components/app/screen/screen';
import { TitleSection } from '~/components/app/title-section/titleSecton';
import { InputField } from '~/components/form/input-field/inputField';
import { useGetRandomUser } from '~/services/api/randomUser/useGetRandomUser';
import { dateFormatter } from '~/utils/dateFormatter';

export function ProfileScreen() {
  const { colors } = useTheme();

  const { data, isLoading } = useGetRandomUser();
  const { first, last } = data?.name ?? 'Não foi possível carregar dados';
  const email = data?.email ?? 'Não foi possível carregar dados';

  return (
    <Screen scrollable={false} headerComponent={<Header canGoBack />}>
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TitleSection title="Profile" size="large" />
        <S.EditButton>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: colors.drawerActiveTintColor,
            }}>
            Edit Profile
          </Text>
          <PencilIcon color={colors.drawerActiveTintColor} />
        </S.EditButton>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
          <BoxCard style={{ marginTop: 20 }}>
            <S.Box>
              {data.picture && (
                <S.UserImage source={{ uri: data.picture.large }} alt="Imagem do usuário" />
              )}

              <View>
                <S.Text>
                  {first} {last}
                </S.Text>
                <S.HelText>{email}</S.HelText>
              </View>
            </S.Box>
          </BoxCard>

          <BoxCard style={{ marginTop: 16, gap: 24 }}>
            <InputField
              text="Phone Number"
              placeholder="64 012 3456"
              value={data?.phone ?? ''}
              startComponent={
                <Image source={CountryImage} style={{ width: 24, height: 24, borderRadius: 12 }} />
              }
            />
            <InputField text="E-mail" placeholder="" value={email} />
            <InputField text="Gender" placeholder="64 012 3456" value={data?.gender ?? ''} />
            <InputField
              text="Date of birth"
              placeholder="64 012 3456"
              value={dateFormatter(data?.dob?.date)}
            />
          </BoxCard>
        </>
      )}
    </Screen>
  );
}
