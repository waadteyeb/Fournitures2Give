import React from 'react';
import {View,Text,Image,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import{useForm} from 'react-hook-form';




const SignInScreen= ()=>{
 
 const {height}=useWindowDimensions();
 const navigation=useNavigation();

 const {control,handleSubmit,formState:{errors}}=useForm();

 

 const onSignInPressed=(data)=>{
  console.log(data);
  
  navigation.navigate('Home');
 }
 const onForgotPasswordPressed= ()=>{
  navigation.navigate('ForgotPassword');
 };

 const onSignUpPressed=()=>{
  navigation.navigate('SignUp');

 };

 return( 
<ScrollView showsVerticalScrollIndicator={false}>
 <View style={style.root}>
  <Image source={Logo} style={[style.logo,{height:height*0.3}]} reseizeMode="contain"/>

   <CustomInput 
   name="username"
   placeholder="Username"
    control={control}
    rules={{required:'Username is required',
    minLength:{value:3,message:'username should be at least 3 characters long'}}} />

   <CustomInput
   name="password"
   placeholder="Password"
   secureTextEntry 
   control={control}
   rules={{required:'Password is required',minLength:{value:8,message:'Password should be minimum 8 characters long'}}}
   />
    

   <CustomButton 
   text="Sign In"
    onPress={handleSubmit(onSignInPressed)}  />

   <CustomButton 
   text="Forgot password?" 
   onPress={onForgotPasswordPressed} 
   type="TERITARY" />

   <SocialSignInButtons/>
   <CustomButton 
   text="Don't have an account? Create one" 
   onPress={onSignUpPressed} 
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
  logo: {
    width:'70%',
    maxWidth:300,
    maxHeight:1000,

  },
})
export default SignInScreen ;