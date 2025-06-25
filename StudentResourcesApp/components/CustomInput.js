import { TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomInput = ({label, value, onChangeText, placeholder, secureTextEntry, error}) => {
  return (
    <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput 
            style={[styles.input, error ? styles.errorInput : null]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#999"
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#fff'
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});

export default CustomInput