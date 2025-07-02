// Art.js  – list screen
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Art = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const isFocused = useIsFocused();           // 🔑

  const fetchArt = () => {
    setLoading(true);
    axios
      .get('http://10.0.2.2:5000/api/art')
      .then(res => setArtworks(res.data))
      .catch(err => console.error('Error fetching art:', err))
      .finally(() => setLoading(false));
  };

  useEffect(fetchArt, [isFocused]);           // 🔑 refetch whenever screen returns

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
          contentContainerStyle={{ paddingBottom: 90 }}
        />
      )}

      <CustomButton
        title="Add"
        onPress={() => navigation.navigate('AddArt')}
        style={styles.addButton}
      />
    </View>
  );
};

export default Art;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  addButton: { position: 'absolute', right: 20, bottom: 20 },
});
