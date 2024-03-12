import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import { Ionicons } from '@expo/vector-icons'

const Header = ({title, iconType, navigation}) => {
  return (
    <View style={Styles.headerMain} >
    <TouchableOpacity style={{ marginLeft: 5, height: 30, width: 50 }} onPress={()=> navigation.openDrawer()}>
      <Ionicons
        name={iconType}
        size={30}
        color={'white'}
      />
    </TouchableOpacity>
    <Text style={{ color:'white', fontSize: 18, fontWeight: "600", marginRight: 30, textAlign: 'center', flex: 1 }}>
      {title}
    </Text>
  </View>
  )
}

export default Header