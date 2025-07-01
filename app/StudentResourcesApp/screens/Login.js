import { Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

// Importing Firebase configuration
import '../firebaseconfig';

// Firebase authentication functions
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Functional component for Login screen
const Login = ({ navigation }) => {
  // State variables to hold user input for email and password
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

   // Hardcoded Admin UID for role-based navigation
  const ADMIN_UID = 'HdPDpJCvMwPPFOLfA17Oun9799g1'

  // Function to handle login action
  const handleLogin = () => {
    // Basic validation for empty fields
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password.");
      return;
    }

    // Get Firebase auth instance
    const auth = getAuth();

    // Attempt to sign in using Firebase authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Get details of the user who just signed in
        const signInUser = userCredential.user;
        console.log("Login Successful:", signInUser.email);

        // Check if the user is an admin and navigate accordingly
        if (signInUser.uid === ADMIN_UID) {
          navigation.navigate('AdminPage');
        }else {
        navigation.navigate('Home');
        }
      })
      .catch((error) => {
         // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Login Error:", errorCode, errorMessage);
        Alert.alert("Login Failed", errorMessage);
      });  
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
          secureTextEntry
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
    backgroundColor: '#fff',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
