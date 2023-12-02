import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors, titles, btn1, hr80 } from '../../globals/styles'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const SignupScreens = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [confirmfocus, setConfirmfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [namefocus, setNamefocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.head1}>Sign up</Text>
      <View style={styles.inputout}>
      <AntDesign name="user"  size={24} color={namefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Full Name'
          onFocus={() => {
            setNamefocus(true)
            setEmailfocus(false)
            setPhonefocus(false)
            setPasswordfocus(false)
            setConfirmfocus(false)
            setShowpassword(false)
            
            
          }}
        />
      </View>
      {/* name ends */}

      <View style={styles.inputout}>
      <MaterialIcons name="email" size={24}  color={emailfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Email'
          onFocus={() => {
            setNamefocus(false)
            setEmailfocus(true)
            setPhonefocus(false)
            setPasswordfocus(false)
            setConfirmfocus(false)
            setShowpassword(false)
          }}
        />
      </View>
      {/* email ends */}

      <View style={styles.inputout}>
        {/* <AntDesign name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text2} /> */}
        <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Phone Number'
          onFocus={() => {
            setNamefocus(false)
            setEmailfocus(false)
            setPhonefocus(true)
            setPasswordfocus(false)
            setConfirmfocus(false)
            setShowpassword(false)
          }}
        />
      </View>

      {/* phone number ends */}

      <View style={styles.inputout}>
        <MaterialIcons name="lock-outline" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Password'
          onFocus={() => {
            setNamefocus(false)
            setEmailfocus(false)
            setPhonefocus(false)
            setPasswordfocus(true)
            setConfirmfocus(false)
            setShowpassword(false)
          }}
          secureTextEntry={showpassword == false ? true : false}
        />
        <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black"
          onPress={() => {
            setShowpassword(!showpassword)
          }}
        />
      </View>

      {/* password ends */}

      <View style={styles.inputout}>
        <MaterialIcons name="lock-outline" size={24} color={confirmfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Confirm Password'
          onFocus={() => {
            setNamefocus(false)
            setEmailfocus(false)
            setPhonefocus(false)
            setPasswordfocus(false)
            setConfirmfocus(true)
            setShowpassword(false)
          }}
          secureTextEntry={confirmfocus === false ? true : false}
        />
        <Octicons name={confirmfocus == false ? "eye-closed" : "eye"} size={24} color="black"
          onPress={() => {
            setConfirmfocus(!confirmfocus)
          }}
        />
      </View>

      <Text style={styles.address}>Please enter your address</Text>
      <View style={styles.inputout}>
        <TextInput style={styles.input1} placeholder='Enter your Address'/>
      </View>

      <TouchableOpacity style={btn1}>
        <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold', textAlign: 'center' }}>Sign up</Text>
      </TouchableOpacity>

      {/* <Text style={styles.forgot}>Forgot password?</Text> */}
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In with</Text>

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome name="facebook-f" size={24} color="#4267B2" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80} />
      <Text>Already have an account?
        <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
      </Text>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  head1: {
    color: colors.text1,
    fontSize: 30,
    marginVertical:20
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 20,
    backgroundColor: colors.col1
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%'
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  gftxt: {
    color: colors.text2,
    marginTop: 0,
    marginBottom:10,
    fontSize: 25
  },
  gf: {
    flexDirection: 'row'
  },
  gficon: {
    backgroundColor: 'white',
    width: 50,
    marginHorizontal: 10,
    marginVertical:5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20
  },
  signup: {
    color: colors.text1,
  },
  address:{
    fontSize:18,
    color:colors.text1,
    textAlign:'center',
    marginTop:20
  }
})

