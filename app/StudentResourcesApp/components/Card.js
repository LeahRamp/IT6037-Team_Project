import React from 'react';
import { Text, StyleSheet, Pressable, View, Platform } from 'react-native';

const Card = ({ title, about, id, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.9 }
      ]}
      android_ripple={{ color: '#e0e0e0' }}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.articleId}>{id}</Text>
        <Text style={styles.about} numberOfLines={3} ellipsizeMode="tail">
          {about}
        </Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 12,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  content: {
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  articleId: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 10,
  },
  about: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
