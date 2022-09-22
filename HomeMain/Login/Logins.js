import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {images} from '../../Asset';
import Touch from './Touch';
import InputTexts from './InputTexts';

function Logins() {
  return (
    <ImageBackground source={images.ImageBackground} style={{height:'100%'}}>
      <View style={{height:'40%'}}/>
      <InputTexts />
      <Touch />
    </ImageBackground>
  );
}
export default Logins;
