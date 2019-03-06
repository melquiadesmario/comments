import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBfaGsIgx1-EMyj-3oiK0xpPJ3moNpLnmM",
    authDomain: "comments-reactjs-dev.firebaseapp.com",
    databaseURL: "https://comments-reactjs-dev.firebaseio.com",
    projectId: "comments-reactjs-dev",
    storageBucket: "comments-reactjs-dev.appspot.com",
    messagingSenderId: "24500685919"
}
firebase.initializeApp(config)

export const database = firebase.database()
