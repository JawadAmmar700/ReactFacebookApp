import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC-la36Qez9JxoKs8p8nSZbTg68fPCgYbg",
  authDomain: "react-facebook-e73e4.firebaseapp.com",
  projectId: "react-facebook-e73e4",
  storageBucket: "react-facebook-e73e4.appspot.com",
  messagingSenderId: "15233157253",
  appId: "1:15233157253:web:59f977e6cd5c0b1e1981ec",
  measurementId: "G-5F0Y8JXBTF",
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default database
