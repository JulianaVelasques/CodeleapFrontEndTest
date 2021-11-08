import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { postUpdated } from '../../redux/reducers';

import { ButtonIcon } from '../ButtonIcon';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  closeModal: () => void;
  idDoPost: string;
};

export function PostEdit({ closeModal, idDoPost }: Props) {
  //@ts-ignore
  const post = useSelector((state) => state.posts.find((post) => post.id == idDoPost));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();

  const savePost = () => {
    if (title && content) {
      console.log('entrando no savepost');
      dispatch(postUpdated({ id: post.id, title, content }));
    }
  };

  useEffect(() => {
    console.log('id do usuario');
    console.log(idDoPost);
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>blablal</Text>
        <Text style={styles.title}>Edit item</Text>

        <View style={styles.wrapper}>
          <Text style={styles.text}>Title</Text>
          <TextInput style={styles.input} placeholder="Hello world" value={title} onChangeText={setTitle} />
        </View>

        <Text style={styles.text}>Content</Text>
        <TextInput
          style={[styles.inputContent, styles.input]}
          multiline={true}
          placeholder="Content here"
          value={content}
          onChangeText={setContent}
        />

        <View style={styles.button}>
          <ButtonIcon
            title="SAVE"
            background={theme.colors.secondary100}
            textColor={theme.colors.primary}
            onPress={() => {
              savePost();
              closeModal();
            }}
          />
        </View>
      </View>
    </View>
  );
}