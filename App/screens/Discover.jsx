import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import StyledButton from '../components/StyledButton';
import StyledModal from '../components/StyledModal';

const Discover = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Discover in just red</Text>
      <Text style={styles.bigBlue}>Discover in just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>
        Discover in bigBlue, then red
      </Text>
      <Text style={[styles.red, styles.bigBlue]}>
        Discover in red, then bigBlue
      </Text>
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

export default Discover;
