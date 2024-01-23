import {Button} from 'react-native';

const StyledButton = ({title = 'Go', onPress, disabled}) => {
  return <Button title={title} onPress={onPress} disabled={disabled} />;
};

export default StyledButton;
