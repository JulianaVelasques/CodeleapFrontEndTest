import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  icon: string;
};
//Não sei como fazer um header que deixa os ícones como opcionais
export function HeaderPost({ title, icon }: Props) {
  const uri = '../../assets/delete.png';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
