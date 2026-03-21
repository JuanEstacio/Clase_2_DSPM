// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_srpnq65Ave6RBAO89XkfXoXsD3bATc0",
  authDomain: "challenge-05-84ca1.firebaseapp.com",
  projectId: "challenge-05-84ca1",
  storageBucket: "challenge-05-84ca1.firebasestorage.app",
  messagingSenderId: "398440446928",
  appId: "1:398440446928:web:039b9271969885e8bdd7d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar Auth
export const auth = getAuth(app);