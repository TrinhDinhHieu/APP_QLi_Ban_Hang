import { View, Text } from 'react-native'
import React from 'react'

import Logins from '../HomeMain/Login/Logins'
import HomeScreen from '../HomeMain/HomeScreen/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function Apps() {
         const Stack = createNativeStackNavigator()//lien ket tab
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen' screenOptions={{//gans manf chinhs
            headerShown: false //hiện nút back 
        }}>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
            <Stack.Screen name={"Logins"} component={Logins}/>
            {/* <Stack.Screen name={'UITap'} component={UITap} />     */}
            
        </Stack.Navigator>
    </NavigationContainer>
}
    