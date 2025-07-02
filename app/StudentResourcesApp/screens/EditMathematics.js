import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const EditMathematics = ({ route, navigation }) => {
  const { mathematics } = route.params;

  // ‑‑ form state
  const [title, setTitle] = useState(mathematics.title || '');
  const [type, setType] = useState(mathematics.type || '');
  const [born, setBorn] = useState(mathematics.born || '');
  const [died, setDied] = useState(mathematics.died || '');
  const [knownFor, setKnownFor] = useState(mathematics.knownFor || '');
  const [about, setAbout] = useState(mathematics.about || '');

  // ‑‑ update handler
  const handleUpdate = async () => {
    try {
      const payload = { title, type, born, died, knownFor, about };

      await axios.put(
        `http://10.0.2.2:5000/api/mathematics/${mathematics._id}`,
        payload
      );

      Alert.alert('Success', 'Record updated successfully');
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to update record');
    }
  };

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

      <CustomButton title="Update Record" onPress={handleUpdate} />
    </ScrollView>
  );
};

export default EditMathematics;

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
