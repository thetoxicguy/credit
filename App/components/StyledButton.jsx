import {Text, Button, StyleSheet} from 'react-native';

const StyledButton = ({title = 'Go', onPress}) => {
  return <Button title={title} onPress={onPress} />;
};

export default StyledButton;
