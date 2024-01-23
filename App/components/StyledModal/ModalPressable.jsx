import {PressableText, PressableContainer} from './ModalPressable.style';

const ModalPressable = ({option}) => {
  return (
    <PressableContainer>
      <PressableText>{option.name}</PressableText>
      <PressableText>${option.value}</PressableText>
    </PressableContainer>
  );
};

export default ModalPressable;
