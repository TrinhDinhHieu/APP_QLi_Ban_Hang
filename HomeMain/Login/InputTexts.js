import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import { isValidTaikhoan,isValidMatkhau } from '../../utilis/validations';


export default function InputTexts(props) {
  //State
  const [text, setChangeText] = useState('');
  const [number, setChangeNumber] = useState('');
  //Error
  const [errorTaikhoan, setErrorTaikhoan] = useState('');
  const [errorMatkhau, setErrorMatkhau] = useState('');
  return (
    <View>
      <Text style={styles.StyleText}>Tài khoản</Text>
      <TextInput
        style={styles.StyleInput1}
        onChangeText={text => {
          setErrorTaikhoan(
            isValidTaikhoan(text) == true ? '' : 'Tài khoản không đúng',
          );
          setChangeText(text);
        }}
        value={text}
        placeholder="Nhập tài khoản"
        placeholderTextColor={'#C0C0C0'}
      />
      {text == false ? (
        ''
      ) : (
        <Text style={{color: 'red', marginBottom: 5, alignSelf: 'center'}}>
          {errorTaikhoan}
        </Text>
      )}
      <Text style={styles.StyleText}>Mật khẩu</Text>
      <TextInput
        style={styles.StyleInput1}
        onChangeText={number => {
          setErrorMatkhau(
            isValidMatkhau(text) == true
              ? ''
              : 'Mật khẩu phải điền trên 3 kí tự',
          );
          setChangeNumber(number);
        }}
        value={number}
        placeholder="Nhập mật khẩu "
        secureTextEntry={true} //tính bảo mật ****
        placeholderTextColor={'#C0C0C0'}
      />
      {number == false || number < 3 ? (
        ''
      ) : (
        <Text
          style={{
            color: 'red',
            alignSelf: 'center',
            marginTop: 5,
            marginLeft: 90,
          }}>
          {errorMatkhau}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  StyleText: {
    marginRight: 20,
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
  StyleInput1: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    marginLeft: 30,
    marginTop: 10,
    paddingLeft: 20,
    color: 'black',
    
  },
});
