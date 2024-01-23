import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import ModalPressable from './ModalPressable';
import {CenteredView} from './StyledModal.style';
import {Description} from '../../ui/Description';
import {Title} from '../../ui/Title';
import StyledButton from '../StyledButton';

const options = [
  {
    id: 1,
    name: 'Credito 1',
    value: 500,
  },
  {
    id: 2,
    name: 'Credito 2',
    value: 1000,
  },
  {
    id: 3,
    name: 'Credito 3',
    value: 1500,
  },
  {
    id: 4,
    name: 'Credito 4',
    value: 2000,
  },
];

const StyledModal = ({modalVisible, setModalVisible}) => {
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
            {options.map(option => (
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
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
    backgroundColor: '#F194FF',
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
