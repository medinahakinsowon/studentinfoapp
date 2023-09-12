

import firebase from 'firebase/compat/app'
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA_PLztYr3GwoE6OvtHW62rPlP45Qr6vDU",
  authDomain: "students-table-a0499.firebaseapp.com",
  databaseURL: "https://students-table-a0499-default-rtdb.firebaseio.com",
  projectId: "students-table-a0499",
  storageBucket: "students-table-a0499.appspot.com",
  messagingSenderId: "789287611806",
  appId: "1:789287611806:web:33b1d630677868a9c93a8f",
  measurementId: "G-XD6TW71YRP"
}

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
 
const db = getDatabase()

export {db}