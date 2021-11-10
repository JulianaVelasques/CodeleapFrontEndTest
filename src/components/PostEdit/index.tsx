import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { postUpdated } from '../../redux/reducers/posts';

import { ButtonIcon } from '../ButtonIcon';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  //Created to use a function closeModal on the father element (PostContent)
  closeModal: () => void;
  //Created to be able to get the id from the PostContent
  idPost: string;
};

export function PostEdit({ closeModal, idPost }: Props) {
  //@ts-ignore
  const post = useSelector((state) => state.posts.find((post) => post.id == idPost));

  //Geting the current value through the post id and setting it to the current state
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  //Hadling post updating
  const dispatch = useDispatch();

  const savePost = () => {
    if (title && content) {
      dispatch(postUpdated({ id: post.id, title, content }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Edit item</Text>

        <View style={styles.wrapper}>
          <Text style={styles.text}>Title</Text>
          <TextInput style={styles.input} placeholder="Hello world" value={title} onChangeText={setTitle} />
        </View>

        <Text style={styles.text}>Content</Text>
        <TextInput
          style={[styles.inputContent, styles.input]}
          multiline
          numberOfLines={5}
          placeholder="Content here"
          value={content}
          onChangeText={setContent}
          textAlign="left"
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
