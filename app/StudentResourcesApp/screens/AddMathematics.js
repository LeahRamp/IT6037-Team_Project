import React, { useState } from 'react';
import { View, ScrollView, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const AddMathematics= () => {
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
    axios.post('http://10.0.2.2:5000/api/mathematics', formData)
      .then(() => {
        Alert.alert('Success', 'Mathematics entry added!');
        navigation.goBack();
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Error', 'Failed to add Mathematics.');
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

      <CustomButton title="Add Mathematics" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default AddMathematics;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
