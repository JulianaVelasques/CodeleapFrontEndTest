import React, { useCallback, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'; //To generate radom id

import { postAdded } from '../../redux/reducers';

import { ButtonIcon } from '../ButtonIcon';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

// const DEFAULT_TITLE = {
//   title: '',
// };

// const DEFAULT_CONTENT = {
//   content: '',
// };

export function PostInput() {
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});

  const dispatch = useDispatch();

  const createPost = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle('');
      setContent('');
    }
  };

  // const handleResetForm = useCallback(() => {
  //   setTitle(DEFAULT_TITLE);
  //   setContent(DEFAULT_CONTENT);
  // }, []);

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
