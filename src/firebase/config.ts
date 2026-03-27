// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFnBKAWUkYENJxVVZW2GdrUsh9EuZuMJE",
  authDomain: "challenge-06-d6c03.firebaseapp.com",
  databaseURL: "https://challenge-06-d6c03-default-rtdb.firebaseio.com",
  projectId: "challenge-06-d6c03",
  storageBucket: "challenge-06-d6c03.firebasestorage.app",
  messagingSenderId: "665627624669",
  appId: "1:665627624669:web:84357a636fd15e722e8734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar
export const auth = getAuth();
export const db = getFirestore();
export const dbRealtime = getDatabase();