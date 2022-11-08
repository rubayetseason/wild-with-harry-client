// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0cuFv_QYf8HUVUt5_33x2zAG3wKqyXFw",
  authDomain: "wild-with-harry.firebaseapp.com",
  projectId: "wild-with-harry",
  storageBucket: "wild-with-harry.appspot.com",
  messagingSenderId: "1050249765755",
  appId: "1:1050249765755:web:b03276552d2a702f9ed3de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;