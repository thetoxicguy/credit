import {StatusBar} from 'expo-status-bar';
// import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import StyledModal from './components/StyledModal';

export default function App() {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Hello danrolo</Text>
      <StatusBar style="auto" />
      {/* <StyledModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
