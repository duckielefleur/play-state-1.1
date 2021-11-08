import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// replace the values with your firebase config
var firebaseConfig = {
    apiKey: "AIzaSyAsStH4eFV1z3PUeZYJc_WXHFMfx19_Ydw",
    authDomain: "playstate-ec72e.firebaseapp.com",
    projectId: "playstate-ec72e",
    storageBucket: "playstate-ec72e.appspot.com",
    messagingSenderId: "688057309408",
    appId: "1:688057309408:web:e2ef35c3bf61a8ac39d885"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// collection ref
const usersCollection = db.collection('users')
const gamesCollection = db.collection('games')

export {
    db,
    auth,
    storage,
    usersCollection,
    gamesCollection
}
