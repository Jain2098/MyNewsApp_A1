import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
const Splash = ({navigation}) => {

    
    useEffect(() => {
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Parent' }],
          });
        }, 1500);
      }, [navigation]);


  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <View style={{flex:1, flexDirection:'column', height:100, justifyContent:"center", alignItems:"center"}}>
            <Image source={require('../spinner.gif')} style={{height:50, width:50}}/>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Welcome to myNewsApp</Text>
      </View>
    </View>
  )
}

export default Splash