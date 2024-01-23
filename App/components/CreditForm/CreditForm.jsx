import {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

// import StyledButton from './StyledButton';
import {BorderedInput, InputLabel} from './CreditForm.style';
import StyledModal from '../StyledModal';

const CreditForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <InputLabel>Nombre</InputLabel>
      <BorderedInput
        minLength={15}
        onChangeText={text => setName(text)}
        value={name}
      />
      <InputLabel>Correo</InputLabel>
      <BorderedInput
        minLength={15}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      {!name || !email ? null : (
        <StyledModal
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </View>
  );
};

export default CreditForm;
