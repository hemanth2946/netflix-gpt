// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKyTKFzy_qz1u68zjmmoglRosaNuW4qfs",
    authDomain: "netflix-gpt-75ffc.firebaseapp.com",
    projectId: "netflix-gpt-75ffc",
    storageBucket: "netflix-gpt-75ffc.appspot.com",
    messagingSenderId: "193502583369",
    appId: "1:193502583369:web:a4ad6ce779d89d4624bd98",
    measurementId: "G-M7EZPGFXL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);