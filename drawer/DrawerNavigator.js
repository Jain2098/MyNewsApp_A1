import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerMain from './DrawerMain';
import { TabRouter } from '@react-navigation/native';
import DrawerItems from './DrawerItems';
// import HomePage from '../components/HomePage';
import Settings from '../components/Settings';
// import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import BottomHome from '../bottom/BottomHome';
import BottomAboutUs from '../bottom/BottomAboutUs';
import BottomContactUs from '../bottom/BottomContactUs';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerItems {...props} />}>
        <Drawer.Screen name="DrawerMain" component={DrawerMain} options={{ headerShown:false }} />
        <Drawer.Screen name="Homepage" component={BottomHome} options={{ headerShown:false }} />
        <Drawer.Screen name="About Us" component={BottomAboutUs} options={{ headerShown:false }} />
        <Drawer.Screen name="Contact Us" component={BottomContactUs} options={{ headerShown:false }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator


{/* <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
<Drawer.Screen 
    name='Drawer Main'
    component={DrawerMain}
    options={{
        headerShown:TabRouter
    }}/>
</Drawer.Navigator> */}