import React from 'react';
import { Image,Text, View ,StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import colors from './colors';
function LoginPage(props) {
    return (
        <View style ={styles.container}>
          <View style = {styles.viewStyle}>
              <Text >logo</Text>
              </View> 
           <View style = {styles.viewStyle}>
           <TextInput style = {styles.inputStyle} 
           underlineColorAndroid='rgba(0,0,0,0)' 
           placeholder = "Username"/>
          
           <TextInput style = {styles.inputStyle} 
           underlineColorAndroid='rgba(0,0,0,0)' 
           placeholder = "Password"/>
           <TouchableOpacity style = {styles.button}>
               <Text style = {styles.buttonText}>Login</Text>
               </TouchableOpacity>
               </View>   
          <View style = { styles.viewStyle }>
              <Text style = {styles.text}>Don't have an account yet ? </Text>
              <Text style = {styles.text} >Signup</Text>
               </View>    
        </View>
    );

}
const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.primary,
        flexGrow : 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewStyle :{
        flexGrow : 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputStyle :{
     width : 300 ,
     height : 50 ,
     top : 70,
     backgroundColor : 'rgba(255,255,255,0.3)', 
     borderRadius : 25 ,
     paddingHorizontal :15,
     fontSize : 16 ,
     marginVertical : 10
    },
    buttonText :{
        fontSize : 16,
        fontWeight : '500',
        textAlign :'center'

    },
    button :{
        backgroundColor : '#AF6588',
        width : 300 ,
        paddingVertical :13 ,
        top : 70,
        marginVertical : 10,
        borderRadius : 25 ,

    },
    text :{
        top : 70,  
    }
})
export default LoginPage;