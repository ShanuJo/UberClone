import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './Style'
import UberTypeRow from './UberTypeRow'
 import typesData from '../assets/data/types';
import types from '../assets/data/types';

const UberTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  }
  return (
    <ScrollView>
      {typesData.map(type => <UberTypeRow type={type}/>)}
      
      <Pressable onPress={confirm}
      style={{ 
      backgroundColor:'black', 
      padding:10, margin: 10, alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </ScrollView>
  )
}

export default UberTypes