import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/goal/goal_item"
import GoalInput from './components/goal/goal_input'
export default function App() {
  const [outputItems, setOutputItems] = useState([])
  const [enableModal, setEnableModal] = useState(false)
  const handleAddTextClick = (outputText) => {
    setOutputItems([...outputItems, outputText])
    setEnableModal(false)
  }

  const removeOutputItem = (itemToDelete) => {
    setOutputItems(currentItems => {
      return currentItems.filter((item) => {
        return item != itemToDelete
      })
    })
  }
  const enableModalToAddGoal = () => {
    setEnableModal(true)
  }
  const disableModalToAddGoal = () => {
    setEnableModal(false)
  }
  return (
    <View style={{ padding: 70 }}>
      <Button onPress={enableModalToAddGoal} title="Add Goal"></Button>
      <GoalInput canAddNewGoal={enableModal} onAddGoal={handleAddTextClick} onCancel={disableModalToAddGoal}/>

      {/* The below view is to display all the added elements */}
      <FlatList
        keyExtractor={(item, index) => index} data={outputItems}
        renderItem={(itemData) => [
          <GoalItem goalData={{ item: itemData.item }}
            onDelete={removeOutputItem}
          />
        ]}>

        }
      </FlatList >

      {/* The default behaviour of this view is to render the child views as columns. Can be changed to row using flexDirection */}
      <View style={styles.boxOuterStyle}>
        {/* On changing flexDirection to row, the child attributes only take sufficient space to fill the text. 
        To increase the height align child in the cross axis -> use alignItems 
        The main axis default behaviour would be flex-start */}
        <View style={{ backgroundColor: 'red', flex: 1 }}>
          {/* The flex property splits the child components and distribute it as a ratio (current flex / sum of flex across the child components in parent) */}
          <Text>1</Text>
        </View>
        <View style={{ backgroundColor: 'green', flex: 1 }}>
          <Text>2</Text>
        </View>
        <View style={{ backgroundColor: 'blue', flex: 1 }}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxOuterStyle: { flexDirection: 'row', height: 200, alignItems: 'center' },
});
