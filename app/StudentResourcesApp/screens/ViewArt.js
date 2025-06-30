import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewArt = ({ route }) => {
  const { art } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{art.Title}</Text>
      <Text style={styles.about}>{art.About}</Text>
      {/* Add other fields like image, artist, year, etc., if available */}
      {/* Example: */}
      {art.artist && <Text style={styles.meta}>Artist: {art.artist}</Text>}
      {art.year && <Text style={styles.meta}>Year: {art.year}</Text>}
    </ScrollView>
  );
};

export default ViewArt;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  about: {
    fontSize: 16,
    marginBottom: 20,
  },
  meta: {
    fontSize: 14,
    color: '#555',
  },
});
