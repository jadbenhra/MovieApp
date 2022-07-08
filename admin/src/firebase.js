import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCaTYur8Te9rjGObKEbJHzqkD28At5bPxs",
    authDomain: "streflix.firebaseapp.com",
    projectId: "streflix",
    storageBucket: "streflix.appspot.com",
    messagingSenderId: "440572672289",
    appId: "1:440572672289:web:3c8c30cc7eed21c24fa660",
    measurementId: "G-CYS6GLM3J3"
  };

  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;