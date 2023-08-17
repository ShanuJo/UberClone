import { View, Text, TextInput, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from '../components/Style'

const DestinationSearch = () => {

    const [originPleace,setOriginPleace] = useState('');
    const [destinationPlace,setDestinationPlace] = useState('');

//     useEffect(()=>{
// if(originPleace && destinationPlace){
//   console.warn('Hello success!!');
// }
//     }, [originPleace, destinationPlace])

  return (
    <SafeAreaView>
    <View style={styles.searchContainer}>
    <GooglePlacesAutocomplete
      placeholder='From'
      onPress={(data, details = null) => {
        setOriginPleace({data, details});
      }}
      fetchDetails={true}
      query={{
        key: 'AIzaSyB8Q95uibijlY9wgww3vDY52qH82wV3y_I',
        language: 'en',
      }}
      styles={{
        textInput:styles.textInput
      }}
    />

<GooglePlacesAutocomplete
      placeholder='Where to?'
      onPress={(data, details = null) => {
        setDestinationPlace({data, details});
      }}
      fetchDetails={true}
      query={{
        key: 'AIzaSyB8Q95uibijlY9wgww3vDY52qH82wV3y_I',
        language: 'en',
      }}
      styles={{
        textInput:styles.textInput
      }}
    />
    </View>
    </SafeAreaView>
  )
}

export default DestinationSearch