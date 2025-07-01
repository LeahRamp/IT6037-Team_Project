import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewTechnology = ({ route }) => {
  const { technology } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.title}>{technology.title}</Text>
      <Text style={styles.subId}>ID: {technology._id}</Text>

      {/* Details */}
      <Text style={styles.label}>Type</Text>
      <Text style={styles.meta}>{technology.type}</Text>

      <Text style={styles.label}>Born</Text>
      <Text style={styles.meta}>{technology.born}</Text>

      <Text style={styles.label}>Died</Text>
      <Text style={styles.meta}>{technology.died}</Text>

      <Text style={styles.label}>Nationality</Text>
      <Text style={styles.meta}>{technology.nationality}</Text>

      <Text style={styles.label}>Known For</Text>
      <Text style={styles.meta}>{technology.knownFor}</Text>

      <Text style={styles.label}>About</Text>
      <Text style={styles.about}>{technology.about}</Text>

      <Text style={styles.label}>Designed by</Text>
      <Text style={styles.meta}>{technology.designedBy}</Text>

      <Text style={styles.label}>Developer</Text>
      <Text style={styles.meta}>{technology.developer}</Text>
    </ScrollView>
  );
};

export default ViewTechnology;

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
