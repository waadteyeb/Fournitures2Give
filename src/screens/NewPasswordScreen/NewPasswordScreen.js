import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import{useForm}from 'react-hook-form';


const NewPasswordScreen= ()=>{
  const{control,handleSubmit}=useForm();
 
 const navigation=useNavigation();
 
 

 const onSignInPressed=()=>{
  navigation.navigate('SignIn');

 };


 const onSubmitPressed=()=>{
  navigation.navigate('Home');
 };
 return( 
<ScrollView >
<Text>{'              '}</Text>
<Text>{'              '}</Text>
<Text>{'              '}</Text>

 <View style={style.root}>

  <Text style={style.title}>Reset your password</Text>

   <CustomInput 
   name="code"
   control={control}
   placeholder="code"
   rules={{required:'code is required'}} 
   />

   <CustomInput 
   name="password"
   control={control}
   placeholder="Enter your new password"
   rules={{required:'password is required',
   minLength:{
    value:8,
    message:'Password should at least 8 characters long'
   }

   }} 
   />
   
   <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>

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
export default NewPasswordScreen ;