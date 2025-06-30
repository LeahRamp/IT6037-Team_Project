import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewMathematics = ({ route }) => {
const { Mathematics } = route.params;

return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.label}>Title:</Text>
    <Text style={styles.title}>{Mathematics.Title}</Text>

    <Text style={styles.label}>Type:</Text>
    <Text style={styles.meta}>{Mathematics.Type}</Text>

    <Text style={styles.label}>Born:</Text>
    <Text style={styles.meta}>{Mathematics.Born}</Text>

    <Text style={styles.label}>Died:</Text>
    <Text style={styles.meta}>{Mathematics.Died}</Text>

    <Text style={styles.label}>Known For:</Text>
    <Text style={styles.meta}>{Mathematics.KnownFor}</Text>

    <Text style={styles.label}>About:</Text>
    <Text style={styles.about}>{Mathematics.About}</Text>

    <Text style={styles.label}>ID:</Text>
    <Text style={styles.meta}>{Mathematics._id}</Text>
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
