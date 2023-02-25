import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';


const ForgotPasswordScreen= ()=>{
const{handleSubmit,control}=useForm();

const navigation=useNavigation();
 
const onSignInPressed=()=>{
  navigation.navigate('SignIn');

 };


 const onSendPressed=()=>{
 navigation.navigate('NewPassword');

 };

return( 
<ScrollView >
<Text>{'              '}</Text>
<Text>{'              '}</Text>
<Text>{'              '}</Text>

 <View style={style.root}>

  <Text style={style.title}>Reset your password</Text>

   <CustomInput 
   name="username"
   control={control}
   placeholder="username" 
   rules={{required:'username is required',minLength:{
   value:3,
   message:'username should be at least 3 characters long'}}}
   />

   <CustomButton text="Send" onPress={handleSubmit(onSendPressed)}/>


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
export default ForgotPasswordScreen ;