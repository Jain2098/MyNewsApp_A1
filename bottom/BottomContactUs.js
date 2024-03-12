import { View } from 'react-native'
import React from 'react'

import Header from '../components/Header'
import ContactUs from '../components/ContactUs'

const BottomContactUs = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
    <Header title="Contact Us" iconType="menu" navigation={navigation}/>
    <ContactUs />
  </View>
    
  )
}

export default BottomContactUs