import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import images from '../../Asset/images'

function HomeScreen(props,{navigation}) {
  const {navigate,goBack}= navigation
    setTimeout(()=>navigate('Logins'),2000)
  return (
    <ImageBackground source={images.ImageBackground} style={{flex:1}}>
     
    </ImageBackground>
  )
}
export default HomeScreen