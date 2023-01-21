import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARh5EbNYMoQuGJ48gWsaDidBbpVo0qJyQ",
  authDomain: "rapidgrab-bfbc5.firebaseapp.com",
  projectId: "rapidgrab-bfbc5",
  storageBucket: "rapidgrab-bfbc5.appspot.com",
  messagingSenderId: "277630727983",
  appId: "1:277630727983:web:eac67f87f7f9bd4c3653da",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };



//          src="https://drive.google.com/uc?export=view&id=12SK6PQ7o-gZbSrtsKTH3QjCmRttV-Wm7"
