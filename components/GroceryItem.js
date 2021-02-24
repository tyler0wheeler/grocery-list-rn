import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GroceryItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.groceryItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  groceryItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10,
    width: '80%'
  },
})
export default GroceryItem