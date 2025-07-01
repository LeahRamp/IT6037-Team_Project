import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewArt = ({ route }) => {
  const { art } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{art.title}</Text>

      <Text style={styles.label}>ID:</Text>
      <Text style={styles.value}>{art._id}</Text>

      <Text style={styles.label}>Type:</Text>
      <Text style={styles.value}>{art.type}</Text>

      <Text style={styles.label}>Born:</Text>
      <Text style={styles.value}>{art.born}</Text>

      <Text style={styles.label}>Died:</Text>
      <Text style={styles.value}>{art.died}</Text>

      <Text style={styles.label}>Nationality:</Text>
      <Text style={styles.value}>{art.nationality}</Text>

      <Text style={styles.label}>Known for:</Text>
      <Text style={styles.value}>{art.KnownFor}</Text>

      <Text style={styles.label}>Notable works:</Text>
      <Text style={styles.value}>{art.notableWorks}</Text>

      <Text style={styles.label}>About:</Text>
      <Text style={styles.value}>{art.about}</Text>

      <Text style={styles.label}>Year:</Text>
      <Text style={styles.value}>{art.year}</Text>

      <Text style={styles.label}>Medium:</Text>
      <Text style={styles.value}>{art.medium}</Text>

      <Text style={styles.label}>Dimensions:</Text>
      <Text style={styles.value}>{art.dimensions}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>{art.location}</Text>
    </ScrollView>
  );
};

export default ViewArt;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  value: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },
});
