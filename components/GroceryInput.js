import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Modal, Text } from 'react-native'

const GroceryInput = props => {
  const [enteredItem, setEnteredItem] = useState('');
  const itemInputHandler = (enteredItem) => {
    setEnteredItem(enteredItem)
  }
  const addItemHandler = () => {
    props.addItem(enteredItem)
    setEnteredItem('')
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Text style={styles.dontForgetText}>Don't Forget...</Text>
        <TextInput
          placeholder="Grocery List"
          style={styles.groceryList}
          onChangeText={itemInputHandler}
          value={enteredItem} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={() => props.cancel(setEnteredItem(''))} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addItemHandler} />
          </View>
        </View>
      </View>
    </Modal>
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
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginBottom: 1
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  },
  dontForgetText: {
    marginBottom: 10
  }
})

export default GroceryInput