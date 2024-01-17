import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '../Firebase/firebaseConfig'
import { colors, navbtn, navbtnin, navbtnout } from '../globals/styles';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../Components/BottomNav';


const UserCart = ({ navigation }) => {
    const [cartData, setCartData] = useState(null);
    const [totalCost, setTotalCost] = useState(0);

    const getCartData = async () => {
        const docRef = firebase.firestore().collection('userCart').doc(firebase.auth().currentUser.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                // console.log('Data exists');
                const data = JSON.stringify(doc.data());
                // console.log(data);
                setCartData(data);
            } else {
                console.log('No such data exists');
            }
        }).catch((err) => {
            console.log('Error getting documents', err);
        })
    }
    useEffect(() => {
        getCartData();
    }, []);
    // console.log('cartdata');
    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')} style={navbtnout}>
                <View style={navbtn}>
                    <AntDesign name="arrowleft" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View>
            <View style={styles.container}>
                <Text style={styles.head1}>Your Cart</Text>
                {cartData == null || JSON.parse(cartData).cart.length == 0 ?
                    <Text style={styles.head2}>No Cart</Text> :
                    <FlatList style={styles.cardlist} data={JSON.parse(cartData).cart}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <View style={styles.cartcard}>
                                        <Image source={{ uri: item.data.foodImageUrl }} style={styles.cartimg} />
                                        <View style={styles.cartin}>
                                            <View style={styles.c1}>
                                            <Text style={styles.txt1}>{item.foodquantity}</Text>
                                            </View>
                                           {
                                            item.Addonquantity > 0 &&
                                            <View style={styles.c2}></View>
                                           }
                                            <View style={styles.c4}></View>
                                        </View>
                                    </View>
                                )
                            }
                        } />
                }
            </View>
        </View>
    )
}

export default UserCart;

const styles = StyleSheet.create({
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 2
    },
    containerout: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.col1
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.col1,
        alignItems: 'center',
    },
    head1: {
        fontSize: 30,
        color: colors.text1,
    },
    head2: {
        fontSize: 30,
        color: colors.text2,
        width: '90%',
        height: '50%',
        elevation: 10,
        backgroundColor: colors.col1,
        alignSelf: 'center',
        paddingVertical: '25%',
        textAlign: 'center',
        fontWeight: '200',
        marginVertical: '20',
    },
    cardlist: {
        width: '100%',
    },
    cartcard: {
        flexDirection: 'row',
        backgroundColor: colors.col1,
        marginVertical: 5,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    cartimg: {
        width: 150,
        height: 100,
        boderRadius: 30,
    }
})