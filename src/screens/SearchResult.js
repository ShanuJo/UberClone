import { View, Text } from 'react-native'
import React from 'react';
import HomeMap from '../components/HomeMap';
import UberTypes from '../components/UberTypes';



const SearchResult = () => {
  return (
    <View>
      <HomeMap/>
      <UberTypes/>
    </View>
  )
}

export default SearchResult