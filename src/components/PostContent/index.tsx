import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { postDeleted } from '../../redux/reducers/posts';

import { ButtonIcon } from '../ButtonIcon';
import { PostEdit } from '../PostEdit';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { formatDistanceToNow } from 'date-fns';

type Props = {
  id?: string;
  name: string;
  time: any;
  title: string;
  content: string;
  hasIcons?: boolean;
};

export function PostContent({ id, name, time, title, content, hasIcons }: Props) {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  //To set modal background opacity
  const modalBackgroundStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  //handling post deletion
  const dispatch = useDispatch();

  const deletePost = () => {
    if (id) {
      dispatch(postDeleted({ id: id }));
    }
    setModalDelete(false);
  };

  //To use in modalEdit to get close the modal component using the useState of the PostContent component
  const closeModal = () => {
    setModalEdit(false);
  };

  //time Ago

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {hasIcons && (
          <MaterialCommunityIcons
            name={'delete-forever'}
            size={15}
            color={theme.colors.primary}
            style={styles.icon}
            onPress={() => setModalDelete(true)}
          />
        )}
        {hasIcons && (
          <MaterialCommunityIcons
            name={'square-edit-outline'}
            size={15}
            color={theme.colors.primary}
            style={styles.icon}
            onPress={() => setModalEdit(true)}
          />
        )}
      </View>

      <View style={styles.wrapper}>
        <View style={styles.wrapperData}>
          <Text style={styles.name}>@{name}</Text>
          <Text style={styles.time}>{time} ago</Text>
        </View>

        <Text style={styles.content}>{content}</Text>
      </View>

      {/* Delete item modal */}
      <Modal animationType="fade" visible={modalDelete} onRequestClose={() => setModalDelete(false)} transparent={true}>
        <View style={[styles.centeredView, modalBackgroundStyle]}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <View style={styles.buttonWrapper}>
              <ButtonIcon
                title="Cancel"
                background={theme.colors.primary}
                textColor={theme.colors.secondary100}
                borderColor={theme.colors.secondary100}
                onPress={() => setModalDelete(false)}
              />
              <ButtonIcon
                title="OK"
                background={theme.colors.primary}
                textColor={theme.colors.secondary100}
                onPress={() => deletePost()}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Edit item modal */}
      <Modal visible={modalEdit} onRequestClose={() => setModalEdit(false)} transparent={true}>
        <View style={[styles.centeredView, modalBackgroundStyle]}>
          <PostEdit idPost={String(id)} closeModal={() => closeModal()} />
        </View>
      </Modal>
    </View>
  );
}
