import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const ViewMathematics = ({ route }) => {
  const { mathematics } = route.params;
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
              await axios.delete(`http://10.0.2.2:5000/api/mathematics/${mathematics._id}`);
              navigation.goBack();           // or navigation.navigate('Mathematics')
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
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{mathematics.title}</Text>
        <Text style={styles.subId}>ID: {mathematics._id}</Text>

        {([
          ['Type', mathematics.type],
          ['Born', mathematics.born],
          ['Died', mathematics.died],
          ['Known For', mathematics.knownFor],
          ['About', mathematics.about, true], // true → use about style
        ]).map(([label, value, isAbout]) => (
          <View key={label}>
            <Text style={styles.label}>{label}</Text>
            <Text style={isAbout ? styles.about : styles.meta}>
              {value || 'N/A'}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* --- Action Buttons --- */}
      <View style={styles.actionBar}>
        <CustomButton
          title="Edit"
          onPress={() => navigation.navigate('EditMathematics', { mathematics })}
          style={styles.editBtn}
        />
        <CustomButton
          title={deleting ? 'Deleting…' : 'Delete'}
          onPress={handleDelete}
          style={styles.deleteBtn}
        />
      </View>
    </View>
  );
};

export default ViewMathematics;

/* ---------- styles ---------- */
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 24, paddingBottom: 80 },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subId: {
    fontSize: 13,
    color: '#999',
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6c757d',
    marginTop: 16,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  meta: {
    fontSize: 16,
    color: '#333',
  },
  about: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginTop: 4,
  },

  /* Action‑bar styles */
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
