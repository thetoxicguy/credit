import {View, Pressable} from 'react-native';

import {PressableText} from './ModalPressable.style';

const ModalPressable = ({index, creditOption, setCreditOption}) => {
  return (
    <View>
      <Pressable
        disabled={creditOption === index}
        onPress={() => {
          setCreditOption(index);
        }}
        style={({pressed}) => {
          return [
            pressed
              ? {backgroundColor: 'gray'}
              : {backgroundColor: 'cornflowerblue'},
          ];
        }}>
        <ModalPressable>
          <PressableText>Credito 2</PressableText>
          <PressableText>$2000</PressableText>
        </ModalPressable>
      </Pressable>
    </View>
  );
};

export default ModalPressable;
