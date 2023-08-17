import { View, Text } from 'react-native'
import React from 'react';
import MapView from 'react-native-maps';

const HomeMap = () => {
  return (
    <View style={{height:300, backgroundColor:'#a0abff',
    justifyContent:'center', alignItems:'center'}}>
       <MapView
    initialRegion={{
      latitude: 40.71692902600371,
      longitude: -74.01542790234286,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  <Text>Hello</Text>
    </View>
  )
}

export default HomeMap;