import firebase from 'firebase'
  
const firebaseApp=firebase.initializeApp({
  // databaseURL: "https://todo-app-6d61a-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyBawLx9ygbyvCbX_wV640YoovhdqTtIeQI",
  authDomain: "todo-app-6d61a.firebaseapp.com",
  projectId: "todo-app-6d61a",
  storageBucket: "todo-app-6d61a.appspot.com",
  messagingSenderId: "198389457456",
  appId: "1:198389457456:web:f3bc87b9e18a83b12283f5",
  measurementId: "G-97Z08E7HJV"
  });
const db=firebaseApp.firestore();

export default db;