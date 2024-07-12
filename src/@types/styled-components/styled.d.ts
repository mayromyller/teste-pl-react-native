import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string;
      background: string;
      cardBackground: string;
      borderMainSearchInput: string;
      backgroundMainSearchInput: string;
      drawerBackground: string;
      helpText: string;
      text: string;
      primary: string;
      inputBackground: string;
      listDivider: string;
      offBadgeText: string;
      placeholderText: string;
      placeholderMainSearchInput: string;
      drawerContent: string;
      neutral: string;
      activeTab: string;
      inactiveTab: string;

      // specific drawer colors
      drawerActiveBackgroundColor: string;
      drawerActiveTintColor: string;
      drawerInactiveTintColor: string;

      textInfo: string;
    };
  }
}
