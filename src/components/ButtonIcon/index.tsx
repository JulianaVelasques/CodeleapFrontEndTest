import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  background: string;
  textColor?: string;
  borderColor?: string;
};

export function ButtonIcon({ title, background, textColor, borderColor, ...rest }: Props) {
  return (
    <View style={{ borderColor: borderColor }}>
      <RectButton style={[styles.container, { backgroundColor: background }]} {...rest}>
        <Text style={[styles.text, { color: textColor }]}> {title} </Text>
      </RectButton>
    </View>
  );
}
