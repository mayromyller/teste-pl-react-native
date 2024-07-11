import { BottomTabIconProps } from '../../components/icons/bottomTabIcon';
import { BottomTabParamList } from '../app-tab.routes';

export const tabBarOptions: Record<
  keyof BottomTabParamList,
  {
    icons: {
      focused: BottomTabIconProps['name'];
    };
  }
> = {
  FeedbackScreen: {
    icons: {
      focused: 'message',
    },
  },
  NotificationScreen: {
    icons: {
      focused: 'notification',
    },
  },
  HomeScreen: {
    icons: {
      focused: 'home',
    },
  },
  ServicesScreen: {
    icons: {
      focused: 'outline',
    },
  },
};
