import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useState} from 'react';

import Accept from './screens/Accept';
import Discover from './screens/Discover';

// import StyledModal from './components/StyledModal';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{title: 'Descubre tu crédito'}}
        />
        <Stack.Screen
          name="Accept"
          component={Accept}
          options={{title: 'Acepta tu crédito'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
