import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';

import {CreditContext} from './CreditContext';
import Accept from './screens/Accept';
import Discover from './screens/Discover';

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedCredit, setSelectedCredit] = useState();
  const [selectedValue, setSelecteValue] = useState();
  return (
    <CreditContext.Provider
      value={{
        selectedCredit,
        setSelectedCredit,
        selectedValue,
        setSelecteValue,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="discover"
            component={Discover}
            options={{title: 'Descubre tu crédito'}}
          />
          <Stack.Screen
            name="accept"
            component={Accept}
            options={{title: 'Acepta tu crédito'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CreditContext.Provider>
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
