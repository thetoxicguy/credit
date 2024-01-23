import styled, {css} from 'styled-components/native';

export const PressableContainer = styled.TouchableOpacity`
  ${props =>
    props.disabled &&
    css`
      color: cornflowerblue;
    `}
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  background-color: blue;
  margin: 4px;
  padding: 6px;
`;

export const PressableText = styled.Text`
  color: white;
`;
