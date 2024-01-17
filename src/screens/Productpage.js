import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { navbtn, navbtnin, navbtnout, colors, veg, nonveg, btn2, hr80, incdecbtn, incdecinput, incdecout } from '../globals/styles';
import { firebase } from '../Firebase/firebaseConfig'

const Productpage = ({ navigation, route }) => {
    const data = route.params;
    if (route.params === undefined) {
        navigation.navigate('home')
    }
    const [quantity, setQuantity] = useState('1');
    const [addonquantity, setAddonquantity] = useState('0');
    
    const addtoCart = () => {
        console.log("add to cart");
        const docRef = firebase.firestore().collection('userCart').doc(firebase.auth().currentUser.uid);

        const data1 = { data, Addonquantity: addonquantity, Quantity: quantity }
        // console.log(data1);
        docRef.get().then((doc) => {
            if (doc.exists) {
                docRef.update({
                    cart: firebase.firestore.FieldValue.arrayUnion(data1)
                })
                alert("added more data")
            } else {
                docRef.set({
                    cart: [data1]
                })
                alert('added to cart')
            }
        })

    }
    const increaseQuantity = () => {
        setQuantity((parseInt(quantity) + 1).toString())
    }
    const decreaseQuantity = () => {
        // console.log("quantity check", quantity)
        if (parseInt(quantity) > 1) {

            setQuantity((parseInt(quantity) - 1).toString())
        }
    }


    const increaseAddonQuantity = () => {
        setAddonquantity((parseInt(addonquantity) + 1).toString())
    }
    const decreaseAddonQuantity = () => {
        console.log("quantity check", addonquantity)
        if (parseInt(addonquantity) > 1) {
            setAddonquantity((parseInt(addonquantity) - 1).toString())
        }
    }

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('home')} style={navbtnout} >
                <View style={navbtn}>
                    <AntDesign name="arrowleft" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.s1}>
                    <Image source={{
                        uri: data.foodImageUrl
                    }} style={styles.cardimgin} />
                </View>
                <View style={styles.s2}>
                    <View style={styles.s2in}>
                        <Text style={styles.head1} >{data.foodName}</Text>
                        <Text style={styles.head2}>₹{data.foodPrice}/-</Text>
                    </View>
                </View>
                <View style={styles.s3}>
                    <Text style={styles.head3}>About Food</Text>
                    <Text style={styles.head5}>{data.foodDescription}</Text>
                    <View style={styles.s3in}>
                        {data.foodType == 'veg' ? <Text style={veg}></Text> : <Text style={nonveg}></Text>}
                        <Text style={styles.head5in}>{data.foodType}</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.txt1}>Location</Text>
                    <Text style={styles.txt2}>{data.restaurantName}</Text>
                    <View style={styles.container2in}>
                        <Text style={styles.txt3}>{data.restaurantAddressBuilding}</Text>
                        <Text style={styles.dash}></Text>
                        <Text style={styles.txt3}>{data.restaurantAddressCity}</Text>
                        <Text style={styles.dash}></Text>
                        <Text style={styles.txt3}>{data.restaurantAddressStreet}</Text>
                    </View>
                </View>

                {
                    data.foodAddonPrice != '' &&
                    <View style={styles.container3}>
                        <View style={hr80}></View>
                        <Text style={styles.txt5}>Add Extra</Text>
                        <View style={styles.c3in}>
                            <Text style={styles.txt4}>{data.foodAddon}</Text>
                            <Text style={styles.txt4}>{data.foodAddonPrice}</Text>
                        </View>
                        <View style={incdecout}>
                            <Text style={incdecbtn} onPress={() => increaseAddonQuantity()}>+</Text>
                            <TextInput style={incdecinput} value={addonquantity} />
                            <Text style={incdecbtn} onPress={() => decreaseAddonQuantity()}>-</Text>
                        </View>
                    </View>
                }

                <View style={styles.container3}>
                    <View style={hr80}></View>
                    <Text style={styles.txt5}>Food Quantity</Text>
                    <View style={incdecout}>
                        <Text style={incdecbtn} onPress={() => increaseQuantity()}>+</Text>
                        <TextInput style={incdecinput} value={quantity} />
                        <Text style={incdecbtn} onPress={() => decreaseQuantity()}>-</Text>
                    </View>
                    <View style={hr80}></View>
                </View>

                <View style={styles.container4}>
                    <View style={styles.c4in}>
                        <Text style={styles.txt2}>Total Price</Text>
                        {
                            data.foodAddonPrice != '' ?
                                <Text style={styles.txt6}>₹{((
                                    parseInt(data.foodPrice) * parseInt(quantity)
                                ) + parseInt(addonquantity) * parseInt(data.foodAddonPrice)).toString()}</Text> :
                                <Text style={styles.txt3}>₹{(parseInt(data.foodPrice) + parseInt(quantity)).toString()}/-</Text>
                        }
                    </View>
                    <View style={hr80}></View>
                </View>

                <View style={styles.btncont}>
                    <TouchableOpacity style={btn2} onPress={() => addtoCart()}>
                        <Text style={styles.btntxt}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btn2}>
                        <Text style={styles.btntxt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

export default Productpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // width:'100%',
    },
    containerin: {
        flex: 1,
        backgroundColor: '#fff'
    },
    s1: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardimgin: {
        width: '100%',
        height: '100%',
    },
    container1: {
        width: '100%',
        height: '100%'
    },
    s2in: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    head1: {
        fontSize: 30,
        fontWeight: '500',
        color: colors.text1,
        width: 220,
        marginRight: 10,
        textAlign: 'center'
    },
    head2: {
        fontSize: 30,
        fontWeight: '300',
        color: colors.text3,
    },
    head5in: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 10,
        textAlign: 'center'
    },
    s3: {
        backgroundColor: colors.text1,
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 20
    },
    head3: {
        fontSize: 25,
        fontWeight: '400',
        color: colors.col1,
    },
    head4: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.col1,
        marginVertical: 10
    },
    head5: {
        fontSize: 18,
        fontWeight: '200',
        color: colors.col1,
        paddingVertical: 10
    },
    s3in: {
        backgroundColor: colors.col1,
        padding: 10,
        borderRadius: 10,
        width: 130,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btncont: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    btntxt: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center'
    },
    container2: {
        width: '90%',
        backgroundColor: colors.col1,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
        elevation: 10,
        alignItems: 'center'
    },
    txt1: {
        fontSize: 20,
        color: colors.text1,
        fontWeight: '200',
    },
    txt2: {
        fontSize: 20,
        color: colors.text1,
        fontWeight: '400',
        marginVertical: 10
    },
    txt3: {
        fontSize: 15,
        color: colors.text1,
        width: '30%',
        textAlign: 'center'
    },
    container2in: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    dash: {
        width: 1,
        height: 20,
        backgroundColor: colors.text1,
        marginHorizontal: 10
    },
    container3: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    txt5: {
        fontSize: 18,
        color: colors.text1,
        textAlign: 'center',
        paddingVertical: 10
    },
    c3in: {
        flexDirection: 'row',
    },
    txt4: {
        fontSize: 20,
        color: colors.text3,
        marginHorizontal: 10,
    },
    container4: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    c4in: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    txt6: {
        fontSize: 30,
        color: colors.text3,
        marginHorizontal: 10,
    },
    txt6: {
        fontSize: 33,
        color: colors.text1,
        textAlign: 'center',
        paddingVertical: 10
    },


})