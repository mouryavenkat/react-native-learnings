import { View, TextInput, Button, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
const GoalInput = props => {
    const [outputText, setOutputText] = useState("")

    const handleInputText = (enteredText) => {
        setOutputText(enteredText)
    }


    return (
        <Modal visible={props.canAddNewGoal}>
            <View style={styles.addGoal}>
                {/* alignItems -> center( Centers the child items vertically in the parent view.
                          strech (Straches the child from start-end of parent)) */}
                {/* For flex direction row -> main axis is left to right and cross axis is top to bottom. Justify Content works on the main axis and distributes the space across the child.
            alignItems works on the cross axis.
        */}
                {/* The flex direction defines in which direction the child components had to be aligned. Default is column. */}
                <TextInput
                    placeholder={"Add a new course goal"}
                    style={styles.textInput}
                    onChangeText={handleInputText}
                    value={outputText}
                />
                <View style={styles.buttonGroup}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={() => {
                                props.onCancel()
                                setOutputText("")
                            }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={() => {
                                props.onAddGoal(outputText)
                                setOutputText("")
                            }}
                        />
                    </View>
                </View>

            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    addGoal: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        flex: 1, // By default the view doesn't hold the entire space the modal is holding, Hence setting this flex, will specify the child to occupy entire space of parent
    },
    textInput: {
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: "70%"
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: "60%"
    },
    button: {
        justifyContent:'center',
        width:'40%'
    }
})
export default GoalInput