import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDrAQ7MLTZbvL8MO-Yq5o9XJTRz6aOlxsY',
  authDomain: 'aiellosite.firebaseapp.com',
  projectId: 'aiellosite',
  storageBucket: 'aiellosite.appspot.com',
  messagingSenderId: '854104615288',
  appId: '1:854104615288:web:4934ec031bb2a88293008d'
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
