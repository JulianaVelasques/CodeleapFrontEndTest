import React, { useState } from 'react';
import { View, Text, Modal, Pressable, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ButtonIcon } from '../ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { PostInput } from '../PostInput';
type Props = {
  name: string;
  time: string;
  title: string;
  content: string;
};

export function PostContent({ name, time, title, content }: Props) {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const modalBackgroundStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons
          name={'delete-forever'}
          size={15}
          color={theme.colors.primary}
          style={styles.icon}
          onPress={() => setModalDelete(true)}
        />

        <MaterialCommunityIcons
          name={'square-edit-outline'}
          size={15}
          color={theme.colors.primary}
          style={styles.icon}
          onPress={() => setModalEdit(false)}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperData}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
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
              <ButtonIcon title="OK" background={theme.colors.primary} textColor={theme.colors.secondary100} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Edit item modal */}
      <Modal visible={modalEdit} onRequestClose={() => setModalDelete(false)} transparent={true}>
        <PostInput />
      </Modal>
    </View>
  );
}
