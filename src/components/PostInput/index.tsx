import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { theme } from '../../global/styles/theme';

import { ButtonIcon } from '../ButtonIcon';

import { styles } from './styles';

export function PostInput() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>What's on your mind?</Text>

        <View style={styles.wrapper}>
          <Text style={styles.text}>Title</Text>
          <TextInput style={styles.input} placeholder="Hello world" />
        </View>

        <Text style={styles.text}>Content</Text>
        <TextInput style={[styles.inputContent, styles.input]} multiline={true} placeholder="Content here" />

        <View style={styles.button}>
          <ButtonIcon title="CREATE" background={theme.colors.secondary100} textColor={theme.colors.primary} />
        </View>
      </View>
    </View>
  );
}
