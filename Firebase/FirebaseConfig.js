import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/compat/app';
import {getFirestore} from 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD12ETwmGOySPhbqx1Ng_WaTeUDylJhbNw",
  authDomain: "foodapp-ef6d1.firebaseapp.com",
  projectId: "foodapp-ef6d1",
  storageBucket: "foodapp-ef6d1.appspot.com",
  messagingSenderId: "364563423154",
  appId: "1:364563423154:web:1d6a341bcc41788ab68eab"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
