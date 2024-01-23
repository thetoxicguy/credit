import {View} from 'react-native';

import {PressableText, PressableContainer} from './ModalPressable.style';

const ModalPressable = () => {
  return (
    <PressableContainer>
      <PressableText>Credito 1</PressableText>
      <PressableText>$500</PressableText>
    </PressableContainer>
  );
};

export default ModalPressable;
