import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { AppTabBar } from './appTabBar/AppTabBar';

import { FeedbackScreen } from '~/screens/app/FeedbackScreen';
import { HomeScreen } from '~/screens/app/HomeScreen';
import { NotificationScreen } from '~/screens/app/NotificationScreen';
import { ServicesScreen } from '~/screens/app/ServicesScreen';

export type BottomTabParamList = {
  HomeScreen: undefined;
  NotificationScreen: undefined;
  FeedbackScreen: undefined;
  ServicesScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function AppTabRoutes() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ServicesScreen" component={ServicesScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} />
    </Tab.Navigator>
  );
}
