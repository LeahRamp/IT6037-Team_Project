import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator,
         TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';

const Art = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/art')
      .then(res => setArtworks(res.data))
      .catch(err => console.error('Error fetching art:', err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      id={item._id}
      about={item.about}
      onPress={() => navigation.navigate('ViewArt', { art: item })}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={artworks}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={{ paddingBottom: 90 }} // leave room for FAB
        />
      )}

      {/* --- Add Button (Floating) --- */}
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddArt')}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Art;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  /* Floating Action Button */
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
