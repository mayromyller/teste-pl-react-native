import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';

import { RootStackParamList } from './';
import { AppTabRoutes } from './app-tab.routes';
import { DrawerContent } from './drawer/drawerContent';

import { CalendarIcon } from '~/assets/icons/calendarIcon';
import { MapIcon } from '~/assets/icons/mapIcon';
import { NotificationIcon } from '~/assets/icons/notificationIcon';
import { OffersIcon } from '~/assets/icons/offersIcon';
import { PersonIcon } from '~/assets/icons/personsIcon';
import { PhoneIcon } from '~/assets/icons/phoneIcon';
import { WalletIcon } from '~/assets/icons/walletIcon';

type Props = StackScreenProps<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }: Props) {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.drawerActiveTintColor,
        drawerActiveBackgroundColor: colors.drawerActiveBackgroundColor,
        drawerInactiveTintColor: colors.drawerInactiveTintColor,
        drawerItemStyle: {
          borderRadius: 8,
        },
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -20,
        },
      }}
      drawerContent={(props: any) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Calendar',
          drawerIcon: ({ color, size }) => <CalendarIcon size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Payments Methods"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Payments Methods',
          drawerIcon: ({ color, size }) => <WalletIcon size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Address"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Address',
          drawerIcon: ({ color, size }) => <MapIcon size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Notification',
          drawerIcon: ({ color, size }) => <NotificationIcon size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Offers"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Offers',
          drawerIcon: ({ color, size }) => <OffersIcon size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Refer a Friend"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Refer a Friend',
          drawerIcon: ({ color, size }) => <PersonIcon size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Support"
        component={AppTabRoutes}
        options={{
          drawerLabel: 'Support',
          drawerIcon: ({ color, size }) => <PhoneIcon size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
