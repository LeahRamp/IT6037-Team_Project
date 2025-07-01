import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const ViewTechnology = ({ route }) => {
  const { technology } = route.params;
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
              await axios.delete(`http://10.0.2.2:5000/api/technology/${technology._id}`);
              navigation.goBack();             // or navigation.navigate('Technology')
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
        {[
          ['Title', technology.title],
          ['Type', technology.type],
          ['Born', technology.born],
          ['Died', technology.died],
          ['Nationality', technology.nationality],
          ['Known For', technology.knownFor],
          ['About', technology.about],
          ['ID', technology._id],
          ['Designed by', technology.designedBy],
          ['Developer', technology.developer],
        ].map(([label, value]) => (
          <View key={label}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={label === 'Title' ? styles.title : styles.meta}>{value || 'N/A'}</Text>
          </View>
        ))}
      </ScrollView>

      {/* --- Action Buttons --- */}
      <View style={styles.actionBar}>
        <CustomButton
          title="Edit"
          onPress={() => navigation.navigate('EditTechnology', { technology })}
          style={styles.editBtn}
        />
        <CustomButton
          title={deleting ? 'Deleting...' : 'Delete'}
          onPress={handleDelete}
          style={styles.deleteBtn}
        />
      </View>
    </View>
  );
};

export default ViewTechnology;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 20, paddingBottom: 80 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  label: { fontSize: 16, fontWeight: '600', marginTop: 10 },
  meta: { fontSize: 15, color: '#333' },

  /* Action bar */
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
