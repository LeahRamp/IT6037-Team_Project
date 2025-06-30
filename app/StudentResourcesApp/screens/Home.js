import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Button
        title="Art"
        onPress={() => navigation.navigate('Art')}
      />
      <Button
        title="Technology"
        onPress={() => navigation.navigate('Technology')}
      />
      <Button
        title="Mathematics"
        onPress={() => navigation.navigate('Mathematics')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;
