import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import Card from '../components/Card'; // adjust path if needed

const Mathematics = () => {
  const [Mathematicsworks, setMathematicsworks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMathematics = async () => {
    try {
      const res = await axios.get('http://10.0.2.2:5000/api/Mathematics'); // This hits your route
      setMathematicsworks(res.data);
    } catch (err) {
      console.error('Error fetching Mathematics:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMathematics();
  }, []);

  const renderItem = ({ item }) => (
    <Card 
      title={item.Title} 
      about={item.About} 
      onPress={() => console.log(`Pressed on ${item.title}`)} 
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : Mathematicsworks.length > 0 ? (
        <FlatList
          data={Mathematicsworks}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      ) : (
        <Text>No Mathematics found.</Text>
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
  row: {
    justifyContent: 'space-between',
  },
});
