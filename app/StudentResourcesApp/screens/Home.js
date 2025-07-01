import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton'; // adjust path if needed

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learning Resource Hub</Text>
      <Text style={styles.subtitle}>Choose a category to explore</Text>

      <View style={styles.buttonGroup}>
        <CustomButton title="Art" onPress={() => navigation.navigate('Art')} />
        <CustomButton title="Technology" onPress={() => navigation.navigate('Technology')} />
        <CustomButton title="Mathematics" onPress={() => navigation.navigate('Mathematics')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: '#f8f9fa', // subtle light grey background
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1f2937', // neutral dark grey
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280', // soft grey
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonGroup: {
    gap: 16,
    paddingHorizontal: 20,
  },
});

export default Home;
