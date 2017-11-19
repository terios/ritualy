import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { firebaseConfig } from 'config'

const app = firebase.initializeApp(firebaseConfig)
export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
export default app
