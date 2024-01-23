import styled from 'styled-components/native';

const CenteredView = styled.View`
  flex: 1;
  justify-content: 'center';
  align-items: 'center';
  margin-top: 22;
`;

const ModalView = styled.View`
  /* margin: 20; */
  background-color: 'white';
  /* border-radius: 20; */
  /* padding: 35; */
  align-items: 'center';
  /* shadow-color: '#000'; */
  /* shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25; */
  /* shadow-radius: 4; */
  /* elevation: 5; */
`;

export const ModalContent = ({setModalVisible, children}) => {
  return (
    <CenteredView>
      <ModalView>{children}</ModalView>
    </CenteredView>
  );
};
