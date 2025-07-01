import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewMathematics = ({ route }) => {
  const { mathematics } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{mathematics.title}</Text>
      <Text style={styles.subId}>ID: {mathematics._id}</Text>

      <Text style={styles.label}>Type</Text>
      <Text style={styles.meta}>{mathematics.type}</Text>

      <Text style={styles.label}>Born</Text>
      <Text style={styles.meta}>{mathematics.born}</Text>

      <Text style={styles.label}>Died</Text>
      <Text style={styles.meta}>{mathematics.died}</Text>

      <Text style={styles.label}>Known For</Text>
      <Text style={styles.meta}>{mathematics.knownFor}</Text>

      <Text style={styles.label}>About</Text>
      <Text style={styles.about}>{mathematics.about}</Text>
    </ScrollView>
  );
};

export default ViewMathematics;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subId: {
    fontSize: 13,
    color: '#999',
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6c757d',
    marginTop: 16,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  meta: {
    fontSize: 16,
    color: '#333',
  },
  about: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginTop: 4,
  },
});
