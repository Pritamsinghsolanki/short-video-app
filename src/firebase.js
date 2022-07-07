import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


firebase.initializeApp({
  apiKey: "AIzaSyCQKl5g-nTO7ay4j1tP4_U47Y5JKA_s7pE",
  authDomain: "short-video-player-a2e15.firebaseapp.com",
  projectId: "short-video-player-a2e15",
  storageBucket: "short-video-player-a2e15.appspot.com",
  messagingSenderId: "1061347990341",
  appId: "1:1061347990341:web:9f65d7a845af58d3833c2c"
})
export const auth = firebase.auth();
const firestore = firebase.firestore();

export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
  comments: firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  }
}
// 1. get firebase storage 
export const storage = firebase.storage();
export default firebase;



