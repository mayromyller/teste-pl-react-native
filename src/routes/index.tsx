import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './drawer-navigator';
import { CategoriesScreen } from '../screens/app/categoriesScreen/categoriesScreen';

import { ListServicesScreen } from '~/screens/app/listServicesScreen/listServicesScreen';
import { ProfileScreen } from '~/screens/app/profileScreen/ProfileScreen';

export type RootStackParamList = {
  DrawerNavigator: undefined;
  Modal: undefined;
  TabNavigator: undefined;
  ProfileScreen: undefined;
  CategoriesScreen: undefined;
  ListServicesScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListServicesScreen"
          component={ListServicesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
