import axios from 'axios';
import {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import ModalPressable from './ModalPressable';
import {CenteredView} from './StyledModal.style';
import {Description} from '../../ui/Description';
import {Title} from '../../ui/Title';
import StyledButton from '../StyledButton';

const url = 'https://mocki.io/v1/2156ae74-9927-4f44-8960-dbdbd0d798ac';

const StyledModal = ({modalVisible, setModalVisible}) => {
  const [creditOptions, setCreditOptions] = useState([]);

  const handlePress = () => {
    axios
      .get(url)
      .then(res => {
        setCreditOptions(res.data.data);
        setModalVisible(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <CenteredView>
          <View style={styles.modalView}>
            <Title>¡Felicidades!</Title>
            <Description>Encontramos estos créditos para ti:</Description>
            {creditOptions.map(option => (
              <ModalPressable
                option={option}
                onPress={() => {}}
                key={option.name}
              />
            ))}
            <StyledButton
              title="Seleccionar crédito"
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </StyledButton>
          </View>
        </CenteredView>
      </Modal>
      {/* TODO: Fetch call is made here */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={handlePress}>
        <Text style={styles.textStyle}>Descubrir Créditos</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default StyledModal;
