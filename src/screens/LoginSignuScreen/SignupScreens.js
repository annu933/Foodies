import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors, titles, btn1, hr80 } from '../../globals/styles'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { firebase } from '../../Firebase/firebaseConfig'

export const SignupScreens = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [confirmfocus, setConfirmfocus] = useState(false);
  const [phonefocus, setPhonefocus] = useState(false);
  const [namefocus, setNamefocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState(false);


  // taking form data
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [address, setAddress] = useState('')
  // console.log(name,email,phone,password,cpassword,address)

  const [customError, setCustomError] = useState('')
  const [successmsg, setSuccessmsg] = useState(null)
  // console.log("customError,successmsg",customError,successmsg)

  const hendlsignup = () => {
    const FormData = {
      name: name,
      email: email,
      password: password,
      // cpassword: cpassword,
      phone: parseInt(phone, 10),
      address: address
    }
    if (password != cpassword) {
      setCustomError("password doesn't match")
      return;
    }
    // else if(phone.length != 10){
    //   setCustomError("phone number should be 10 digit")
    //   return;
    // }
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("user created")
          
          const userRef = firebase.firestore().collection('userData');
          userRef.add(FormData).then(() => {
            console.log("data added to the firestore")
            setSuccessmsg("user created successfully")
          }).catch((error) => {
            console.log("firebase error", error)
          })
        })
        .catch((error) => {
          console.log("sign up firebase error", error)
          if (error == "Firebase: The email address is already in use by another account. (auth/email-already-in-use).") {
            setCustomError('Email already exists')
          } else if (error == "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).") {
            setCustomError('Invalid email')
          } else if (error == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
            setCustomError("Password should be at least 6 characters")
          } else {
            setCustomError(error)
          }
        })
    } catch (error) {
      console.log("sign up system error", error)
    }
  }

  // console.log(successmsg)
  return (
    <View>
      
      <ScrollView>
        {successmsg == null ?
          <View style={styles.container}>
            <Text style={styles.head1}>Sign up</Text>
            {customError != '' &&
              <Text style={styles.errormsg}>{customError}</Text>
            }
            <View style={styles.inputout}>
              <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
              <TextInput style={styles.input} placeholder='Full Name'
                onFocus={() => {
                  setNamefocus(true)
                  setEmailfocus(false)
                  setPhonefocus(false)
                  setPasswordfocus(false)
                  setConfirmfocus(false)
                  setShowpassword(false)
                  // setCustomError('')
                }}
                onChangeText={(text) => setName(text)}
              />
            </View>
            {/* name ends */}

            <View style={styles.inputout}>
              <MaterialIcons name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
              <TextInput style={styles.input} placeholder='Email'
                onFocus={() => {
                  setNamefocus(false)
                  setEmailfocus(true)
                  setPhonefocus(false)
                  setPasswordfocus(false)
                  setConfirmfocus(false)
                  setShowpassword(false)
                  setCustomError('')
                }}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            {/* email ends */}

            <View style={styles.inputout}>
              <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
              <TextInput style={styles.input} placeholder='Phone Number'
                keyboardType="phone-pad"
                // value={phone}
                onFocus={() => {
                  setNamefocus(false)
                  setEmailfocus(false)
                  setPhonefocus(true)
                  setPasswordfocus(false)
                  setConfirmfocus(false)
                  setShowpassword(false)
                  setCustomError('')
                }}
                onChangeText={(text) => setPhone(text)}
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
                  setCustomError('')
                }}
                secureTextEntry={showpassword == false ? true : false}
                onChangeText={(text) => setPassword(text)}
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
                  setCustomError('')
                }}
                secureTextEntry={confirmfocus === false ? true : false}
                onChangeText={(text) => setCPassword(text)}
              />
              <Octicons name={confirmfocus == false ? "eye-closed" : "eye"} size={24} color="black"
                onPress={() => {
                  setConfirmfocus(!confirmfocus)
                }}
              />
            </View>

            <Text style={styles.address}>Please enter your address</Text>
            <View style={styles.inputout}>
              <TextInput style={styles.input1} placeholder='Enter your Address'
                onChangeText={(text) => setAddress(text)}
                onFocus={() => {
                  setNamefocus(false)
                  setEmailfocus(false)
                  setPhonefocus(false)
                  setPasswordfocus(false)
                  setConfirmfocus(false)
                  setShowpassword(false)
                  setCustomError('')
                }}
              />
            </View>

            <TouchableOpacity style={btn1} onPress={hendlsignup}>
              <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold', textAlign: 'center' }} >Sign up</Text>
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
          :
          <View style={styles.container1}>
            <Text style={styles.successmessage}>{successmsg}</Text>
            <TouchableOpacity style={btn1} onPress={() => navigation.navigate('login')}>
              <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold', textAlign: 'center' }} >Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btn1} onPress={() => setSuccessmsg(null)}>
              <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold', textAlign: 'center' }} >Go back</Text>
            </TouchableOpacity>
          </View>
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 10
  },
  container1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  head1: {
    color: colors.text1,
    fontSize: 30,
    marginVertical: 20
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
    marginBottom: 10,
    fontSize: 25
  },
  gf: {
    flexDirection: 'row'
  },
  gficon: {
    backgroundColor: 'white',
    width: 50,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20
  },
  errormsg: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  successmessage:{
    color:'green',
    padding:10,
    borderWidth:1,
    borderColor:'green',
    margin:10,
    borderRadius:10
  }
})

