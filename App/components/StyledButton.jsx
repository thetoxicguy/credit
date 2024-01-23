import {Button} from 'react-native';

const StyledButton = ({title = 'Go', onPress}) => {
  return <Button title={title} onPress={onPress} />;
};

export default StyledButton;
