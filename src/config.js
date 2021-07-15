import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAc6qYwIsqjxyM_gSJgfT3vDsavP56KNc0",
  authDomain: "messenger-7af85.firebaseapp.com",
  projectId: "messenger-7af85",
  storageBucket: "messenger-7af85.appspot.com",
  messagingSenderId: "306254612790",
  appId: "1:306254612790:web:a2319373c8efb0d1e20b97",
  measurementId: "G-205JK2F02T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
