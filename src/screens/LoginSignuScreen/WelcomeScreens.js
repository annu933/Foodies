import React from 'react'
import { View,Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import logo from '../../../assets/img/welcomeImg.png'
import{colors,hr80} from '../../globals/styles'

export const WelcomeScreens = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to Foodies</Text>
        <View style={styles.logoout}>
            <Image source={logo} style={styles.logo}/>
        </View>
        <View style={hr80} />
        <Text style={styles.text}>Find the Best food around you at lowest price.</Text>
        <View style={hr80} />
        <View style={styles.btnout}>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text style={styles.btn}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff4242",
        width:"100%",
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:50,
        color:colors.col1,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'200'
    },
    logoout:{
        width:'80%',
        height:'30%',
        alignItems:'center',
        // backgroundColor:'white'
    },
    logo:{
        width:'100%',
        height:'100%'
    },
    text:{
        fontSize:18,
        width:'80%',
        color:colors.col1,
        textAlign:'center'
    },
    btnout:{
        flexDirection:'row',
    },
    btn:{
        fontSize:20,
        color:colors.text1,
        backgroundColor:colors.col1,
        padding:10,
        paddingHorizontal:20,
        marginVertical:30,
        marginHorizontal:10,
        borderRadius:10,
        textAlign:'center',
        fontWeight:'700'
    }
})
