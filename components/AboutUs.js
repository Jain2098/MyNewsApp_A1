import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../Styles'

const AboutUs = () => {
  return (
    <View style={Styles.mainContainer}>
      <Text style={{color:'white', fontSize:25}}>This is About-Us Page</Text>
    </View>
  )
}

export default AboutUs