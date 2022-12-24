// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdt2jGzrq1DVcO4Jk9oSbFoO-VkQkilbA",
  authDomain: "dulce-gusto.firebaseapp.com",
  projectId: "dulce-gusto",
  storageBucket: "dulce-gusto.appspot.com",
  messagingSenderId: "120699075460",
  appId: "1:120699075460:web:b66f32bf9db8eb497d3bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app