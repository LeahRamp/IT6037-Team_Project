import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const EditArt = ({ route, navigation }) => {
const { art } = route.params;

const [title, setTitle] = useState(art.title || '');
const [type, setType] = useState(art.type || '');
const [born, setBorn] = useState(art.born || '');
const [died, setDied] = useState(art.died || '');
const [nationality, setNationality] = useState(art.nationality || '');
const [knownFor, setKnownFor] = useState(art.KnownFor || '');
const [notableWorks, setNotableWorks] = useState(art.notableWorks || '');
const [about, setAbout] = useState(art.about || '');
const [year, setYear] = useState(art.year || '');
const [medium, setMedium] = useState(art.medium || '');
const [dimensions, setDimensions] = useState(art.dimensions || '');
const [location, setLocation] = useState(art.location || '');

const handleUpdate = async () => {
try {
    const updatedArt = {
    title,
        type,
        born,
        died,
        nationality,
        KnownFor: knownFor,
        notableWorks,
        about,
        year,
        medium,
        dimensions,
        location,
    };

    await axios.put(`http://10.0.2.2:5000/api/art/${art._id}`, updatedArt);
    Alert.alert('Success', 'Art updated successfully');
    navigation.goBack();
} catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to update art.');
}
};

return (
<ScrollView contentContainerStyle={styles.container}>
    <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
    <TextInput style={styles.input} placeholder="Type" value={type} onChangeText={setType} />
    <TextInput style={styles.input} placeholder="Born" value={born} onChangeText={setBorn} />
    <TextInput style={styles.input} placeholder="Died" value={died} onChangeText={setDied} />
    <TextInput style={styles.input} placeholder="Nationality" value={nationality} onChangeText={setNationality} />
    <TextInput style={styles.input} placeholder="Known For" value={knownFor} onChangeText={setKnownFor} />
    <TextInput style={styles.input} placeholder="Notable Works" value={notableWorks} onChangeText={setNotableWorks} />
    <TextInput style={styles.input} placeholder="About" value={about} onChangeText={setAbout} multiline />
    <TextInput style={styles.input} placeholder="Year" value={year} onChangeText={setYear} />
    <TextInput style={styles.input} placeholder="Medium" value={medium} onChangeText={setMedium} />
    <TextInput style={styles.input} placeholder="Dimensions" value={dimensions} onChangeText={setDimensions} />
    <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />

    <CustomButton title="Update Art" onPress={handleUpdate} />
</ScrollView>
);
};

export default EditArt;

const styles = StyleSheet.create({
container: {
padding: 20,
backgroundColor: '#fff',
},
input: {
borderBottomWidth: 1,
borderBottomColor: '#ccc',
marginBottom: 16,
paddingVertical: 8,
fontSize: 16,
},
});
