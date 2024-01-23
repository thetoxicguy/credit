import {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CreditContext} from '../CreditContext';
import StyledButton from '../components/StyledButton';
import {Title} from '../ui/Title';
import {Description} from '../ui/Description';

const Accept = ({navigation}) => {
  const {selectedCredit, setSelectedCredit, selectedValue, setSelectedValue} =
    useContext(CreditContext);
  // useEffect(() => {
  //   setSelectedCredit();
  //   setSelectedValue();
  // }, []);
  return (
    <View style={styles.container}>
      <Title>Acepta tu crédito</Title>
      <Description>
        Confirma que has seleccionado el crédito deseado
      </Description>
      <Text style={styles.bigBlue}>Credit: {selectedCredit}</Text>
      <Text style={[styles.bigBlue, styles.red]}>Value: {selectedValue}</Text>
      <Text style={[styles.red, styles.bigBlue]}>
        Accept in red, then bigBlue
      </Text>
      <StyledButton title="Contratar" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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

export default Accept;
