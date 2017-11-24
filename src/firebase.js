import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { firebaseConfig } from 'config'

import { updateUser } from 'store/actions'

const app = firebase.initializeApp(firebaseConfig)
export const firebaseStore = (store) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch(updateUser(user))
      }
    });
}
export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
export default app
