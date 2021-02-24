
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import GroceryItem from './components/GroceryItem'
import GroceryInput from './components/GroceryInput'

export default function App() {

  const [groceryItems, setGroceryItems] = useState([])
  const [isAddMode, setIsAddMode] = useState('false')

  const addItemHandler = (enteredItem) => {
    setGroceryItems(currentItems => [...currentItems,
    { id: Math.random().toString(), value: enteredItem }
    ])
    setIsAddMode(false)
  }

  const removeItemHandler = (itemId) => {
    setGroceryItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId)
    })
  }
  const cancelItemAdditionHandler = () =>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
      <Text style={styles.titleText}>My Grocery List</Text>
      </View>
      <Button title="Add new item" onPress={() => setIsAddMode(true)}/>
      <GroceryInput
        addItem={addItemHandler}
        cancel={cancelItemAdditionHandler}
        visible={isAddMode} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={groceryItems}
        renderItem={itemData => (<GroceryItem id={itemData.item.id} onDelete={removeItemHandler} title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  titleText: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 25
  }




});
