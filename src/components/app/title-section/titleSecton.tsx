import * as S from './titleSection.style';

export function TitleSection({
  title,
  size = 'medium',
}: {
  title: string;
  size?: 'medium' | 'large';
}) {
  return (
    <S.HStack>
      <S.BeforeText />
      <S.Text size={size}>{title}</S.Text>
    </S.HStack>
  );
}
