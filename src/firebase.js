import * as firebase from 'firebase/app'
import { firebaseConfig } from 'config'

const app = firebase.initializeApp(firebaseConfig)
export default app
