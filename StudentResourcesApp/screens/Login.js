import { Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

// Import Firebase auth
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Import Firebase config (this should initialize your app)
import '../firebaseconfig';

const Login = ({ navigation }) => {
  // State to hold user inputs
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Hardcoded UID-role mapping
  const USER_ROLES = {
    'HdPDpJCvMwPPFOLfA17Oun9799g1': 'admin',  
    'xvXwPd9zyOfedRDDpQDgGKXW3Yo2': 'tutor',             
    // Add more UIDs as needed
  };

  // Handle login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const signInUser = userCredential.user;

      console.log('Login Successful:', signInUser.email);

      // Get role from hardcoded UID map
      const role = USER_ROLES[signInUser.uid] || 'user'; // default to 'user'

      // Navigate based on role
      if (role === 'admin') {
        navigation.navigate('AdminPage');
      } else if (role === 'tutor') {
        navigation.navigate('TutorPage');
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('Login Error:', error.code, error.message);
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <CustomInput
          label="Email"
          value={email}
          onChangeText={setUserName}
          placeholder="Enter your email..."
        />
        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password..."
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          onPress={handleLogin}
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
