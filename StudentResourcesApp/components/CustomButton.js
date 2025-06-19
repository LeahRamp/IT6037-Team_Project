import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
 
const CustomButton = ({title, onPress}) => {
  return (
<TouchableOpacity onPress={onPress}>
<View style={styles.buttonContainer}>
<Text style={styles.textContainer}>{title}</Text>
</View>
</TouchableOpacity>
  )
}
 
export default CustomButton
 
const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 3,
        backgroundColor: '#38b6ff',
        borderRadius: 20,
        margin: 15,
        paddingVertical: 14,
        paddingHorizontal: 30,
        alignSelf: 'center',
    },
    textContainer: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})