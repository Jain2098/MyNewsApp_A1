import { View, Text } from 'react-native'
import React from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'

const BottomAboutUs = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
    <Header title="About Us" iconType="menu" navigation={navigation}/>
    <AboutUs />
  </View>
    
  )
}

export default BottomAboutUs