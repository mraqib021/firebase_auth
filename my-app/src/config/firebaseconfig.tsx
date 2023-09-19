// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCagIgANY2086vIjfx2AZQ4rRkxwQ-kr10",
  authDomain: "react-boilerplate021.firebaseapp.com",
  projectId: "react-boilerplate021",
  storageBucket: "react-boilerplate021.appspot.com",
  messagingSenderId: "170138128078",
  appId: "1:170138128078:web:42ede26f94af000a308a9f",
  measurementId: "G-N8R0KJ47C6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
