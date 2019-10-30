import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({value, changeText, addTodo}) => (
    <TextInput
    value={value}
    style={styles.input}
    placeholder={"오늘 어떤 일을 하실건가요?"}
    maxlength={30}
    onChangeText={changeText}
    onEndEditing={addTodo}
    returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
    }
})

export default Input;