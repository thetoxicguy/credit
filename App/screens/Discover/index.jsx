import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CreditForm} from '../../components/CreditForm.jsx';
import StyledButton from '../../components/StyledButton';
import StyledModal from '../../components/StyledModal';
import {Description} from '../../ui/Description';
import {Title} from '../../ui/Title';

const Discover = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Title>Descubre tu crédito</Title>
      <Description>
        Llena el siguiente formulario para conocer los créditos que tenemos
        disponibles para ti.
      </Description>
      {/* <CreditForm /> */}
      <StyledButton
        title="Descubrir créditos"
        onPress={() => {
          navigation.navigate('Accept', {creditOption: 2, amount: 1500});
        }}
      />
      <StyledModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Discover;
