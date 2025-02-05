import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQ651QeD1YFlqQ_cc45w7Xg3vqI93WZFE",  
    authDomain: "crud-firebase-924ae.firebaseapp.com",  
    projectId: "crud-firebase-924ae",  
    storageBucket: "crud-firebase-924ae.firebasestorage.app",  
    messagingSenderId: "751944422936",  
    appId: "1:751944422936:web:79e93390835935c1b1156d",  
    measurementId: "G-X1GT8PF2F9"  
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)


export { db, auth } 