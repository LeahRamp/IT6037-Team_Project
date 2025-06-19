import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
        />
      </View>

    </ScrollView>
  )
}

export default Login

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
})