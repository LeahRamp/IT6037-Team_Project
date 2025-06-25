import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Card = ({ title, about, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.about} numberOfLines={3} ellipsizeMode="tail">
        {about}
      </Text>
    </Pressable>
  );
};

export default Card

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '48%', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    paddingLeft: 10,
  },
  about: {
    fontSize: 14,
    color: '#666',
  },
})