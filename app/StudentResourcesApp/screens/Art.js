import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';

const Art = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://10.0.2.2:5000/api/art')
      .then(res => setArtworks(res.data))
      .catch(err => console.error('Error fetching art:', err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <Card 
      title={item.Title} 
      about={item.About} 
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
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
};

export default Art;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  row: {
    justifyContent: 'space-between',
  },
});