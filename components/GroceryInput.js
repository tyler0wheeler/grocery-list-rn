import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native'

const GroceryInput = props => {
  const [enteredItem, setEnteredItem] = useState('');
  const itemInputHandler = (enteredItem) => {
    setEnteredItem(enteredItem)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Grocery List"
        style={styles.groceryList}
        onChangeText={itemInputHandler}
        value={enteredItem} />
      <Button title="ADD" onPress={() => props.addItem(enteredItem)} />
    </View>
  )
}
const styles = StyleSheet.create({
  groceryList: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default GroceryInput