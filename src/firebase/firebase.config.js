// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhTxnUtwIal227h3IMn1dA84RoXgK7k-I",
    authDomain: "learn-with-passion.firebaseapp.com",
    projectId: "learn-with-passion",
    storageBucket: "learn-with-passion.appspot.com",
    messagingSenderId: "428616615972",
    appId: "1:428616615972:web:4256d850fafbef527f30b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;