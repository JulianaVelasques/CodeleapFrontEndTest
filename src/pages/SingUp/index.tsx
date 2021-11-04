import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SingUp() {
  const navigation = useNavigation<any>();

  function handleSingUp() {
    navigation.navigate('MainScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to CodeLeap network!</Text>
        <Text style={styles.text}>Please enter your username</Text>
        <TextInput style={styles.input} placeholder={'John Doe'} />
        <View style={styles.button}>
          <ButtonIcon
            title="ENTER"
            onPress={() => handleSingUp()}
            background={theme.colors.secondary100}
            textColor={theme.colors.primary}
          />
        </View>
      </View>
    </View>
  );
}
