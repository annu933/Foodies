import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../globals/styles';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeHeadNav() {
  return (
    <View style={styles.container}>
        <EvilIcons name="navicon" size={24} color="black" style = {styles.myIcon}/>
        <View style = {styles.containerin}>
            <Text style={styles.mytext}>foodie</Text>
            <Ionicons name="fast-food-outline" size={24} color="black" style = {styles.myIcon} />
        </View>
        <FontAwesome name="user-circle-o" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        backgroundColor:colors.col1,
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    containerin:{
        flexDirection:'row',
        alignItems:'center',
    },
    myIcon:{
        color:colors.text1
    },
    mytext:{
        fontSize:24
    }
})