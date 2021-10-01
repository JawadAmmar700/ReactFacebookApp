import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBXEZd9X_DKo0QsyIacBQHuAVWixKgKoFU",
  authDomain: "react-facebook-a9d5d.firebaseapp.com",
  projectId: "react-facebook-a9d5d",
  storageBucket: "react-facebook-a9d5d.appspot.com",
  messagingSenderId: "570402492434",
  appId: "1:570402492434:web:c3df3eb5aa175cdf1088cb",
  measurementId: "G-ZVXBZGYWM4",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default database
