import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBVBFNk8sy1BcVshydCigAtJVeFC_CXEbE",
    authDomain: "disneyplus-clone-e8537.firebaseapp.com",
    projectId: "disneyplus-clone-e8537",
    storageBucket: "disneyplus-clone-e8537.appspot.com",
    messagingSenderId: "580319152651",
    appId: "1:580319152651:web:8ea9e393f419745680150e",
    measurementId: "G-ERCNXPRWBH"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export{auth, provider, storage};
  export default db;
