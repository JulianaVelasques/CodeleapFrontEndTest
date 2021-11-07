import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { theme } from '../../global/styles/theme';

import { ButtonIcon } from '../ButtonIcon';

import { styles } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from './../../redux/reducers';

export function PostInput() {
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});

  const dispatch = useDispatch();
  const createPost = () => {
    console.log('createPost iniciado');

    dispatch(setPosts({ posts: [{ id: 1, title, content }] }));

    console.log('createPost finalizado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>What's on your mind?</Text>

        <View style={styles.wrapper}>
          <Text style={styles.text}>Title</Text>
          <TextInput style={styles.input} placeholder="Hello world" onChangeText={setTitle} />
        </View>

        <Text style={styles.text}>Content</Text>
        <TextInput
          style={[styles.inputContent, styles.input]}
          multiline={true}
          placeholder="Content here"
          onChangeText={setContent}
        />

        <View style={styles.button}>
          <ButtonIcon
            title="CREATE"
            background={theme.colors.secondary100}
            textColor={theme.colors.primary}
            onPress={() => createPost()}
          />
        </View>
      </View>
    </View>
  );
}
