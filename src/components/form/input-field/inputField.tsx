import { View } from 'react-native';

import { Input, InputProps } from '../input/input';
import { Label, LabelProps } from '../label/label';

type Props = InputProps & LabelProps;

export function InputField({ text, ...inputProps }: Props) {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 8,
        width: '100%',
      }}>
      <Label text={text} />
      <Input {...inputProps} />
    </View>
  );
}
