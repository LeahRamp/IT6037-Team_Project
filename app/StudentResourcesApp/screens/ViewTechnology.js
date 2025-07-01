import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewTechnology = ({ route }) => {
const { technology } = route.params;

return (
    <ScrollView contentContainerStyle={styles.container}>
  <Text style={styles.label}>Title:</Text>
  <Text style={styles.title}>{technology.title}</Text>
  
  <Text style={styles.label}>Type:</Text>
  <Text style={styles.meta}>{technology.type}</Text>

  <Text style={styles.label}>Born:</Text>
  <Text style={styles.meta}>{technology.born}</Text>

  <Text style={styles.label}>Died:</Text>
  <Text style={styles.meta}>{technology.died}</Text>

  <Text style={styles.label}>Nationality:</Text>
  <Text style={styles.meta}>{technology.nationality}</Text>

  <Text style={styles.label}>Known For:</Text>
  <Text style={styles.meta}>{technology.knownFor}</Text>

  <Text style={styles.label}>About:</Text>
  <Text style={styles.about}>{technology.about}</Text>

  <Text style={styles.label}>ID:</Text>
  <Text style={styles.meta}>{technology._id}</Text>
  
  <Text style={styles.label}>Designed by:</Text>
  <Text style={styles.meta}>{technology.designedBy }</Text>

  <Text style={styles.label}>Developer:</Text>
  <Text style={styles.meta}>{technology.developer}</Text>
</ScrollView>

);
};

export default ViewTechnology;

const styles = StyleSheet.create({
container: {
padding: 20,
backgroundColor: '#fff',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 15,
},
label: {
fontSize: 16,
fontWeight: '600',
marginTop: 10,
},
meta: {
fontSize: 15,
color: '#333',
},
about: {
fontSize: 15,
color: '#555',
marginBottom: 20,
},
});
