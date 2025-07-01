import React, { useState } from 'react';
import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const AddArt = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Type: '',
    Born: '',
    Died: '',
    Nationality: '',
    KnownFor: '',
    NotableWorks: '',
    About: '',
    Year: '',
    Medium: '',
    Dimensions: '',
    Location: '',
  });

  const navigation = useNavigation();

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    axios.post('http://10.0.2.2:5000/api/art', formData)
      .then(() => {
        Alert.alert('Success', 'Art entry added!');
        navigation.goBack();
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Error', 'Failed to add art.');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(formData).map(([key, value]) => (
        <CustomInput
          key={key}
          label={key}
          value={value}
          onChangeText={(text) => handleChange(key, text)}
          placeholder={`Enter ${key}`}
        />
      ))}

      <CustomButton title="Add Art" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default AddArt;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
