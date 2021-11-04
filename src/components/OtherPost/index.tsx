import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Icon } from '@expo/vector-icons/build/createIconSet';

type Props = {
  name: string;
  time: string;
  title: string;
  content: string;
};

export function OtherPost({ name, time, title, content }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperData}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
}
