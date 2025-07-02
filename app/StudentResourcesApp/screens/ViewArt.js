import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const ViewArt = ({ route }) => {
  const { art } = route.params;
  const navigation = useNavigation();
  const [deleting, setDeleting] = useState(false);
  const [userUID, setUserUID] = useState(null);

  const CAN_EDIT_UIDS = ['2TWOYgA3THRxv2XnrW0XrjjrLXJ2', 'vBXhRnbEncXvlPa47u1DFjmVjUB2'];
  const CAN_DELETE_UIDS = ['vBXhRnbEncXvlPa47u1DFjmVjUB2'];

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('Logged in UID:', user.uid);
        setUserUID(user.uid);
      } else {
        setUserUID(null);
      }
    });
    return unsubscribe;
  }, []);

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
              navigation.goBack();             // or navigation.navigate('Art')
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
        <Text style={styles.title}>{art.title}</Text>
        <Text style={styles.subId}>ID: {art._id}</Text>

        {([
          ['Type', art.type],
          ['Born', art.born],
          ['Died', art.died],
          ['Nationality', art.nationality],
          ['Known For', art.knownFor],
          ['Notable Works', art.notableWorks],
          ['About', art.about, true], // true means use 'about' style
          ['Year', art.year],
          ['Medium', art.medium],
          ['Dimensions', art.dimensions],
          ['Location', art.location],
        ]).map(([label, value, isAbout]) => (
          <View key={label}>
            <Text style={styles.label}>{label}</Text>
            <Text style={isAbout ? styles.about : styles.value}>
              {value || 'N/A'}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* --- Action Buttons --- */}
      <View style={styles.actionBar}>
        {CAN_EDIT_UIDS.includes(userUID) && (
          <CustomButton
            title="Edit"
            onPress={() => navigation.navigate('EditArt', { art })}
            style={styles.editBtn}
          />
        )}
        {CAN_DELETE_UIDS.includes(userUID) && (
          <CustomButton
            title={deleting ? 'Deleting…' : 'Delete'}
            onPress={handleDelete}
            style={styles.deleteBtn}
          />
        )}
      </View>
    </View>
  );
};

export default ViewArt;

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
  value: {
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
