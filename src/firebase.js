import * as firebase from "firebase";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYQrT0YMpiNZxEvQOFyDFkFHqnkcqeLaY",
  authDomain: "gql-project-5bc58.firebaseapp.com",
  projectId: "gql-project-5bc58",
  storageBucket: "gql-project-5bc58.appspot.com",
  messagingSenderId: "630982817477",
  appId: "1:630982817477:web:b1c098a9db1175f2d822ac",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();  