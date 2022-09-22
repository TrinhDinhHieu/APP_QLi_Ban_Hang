import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {icons, images} from '../../Asset';

export default function Touch(props) {
  const [keyboardIsShow, setKeyboardIsShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        // flexDirection:'row',
      
      }}>
      <TouchableOpacity style={styles.TouchDN}>
        <Text style={{color: 'black', fontSize: 18}}>Đăng Nhập</Text>
      </TouchableOpacity>
      {keyboardIsShow == false ? (
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.TouchDK}>
            <Text style={{color: 'black', fontSize: 18}}>Đăng Ký Nhanh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Touch}>
            <Text style={{color: 'black', fontSize: 18}}>Quên Mật Khẩu</Text>
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20,justifyContent:'space-around'}}>
            <TouchableOpacity style={styles.TouchSupport}>
              <Image
                source={icons.facebook}
                style={{ width: 45, height:45}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchShare}>
              <Image
                source={icons.gmail}
                style={{ width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}></View>
      )}
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  StyleText: {
    marginRight: 20,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 18,
  },
  StyleInput1: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  StyleInput2: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 5,
    borderColor: 'white',
  },
  TouchDN: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 1,
    backgroundColor: '#00CCCC',
    height: 50,
    width: 250,
    borderRadius: 30,
    borderColor: '#00CCCC',
  },
  TouchDK: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'green',
    height: 50,
    width: 250,
    borderRadius: 30,
    borderColor: '#00CCCC',
  },
  Touch: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'yellow',
    height: 50,
    width: 250,
    borderRadius: 30,
    borderColor: '#00CCCC',
  },
  TouchSupport: {


    
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchShare: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
