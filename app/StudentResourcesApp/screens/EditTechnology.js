import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const EditTechnology = ({ route, navigation }) => {
const { technology } = route.params;

/* ---------- form state ---------- */
const [title, setTitle] = useState(technology.title || '');
const [type, setType] = useState(technology.type || '');
const [born, setBorn] = useState(technology.born || '');
const [died, setDied] = useState(technology.died || '');
const [nationality, setNationality] = useState(technology.nationality || '');
const [knownFor, setKnownFor] = useState(technology.knownFor || '');
const [about, setAbout] = useState(technology.about || '');
const [designedBy, setDesignedBy] = useState(technology.designedBy || '');
const [developer, setDeveloper] = useState(technology.developer || '');

/* ---------- submit handler ---------- */
const handleUpdate = async () => {
try {
    const payload = {
    title,
    type,
    born,
    died,
    nationality,
    knownFor,
    about,
    designedBy,
    developer,
    };

    await axios.put(
    `http://10.0.2.2:5000/api/technology/${technology._id}`,
    payload
    );

    Alert.alert('Success', 'Record updated successfully');
    navigation.goBack();
} catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to update record');
}
};

/* ---------- UI ---------- */
return (
<ScrollView contentContainerStyle={styles.container}>
    <TextInput
    style={styles.input}
    placeholder="Title"
    value={title}
    onChangeText={setTitle}
    />
    <TextInput
    style={styles.input}
    placeholder="Type"
    value={type}
    onChangeText={setType}
    />
    <TextInput
    style={styles.input}
    placeholder="Born"
    value={born}
    onChangeText={setBorn}
    />
    <TextInput
    style={styles.input}
    placeholder="Died"
    value={died}
    onChangeText={setDied}
    />
    <TextInput
    style={styles.input}
    placeholder="Nationality"
    value={nationality}
    onChangeText={setNationality}
    />
    <TextInput
    style={styles.input}
    placeholder="Known For"
    value={knownFor}
    onChangeText={setKnownFor}
    />
    <TextInput
    style={styles.input}
    placeholder="About"
    value={about}
    onChangeText={setAbout}
    multiline
    />
    <TextInput
    style={styles.input}
    placeholder="Designed By"
    value={designedBy}
    onChangeText={setDesignedBy}
    />
    <TextInput
    style={styles.input}
    placeholder="Developer"
    value={developer}
    onChangeText={setDeveloper}
    />

    <CustomButton title="Update Record" onPress={handleUpdate} />
</ScrollView>
);
};

export default EditTechnology;

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
