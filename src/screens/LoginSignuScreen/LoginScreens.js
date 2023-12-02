import React, { useState } from 'react'
import { Text,View,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { colors,titles,btn1,hr80 } from '../../globals/styles'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const LoginScreens = ({navigation}) => {
    const [emailfocus,setEmailfocus] = useState(false);
    const [passwordfocus,setPasswordfocus] = useState(false);
    const [showpassword,setShowpassword] = useState(false);
  return (
    <View style={styles.container}>
        <Text style={styles.head1}>Sign In</Text>
        <View style={styles.inputout}>
        <AntDesign name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Email'
            onFocus={()=>{
                setEmailfocus(true)
                setPasswordfocus(false)
                setShowpassword(false)
            }}
            />
        </View>
        <View style={styles.inputout}>
        <MaterialIcons name="lock-outline" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Email'
            onFocus={()=>{
                setEmailfocus(false)
                setPasswordfocus(true)
            }}
            secureTextEntry={showpassword == false ? true : false}
            />
            <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black" 
            onPress={()=>{
                setShowpassword(!showpassword)
            }}
            />
        </View>

        <TouchableOpacity style={btn1} onPress={() => navigation.navigate('home')}>
            <Text style = {{color:colors.col1,fontSize:titles.btntext,fontWeight:'bold',textAlign:'center'}} >Sign in</Text>
        </TouchableOpacity>

        <Text style = {styles.forgot}>Forgot password?</Text>
        <Text style = {styles.or}>OR</Text>
        <Text style = {styles.gftxt}>Sign In with</Text>

        <View style = {styles.gf}>
            <TouchableOpacity>
                <View style = {styles.gficon}>
                <AntDesign name="google" size={24} color="#EA4335" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.gficon}>
                <FontAwesome name="facebook-f" size={24} color="#4267B2" />
                </View>
            </TouchableOpacity>
        </View>
        <View style={hr80} />
        <Text>Don't have an account?
            <Text style = {styles.signup} onPress={() => navigation.navigate('signup')}> Sign Up</Text>
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    head1:{
        color:colors.text1,
        fontSize:30
    },
    inputout:{
        flexDirection:'row',
        width:'80%',
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        alignSelf:'center',
        elevation:20,
        backgroundColor:colors.col1
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:'80%'
    },
    forgot:{
        color:colors.text2,
        marginTop:20,
        marginBottom:10
    },
    or:{
        color:colors.text1,
        marginVertical:10,
        fontWeight:'bold'
    },
    gftxt:{
        color:colors.text2,
        marginVertical:10,
        fontSize:25
    },
    gf:{
        flexDirection:'row'
    },
    gficon:{
        backgroundColor:'white',
        width:50,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        elevation:20
    },
    signup:{
        color:colors.text1,
    }
})
