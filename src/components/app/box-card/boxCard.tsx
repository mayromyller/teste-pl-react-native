import { ViewProps } from 'react-native';

import * as S from './boxCard.style';

type Props = ViewProps & {
  children: React.ReactNode;
};

export function BoxCard({ children, ...viewProps }: Props) {
  return <S.Box {...viewProps}>{children}</S.Box>;
}
