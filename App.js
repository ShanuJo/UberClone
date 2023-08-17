/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResult from './src/screens/SearchResult';
import HomeMap from './src/components/HomeMap';

const App = () => {
  

  return (
    <SafeAreaView>
      <StatusBar/>
     <HomeMap/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
