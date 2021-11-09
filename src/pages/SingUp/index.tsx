import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userAdded } from '../../redux/reducers/users';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SingUp() {
  const [user, setUser] = useState('');

  const dispatch = useDispatch();

  const createUser = () => {
    if (user) {
      dispatch(
        userAdded({
          id: nanoid(),
          user,
        })
      );

      setUser('');
    }
  };

  const navigation = useNavigation<any>();

  function handleSingUp() {
    createUser();
    navigation.navigate('MainScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to CodeLeap network!</Text>
        <Text style={styles.text}>Please enter your username</Text>
        <TextInput style={styles.input} placeholder={'John Doe'} onChangeText={setUser} />
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
