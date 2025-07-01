import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const ViewArt = ({ route }) => {
  const { art } = route.params;
  const navigation = useNavigation();
  const [deleting, setDeleting] = useState(false);

  /* ----- delete handler ----- */
  const handleDelete = () => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you want to delete this record?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setDeleting(true);
              await axios.delete(`http://10.0.2.2:5000/api/art/${art._id}`);
              navigation.goBack();           // or navigation.navigate('Art')
            } catch (err) {
              Alert.alert('Error', 'Could not delete the record.');
            } finally {
              setDeleting(false);
            }
          },
        },
      ]
    );
  };

  return (
<<<<<<< HEAD
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.value}>{art.title}</Text>

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
=======
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* ------------- Details ------------- */}
        {[
          ['Title', art.title],
          ['ID', art._id],
          ['Type', art.type],
          ['Born', art.born],
          ['Died', art.died],
          ['Nationality', art.nationality],
          ['Known for', art.KnownFor],
          ['Notable works', art.notableWorks],
          ['About', art.about],
          ['Year', art.year],
          ['Medium', art.medium],
          ['Dimensions', art.dimensions],
          ['Location', art.location],
        ].map(([label, value]) => (
          <View key={label}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value || 'N/A'}</Text>
          </View>
        ))}
      </ScrollView>

      {/* ------------- Action Buttons ------------- */}
      <View style={styles.actionBar}>
        <CustomButton
          title="Edit"
          onPress={() => navigation.navigate('EditArt', { art })}
          style={styles.editBtn}
        />
        <CustomButton
          title={deleting ? 'Deleting...' : 'Delete'}
          onPress={handleDelete}
          style={styles.deleteBtn}
        />
      </View>
    </View>
>>>>>>> 5f61bcf80de2b6e99c73a33ede7138b348b326b1
  );
};

export default ViewArt;

/* ---------- styles ---------- */
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 20, paddingBottom: 80 }, // leave room for buttons
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
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
  },
  editBtn: { flex: 1, marginHorizontal: 10 },
  deleteBtn: { flex: 1, marginHorizontal: 10, backgroundColor: '#e53935' },
});
