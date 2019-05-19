import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import Column from './Column';

const Input = ({ label }) => {
  return (
    <Column>
      <Text>{label}</Text>
      <TextInput style={styles.input} />
    </Column>
  )
}

const styles=StyleSheet.create({
  input: {
    borderWidth:1, 
    width:100, 
    height:40
  },
})

export default Input
