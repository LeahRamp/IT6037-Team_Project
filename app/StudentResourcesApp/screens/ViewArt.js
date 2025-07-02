// ViewArt.js  – details screen
import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const ViewArt = ({ route }) => {
  const starterArt = route.params.art;
  const [art, setArt]         = useState(starterArt);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const navigation = useNavigation();
  const isFocused  = useIsFocused();              // 🔑

  /* fetch latest version of this record */
  const fetchArt = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://10.0.2.2:5000/api/art/${starterArt._id}`
      );
      setArt(data);
    } catch (e) {
      Alert.alert('Error', 'Could not refresh the record.');
    } finally {
      setLoading(false);
    }
  };

  /* run whenever the screen comes back */
  useEffect(() => { if (isFocused) fetchArt(); }, [isFocused]);

  /* pull‑to‑refresh support */
  const onRefresh = useCallback(fetchArt, []);

  /* delete handler */
  const handleDelete = () => {
    Alert.alert('Delete Entry', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            setDeleting(true);
            await axios.delete(`http://10.0.2.2:5000/api/art/${art._id}`);
            navigation.goBack();   // list screen refetches on focus
          } catch {
            Alert.alert('Error', 'Could not delete.');
          } finally {
            setDeleting(false);
          }
        },
      },
    ]);
  };

  if (loading && !art) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }>
        <Text style={styles.title}>{art.title}</Text>
        <Text style={styles.subId}>ID: {art._id}</Text>

        {[
          ['Type', art.type],
          ['Born', art.born],
          ['Died', art.died],
          ['Nationality', art.nationality],
          ['Known For', art.knownFor],
          ['Notable Works', art.notableWorks],
          ['About', art.about, true],
          ['Year', art.year],
          ['Medium', art.medium],
          ['Dimensions', art.dimensions],
          ['Location', art.location],
        ].map(([label, value, isAbout]) => (
          <View key={label}>
            <Text style={styles.label}>{label}</Text>
            <Text style={isAbout ? styles.about : styles.value}>
              {value || 'N/A'}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.actionBar}>
        <CustomButton
          title="Edit"
          onPress={() => navigation.navigate('EditArt', { art })}
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

export default ViewArt;

/* styles */
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 24, paddingBottom: 80 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  title: { fontSize: 26, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 4 },
  subId:  { fontSize: 13, color: '#999',    marginBottom: 20 },

  label:  {
    fontSize: 13, fontWeight: '600', color: '#6c757d',
    marginTop: 16, marginBottom: 4, textTransform: 'uppercase',
  },
  value: { fontSize: 16, color: '#333' },
  about: { fontSize: 16, color: '#444', lineHeight: 22, marginTop: 4 },

  actionBar: {
    flexDirection: 'row', justifyContent: 'space-around',
    paddingVertical: 10, borderTopWidth: 1, borderColor: '#ddd',
    backgroundColor: '#fafafa',
  },
  editBtn:   { flex: 1, marginHorizontal: 10 },
  deleteBtn: { flex: 1, marginHorizontal: 10, backgroundColor: '#e53935' },
});
