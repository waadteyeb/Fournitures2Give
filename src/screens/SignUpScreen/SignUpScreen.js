import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';


const SignUpScreen= ()=>{
 const {control,handleSubmit,watch}=useForm();
 const pwd=watch('password');
 const navigation=useNavigation();
 const EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 

 const onRegisterPressed=()=>{
  navigation.navigate('ConfirmEmail');
 }
 

 const onSignInPressed=()=>{
  navigation.navigate('SignIn');

 };
 const onTermsOfUsePressed=()=>{
  console.warn('onTermsOfUsePressed');

 };
 const onPrivacyPressed=()=>{
  console.warn('onPrivacyPressed')

 };

 return( 
<ScrollView >

 <View style={style.root}>
 <Text>{'                    '}</Text>
 <Text>{'                    '}</Text>
  <Text style={style.title}>Create an account</Text>

   <CustomInput
   name="username" 
   control={control}
   placeholder="Username" 
   rules={{required:'username is required',
   minLength:{value:3,message:'username should be at least 3 characters long'},
   maxLength:{value:24,message:'username should be max 24 characters long'}
   }}
   />

   <CustomInput 

   name="email"
   control={control}
   placeholder="Email" 
   rules={{required:'Email is required',
   pattern:{value:EMAIL_REGEX,message:'Email is invalid'}
   }}
   />

   <CustomInput 
   name="password"
   control={control}
   placeholder="Password" 
   secureTextEntry 
   rules={{required:'Password is required',
   minLength:{value:8,message:'Password should be at least 8 characters long'}
   }}  
   />

   <CustomInput 
   name="password-repeat"
   control={control}
   placeholder="Repeat Password" 
   secureTextEntry
    rules={{
      validate :value=>value==pwd|| 'Password do not match',
    }}
   />


   <CustomButton 
   text="Register" 
   onPress={handleSubmit(onRegisterPressed)}  />

   <Text style={style.text} >
    By registering, you confirm that you accept our{' '}
    <Text style={style.link} onPress={onTermsOfUsePressed}> Terms of Use </Text>
     and{' '} <Text style={style.link} onPress={onPrivacyPressed} >Privacy Policy </Text> 
     </Text>
     <SocialSignInButtons/>

   <CustomButton
    text="Have an account? Sign in"
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
export default SignUpScreen ;