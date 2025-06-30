import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewMathematics = ({ route }) => {
const { mathematics } = route.params;

return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.label}>Title:</Text>
    <Text style={styles.title}>{mathematics.Title}</Text>

    <Text style={styles.label}>Type:</Text>
    <Text style={styles.meta}>{mathematics.Type}</Text>

    <Text style={styles.label}>Born:</Text>
    <Text style={styles.meta}>{mathematics.Born}</Text>

    <Text style={styles.label}>Died:</Text>
    <Text style={styles.meta}>{mathematics.Died}</Text>

    <Text style={styles.label}>Known For:</Text>
    <Text style={styles.meta}>{mathematics.KnownFor}</Text>

    <Text style={styles.label}>About:</Text>
    <Text style={styles.about}>{mathematics.About}</Text>

    <Text style={styles.label}>ID:</Text>
    <Text style={styles.meta}>{mathematics._id}</Text>
</ScrollView>
);
};

export default ViewMathematics;

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
