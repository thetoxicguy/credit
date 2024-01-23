import {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CreditContext} from '../../CreditContext';
import StyledButton from '../../components/StyledButton';
import {Title} from '../../ui/Title';
import {Description} from '../../ui/Description';
import {
  SelectedCreditContainer,
  ShowContainer,
  WhiteText,
} from './Accept.style';

const Accept = ({route, navigation}) => {
  const {name, value} = route.params;
  const [selectedCredit, setSelectedCredit] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  useContext(CreditContext);

  useEffect(() => {
    setSelectedCredit(JSON.stringify(name));
    setSelectedValue(JSON.stringify(value));
  }, []);

  return (
    <View style={styles.container}>
      <Title>Acepta tu crédito</Title>
      <Description>
        Confirma que has seleccionado el crédito deseado
      </Description>
      <SelectedCreditContainer>
        <Description>Crédito seleccionado:</Description>
        <ShowContainer>
          <WhiteText>
            {name}
            <Text> </Text>
          </WhiteText>
          <WhiteText> ${JSON.stringify(value)}</WhiteText>
        </ShowContainer>
      </SelectedCreditContainer>
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
