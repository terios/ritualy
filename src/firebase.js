import * as firebase from 'firebase'
import { firebaseConfig } from 'config'

console.log('firebaseConfig', firebaseConfig)

console.log(firebase)

firebase.initializeApp(firebaseConfig)
export default firebase
