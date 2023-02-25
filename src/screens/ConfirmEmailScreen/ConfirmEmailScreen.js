import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';

const ConfirmEmailScreen= ()=>{
 const{control,handleSubmit}=useForm();
 const navigation=useNavigation();
 

 const onSignInPressed=()=>{
  navigation.navigate('SignIn');

 };

 const onResendPressed=()=>{
  console.warn('onResendPressed');

 };
 const onConfirmPressed=()=>{
  navigation.navigate('Home');
  
 };

 return( 
<ScrollView >
<Text>{'              '}</Text>
<Text>{'              '}</Text>
<Text>{'              '}</Text>

 <View style={style.root}>

  <Text style={style.title}>Confirm your Email</Text>

   <CustomInput
   name="code" 
   control={control}
   placeholder="Enter your confirmation code" 
   rules={{
    required:'confirmation code is required'
   }}
   
   />
   <CustomButton 
   text="Confirm" onPress={handleSubmit(onConfirmPressed)}/>

   <CustomButton
    text="Resend code"
     onPress={onResendPressed}
      type="SECONDARY" />


   

   <CustomButton
    text="Back to Sign in"
     onPress={onSignInPressed}
      type="TERITARY" />
  
 </View>
</ScrollView> 
 );
}

const style=StyleSheet.create({
  root:{
    
    alignItems:'center',
    padding:20,
  },
  
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,

  },
  link:{
    color:'#FBD075',


  },
})
export default ConfirmEmailScreen ;