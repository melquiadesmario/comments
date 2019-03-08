import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAPrQZ7PXv3qBUQ9nD6OZKS4KKN-PChno4",
    authDomain: "comments-dev-10c18.firebaseapp.com",
    databaseURL: "https://comments-dev-10c18.firebaseio.com",
    projectId: "comments-dev-10c18",
    storageBucket: "comments-dev-10c18.appspot.com",
    messagingSenderId: "988295222305"
}
firebase.initializeApp(config)

export const database = firebase.database()
