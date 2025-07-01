import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Technology = () => {
  const [technologyworks, setTechnologyworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/technology')
      .then(res => setTechnologyworks(res.data))
      .catch(err => console.error('Error fetching technology:', err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      id={item._id}
      about={item.about}
      onPress={() => navigation.navigate('ViewTechnology', { technology: item })}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={technologyworks}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={{ paddingBottom: 90 }} // room for FAB
        />
      )}

      {/* Floating Add Button */}
      <CustomButton
        title="Add"
        onPress={() => navigation.navigate('AddTechnology')}
        style={styles.addButton}   // positioning only
      />
    </View>
  );
};

export default Technology;

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
