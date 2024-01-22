import {StyleSheet, Text, View} from 'react-native';
import StyledButton from '../components/StyledButton';

const Accept = ({route, navigation}) => {
  const {creditOption, amount} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.red}>Accept in just red</Text>
      <Text style={styles.bigBlue}>Credit: {JSON.stringify(creditOption)}</Text>
      <Text style={[styles.bigBlue, styles.red]}>
        Amount: {JSON.stringify(amount)}
      </Text>
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
