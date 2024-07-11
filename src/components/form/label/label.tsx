import * as S from './label.style';

export type LabelProps = {
  text: string;
};

export function Label({ text }: LabelProps) {
  return <S.Text>{text}</S.Text>;
}
