import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ALLOWED_UIDS = [
  '2TWOYgA3THRxv2XnrW0XrjjrLXJ2',
  'vBXhRnbEncXvlPa47u1DFjmVjUB2',
];

const Art = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userUID, setUserUID] = useState(null);
  const navigation = useNavigation();

 useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('Logged in UID:', user.uid);
        setUserUID(user.uid);
      } else {
        console.log('No user logged in');
        setUserUID(null);
      }
    });

    return unsubscribe;
  }, []);

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

  const handleAddPress = () => {
    if (ALLOWED_UIDS.includes(userUID)) {
      navigation.navigate('AddArt');
    } else {
      Alert.alert('Access Denied', 'You are not authorized to add art.');
    }
  };

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

      {/* Floating Add Button */}
      {ALLOWED_UIDS.includes(userUID) && (
        <CustomButton
          title="Add"
          onPress={handleAddPress}
          style={styles.addButton}
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
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
