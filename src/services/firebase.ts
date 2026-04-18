// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1j3q7eUgNvmqzBaJFcuv_ufctf7KI0h8",
  authDomain: "segundo-parcial-moviles.firebaseapp.com",
  projectId: "segundo-parcial-moviles",
  storageBucket: "segundo-parcial-moviles.firebasestorage.app",
  messagingSenderId: "935973501077",
  appId: "1:935973501077:web:48552bd00544d67908839c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportaciones
export const auth = getAuth(app);