import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD12ETwmGOySPhbqx1Ng_WaTeUDylJhbNw",
  authDomain: "foodapp-ef6d1.firebaseapp.com",
  projectId: "foodapp-ef6d1",
  storageBucket: "foodapp-ef6d1.appspot.com",
  messagingSenderId: "364563423154",
  appId: "1:364563423154:web:1d6a341bcc41788ab68eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {storage,db};