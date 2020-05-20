import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        // TouchableOpacity had the high level touch events like press, long press etc.
        <TouchableOpacity onPress={()=> props.onDelete(props.goalData.item)}>
            <View style={styles.listItem}>
                <Text >{props.goalData.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10, // Space b/w border and the content lying inside the border
        marginTop: 10, // Space b/w the border and surrounding areas.
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc'
    }
})

export default GoalItem