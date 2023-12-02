import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/styles'


const carouseldata = [
  {
    id:1,
    img:'../../assets/OfferSlideImg/img1.png'
  },
  {
    id:2,
    img:'../../assets/OfferSlideImg/img1.png'
  },
  {
    id:3,
    img:'../../assets/OfferSlideImg/img1.png'
  },
  
]
export default function OfferSlider(){
  return (
    <View>
      <View style={styles.offerSlider}>
      <Swiper 
      autoplay={true} 
      autoplayTimeout={5}
      showsButtons={true}
      dotColor={colors.text2} activeDotColor={colors.col1}
      nextButton={<Text style={styles.buttonText}> › </Text>}
      prevButton={<Text style={styles.buttonText}> ‹ </Text>}
      >
        <View style={styles.slide}>
          <Image source={require('../../assets/OfferSlideImg/img1.png')} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/OfferSlideImg/img2.png')} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/OfferSlideImg/img3.png')} style={styles.image}/>
        </View>
      </Swiper>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  offerSlider:{
    width:'100%',
    height:200,
    backgroundColor:colors.col1,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10
  },
  slide:{
    width:'100%',
    height:200,
    backgroundColor:colors.col1,
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:10
  },
  buttonText:{
    color:colors.text3,
    fontSize:40,
    fontWeight:'500',
    backgroundColor:colors.col1,
    borderRadius:20,
    width:40,
    height:40,
    textAlign:'center',
    lineHeight:40
  }
})