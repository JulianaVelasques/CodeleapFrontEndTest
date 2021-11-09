import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  background: string;
  textColor?: string;
  borderColor?: string;
  onPress?: () => void;
};

export function ButtonIcon({ title, background, textColor, borderColor, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: background }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}> {title} </Text>
    </TouchableOpacity>
  );
}
