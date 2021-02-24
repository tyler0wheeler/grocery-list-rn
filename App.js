
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GroceryItem from './components/GroceryItem'
import GroceryInput from './components/GroceryInput'

export default function App() {

  const [groceryItems, setGroceryItems] = useState([])

  const addItemHandler = (enteredItem) => {
    setGroceryItems(currentItems => [...currentItems,
    { id: Math.random().toString(), value: enteredItem }
    ])
  }

  const removeItemHandler = (itemId) => {
    setGroceryItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId)
    })

  }
  return (
    <View style={styles.screen}>
      <GroceryInput
        addItem={addItemHandler} />

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




});
