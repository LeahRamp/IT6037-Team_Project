import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Art from './screens/Art';
import Technology from './screens/Technology';
import Mathematics from './screens/Mathematics';
import ViewArt from './screens/ViewArt';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Art" component={Art} />
        <Stack.Screen name="ViewArt" component={ViewArt} options={{ title: 'Art Details' }} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Mathematics" component={Mathematics} />
      </Stack.Navigator>
    </NavigationContainer>
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
