import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '../Firebase/firebaseConfig'
import { AntDesign } from '@expo/vector-icons';
import { navbtn, navbtnin, navbtnout,colors } from '../globals/styles';


const Userprofile = ({ navigation }) => {
  const [userLoggeduid, setUserLoggeduid] = useState(null);
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    const checkLogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUserLoggeduid(user.uid)
        } else {
          setUserLoggeduid(null)
        }
      })
    }
    checkLogin()
  }, [])


  useEffect(() => {
    const getuserdata = async () => {
      const docRef = firebase.firestore().collection('userData').where
        ('uid', '==', userLoggeduid);
      const doc = await docRef.get();
      if (!doc.empty) {
        doc.forEach((doc) => {
          setUserData(doc.data());
        })
      }
      else {
        // navigation.navigate('login')
        console.log('No such documents');
      }
    }
    getuserdata();
  }, [userLoggeduid]);

  console.log("userdata", userData);

  return (
    <View style={styles.containerout}>
      <TouchableOpacity onPress={() => navigation.navigate('home')} style={navbtnout}>
        <View style={navbtn}>
          <AntDesign name="arrowleft" size={24} color="black" style={navbtnin} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.head1}>Your Profile</Text>
        <View style={styles.containerin}>
          <Text style={styles.head2}>Name:
            {userData ?
              <Text style={styles.head2in}>{userData.name}</Text> :
              'loading'
            }
          </Text>
          {/* email */}
          <Text style={styles.head2}>Email:
            {userData ?
              <Text style={styles.head2in}>{userData.email}</Text> :
              'loading'
            }
          </Text>
          {/* phone */}
          <Text style={styles.head2}>Phone:
            {userData ?
              <Text style={styles.head2in}>{userData.phone}</Text> :
              'loading'
            }
          </Text>
          {/* address */}
          <Text style={styles.head2}>Address:
            {userData ?
              <Text style={styles.head2in}>{userData.address}</Text> :
              'loading'
            }
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Userprofile;
const styles = StyleSheet.create({
  containerout:{
    flex:1,
    width:'100%',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  containerin:{
    width:'90%',
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.text1,
    borderRadius:10,
    padding:20,
    marginTop:20
  },
  head1:{
    fontSize:40,
    fontWeight:'200',
    marginVertical:20,
    color:colors.text1,
    textAlign:'center'
  },
  head2:{
    fontSize:20,
    fontWeight:'200'
  },
  head2in:{
    fontSize:20,
    fontWeight:'300'
  }

})