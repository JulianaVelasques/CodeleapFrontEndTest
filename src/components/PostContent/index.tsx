import React, { useState } from 'react';
import { View, Text, Modal, Pressable, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ButtonIcon } from '../ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
type Props = {
  name: string;
  time: string;
  title: string;
  content: string;
};

export function PostContent({ name, time, title, content }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  // const modalConfirmDelete = () => {
  //   return Alert.alert('Are you sure you want to delete this item?', '', [
  //     //Yes button
  //     {
  //       text: 'Yes',
  //       onPress: () => {
  //         setModalVisible(false);
  //       },
  //     },
  //     //No button
  //     //Does nothing but dismiss the dialog when tapped
  //     {
  //       text: 'No',
  //     },
  //   ]);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons
          name={'delete-forever'}
          size={15}
          color={theme.colors.primary}
          style={styles.icon}
          // onPress={() => modalConfirmDelete()}
        />

        <MaterialCommunityIcons
          name={'square-edit-outline'}
          size={15}
          color={theme.colors.primary}
          style={styles.icon}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperData}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>

      {/* Modal Delete Confirmation */}

      {/* <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View
          style={styles.centeredView}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <View style={styles.buttonWrapper}>
              <Pressable style={styles.button}>

              </Pressable>
              <ButtonIcon
                title="Cancel"
                background={theme.colors.primary}
                textColor={theme.colors.secondary100}
                borderColor={theme.colors.secondary100}
                onPress={() => {
                  setModalVisible(false);
                }}
              />
              <ButtonIcon title="OK" background={theme.colors.primary} textColor={theme.colors.secondary100} />
            </View>
          </View>
        </View>
      </Modal> */}
    </View>
  );
}
