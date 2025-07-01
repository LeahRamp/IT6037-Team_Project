import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import AdminPage from './screens/AdminPage';
import TutorPage from './screens/TutorPage';
import Home from './screens/Home';
import Art from './screens/Art';
import Technology from './screens/Technology';
import Mathematics from './screens/Mathematics';
import ViewArt from './screens/ViewArt';
import ViewMathematics from './screens/ViewMathematics';   
import ViewTechnology from './screens/ViewTechnology';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // hide header on login screen
        />
        <Stack.Screen name="AdminPage" component={AdminPage} />
        <Stack.Screen name="TutorPage" component={TutorPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Art" component={Art} />
        <Stack.Screen name="ViewArt" component={ViewArt} options={{ title: 'Art Details' }} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="ViewTechnology" component={ViewTechnology} options={{ title: 'Technology Details' }} />
        <Stack.Screen name="Mathematics" component={Mathematics} />
        <Stack.Screen name="ViewMathematics" component={ViewMathematics} options={{ title: 'Mathematics Details' }} />
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
