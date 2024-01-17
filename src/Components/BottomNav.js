import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { navbtn, navbtnin, navbtnout, colors, veg, nonveg, btn2, hr80, incdecbtn, incdecinput, incdecout } from '../globals/styles';

const BottomNav = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btncon1}>
      <AntDesign name="home" size={30} color="black" style={styles.icon1}
      onPress={()=>{navigation.navigate('home')}}
      />
      </View>
      <View style={styles.btncon2}>
      <AntDesign name="search1" size={40} color="black" style={styles.icon2}
      onPress={()=>{navigation.navigate('home')}}
      />
      </View>
      <View style={styles.btncon1}>
      <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1}
      onPress={()=>{navigation.navigate('cart')}}
      />
      </View>
      <View style={styles.btncon1}>
      <FontAwesome5 name="map-marked-alt" size={30} color="black" style={styles.icon1}
      onPress={()=>{navigation.navigate('home')}}
      />
      </View>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        elevation: 30,
       
        borderTopWidth: 0.5,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    icon1: {
        color: colors.text1

    },
    icon2:{
        color: colors.col1,
    },
    btncon2:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -15,
        backgroundColor: colors.text1,
        width: 60,
        height: 60,
        borderRadius:60
    },
    btncon1:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: colors.col1,
        width: 50,
        height: 50,
        borderRadius:50
    }
})