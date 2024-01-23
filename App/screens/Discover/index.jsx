import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import StyledButton from '../../components/StyledButton';
import StyledModal from '../../components/StyledModal';
import {Description} from '../../ui/Description';
import {Title} from '../../ui/Title';
import CreditForm from '../../components/CreditForm/CreditForm';

const Discover = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title>Descubre tu crédito</Title>
      <Description>
        Llena el siguiente formulario para conocer los créditos que tenemos
        disponibles para ti.
      </Description>
      <CreditForm navigation={navigation} />
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
