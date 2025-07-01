import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';

const Mathematics = () => {
  const [mathematicsworks, setMathematicsworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://10.0.2.2:5000/api/mathematics')
      .then(res => setMathematicsworks(res.data))
      .catch(err => console.error('Error fetching Mathematics:', err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <Card 
      title={item.title} 
      id={item._id}
      about={item.about} 
      onPress={() => navigation.navigate('ViewMathematics', { mathematics: item })} 
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={mathematicsworks}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default Mathematics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});