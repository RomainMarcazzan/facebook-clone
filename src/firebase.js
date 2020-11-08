import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlhMqQhFbdu5yDJaxMXEHQ_0ZbQbqhxMU",
  authDomain: "facebook-clone-79717.firebaseapp.com",
  databaseURL: "https://facebook-clone-79717.firebaseio.com",
  projectId: "facebook-clone-79717",
  storageBucket: "facebook-clone-79717.appspot.com",
  messagingSenderId: "1041519919343",
  appId: "1:1041519919343:web:45fbbbbe34643835db9b1a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
