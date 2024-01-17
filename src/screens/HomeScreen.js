import { View, Text,StatusBar,TextInput,StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNav from '../Components/HomeHeadNav'
import Categories from '../Components/Categories'
import OfferSlider from '../Components/OfferSlider'
import CardSlider from '../Components/CardSlider'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../globals/styles'

import {firebase} from '../../Firebase/FirebaseConfig';
import BottomNav from '../Components/BottomNav'


export default function HomeScreen({navigation}) {
const [foodData,setFoodData] = useState([]);
const [vegData,SetVegData] = useState([]);
const [nonVegData,setNonVegData] = useState([]);

const foodRef = firebase.firestore().collection('FoodData');
useEffect(()=>{
    foodRef.onSnapshot(snapshot =>{
        setFoodData(snapshot.docs.map(docs=>docs.data()))
    })
},[])

useEffect(()=>{
    SetVegData(foodData.filter(item => item.foodType == 'veg'))
    setNonVegData(foodData.filter(item => item.foodType == 'nonveg'))
},[foodData])


// console.log(foodData)
// console.log(vegData)

const [search,setSearch]=useState('');
console.log(search)
  return (
    <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav navigation={navigation} />
        <View style={styles.bottomnav}>
        <BottomNav navigation={navigation} />
        </View>
        <ScrollView>
        <View style={styles.searchbox}>
        <Ionicons name="search-sharp" size={24} color="black" style={styles.searchIcon} />
        <TextInput placeholder='Search' style={styles.input}
        onChangeText={(text)=>{setSearch(text)}}
        />
        </View>
        {search != '' && 
        <View style = {styles.searchresultout}>
            {/* <Text>You Typed Something</Text> */}
            <FlatList style = {styles.searchresultinner} 
            data={foodData}
            renderItem={({item}) => {
                if(item.foodName.toLowerCase().includes(search.toLowerCase())){
                    return(
                        <View style={styles.searchresult}>
                            <AntDesign name="arrowright" size={24} color="black" />
                            <Text style={styles.searchresulttext}>{item.foodName}</Text>
                        </View>
                    )
                }
            }}
            />
        </View>
        }
        <Categories />
        <OfferSlider/>
        
        {/* <Text>HomeScreen</Text> */}
       <CardSlider title = {"Today's Special"} data = {foodData} navigation={navigation} />
       <CardSlider title = {"NonVeg Love"} data = {nonVegData} navigation={navigation} />
       <CardSlider title = {"Veg Hunger"} data = {vegData} navigation={navigation} />
       </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.col1,
        // alignItems:'center',
        width:'100%'
    },
    searchbox:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:colors.col1,
        borderRadius:30,
        alignItems:'center',
        padding:10,
        margin:20,
        elevation:10
    },
    searchIcon:{
        color:colors.text1
    },
    searchresultout:{
        width:'100%',
        height:'100%',
        marginHorizontal: 30,
        backgroundColor:colors.col1
    },
    searchresultinner:{
        width:'100%'
    },
    searchresult:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:5

    },
    searchresulttext:{
        marginLeft:10,
        fontSize:18,
        color:colors.text1
    },

    input:{
        marginLeft:10,
        maxWidth:'90%',
        fontSize:18,
        color:colors.text1
    },
    bottomnav:{
        position:'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor:colors.col1,
        zIndex:2
    }
 
})