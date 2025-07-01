import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewArt = ({ route }) => {
  const { art } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{art.title}</Text>
      <Text style={styles.subId}>ID: {art._id}</Text>

      <Text style={styles.label}>Type</Text>
      <Text style={styles.value}>{art.type}</Text>

      <Text style={styles.label}>Born</Text>
      <Text style={styles.value}>{art.born}</Text>

      <Text style={styles.label}>Died</Text>
      <Text style={styles.value}>{art.died}</Text>

      <Text style={styles.label}>Nationality</Text>
      <Text style={styles.value}>{art.nationality}</Text>

      <Text style={styles.label}>Known For</Text>
      <Text style={styles.value}>{art.KnownFor}</Text>

      <Text style={styles.label}>Notable Works</Text>
      <Text style={styles.value}>{art.notableWorks}</Text>

      <Text style={styles.label}>About</Text>
      <Text style={styles.about}>{art.about}</Text>

      <Text style={styles.label}>Year</Text>
      <Text style={styles.value}>{art.year}</Text>

      <Text style={styles.label}>Medium</Text>
      <Text style={styles.value}>{art.medium}</Text>

      <Text style={styles.label}>Dimensions</Text>
      <Text style={styles.value}>{art.dimensions}</Text>

      <Text style={styles.label}>Location</Text>
      <Text style={styles.value}>{art.location}</Text>
    </ScrollView>
  );
};

export default ViewArt;

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
  value: {
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
