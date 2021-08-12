import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCQI2zfPVXfngUqzs7aaxTRK9ijmVmZvHo',
  authDomain: 'expenses-list-app-3afdd.firebaseapp.com',
  projectId: 'expenses-list-app-3afdd',
  storageBucket: 'expenses-list-app-3afdd.appspot.com',
  messagingSenderId: '214977125537',
  appId: '1:214977125537:web:e80008f2dc2af22752e4e0',
  measurementId: 'G-S0JHSEZ6WW',
})

const db = firebaseApp.firestore()

export default db
