/* eslint-disable */
import firebase from 'firebase'

let config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

let app = firebase.initializeApp(config)
let db = app.database()

let subscribeRef = db.ref('subscribe')

export default subscribeRef