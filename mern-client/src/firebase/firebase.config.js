// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQvr0gOXwlbArLiObJi9OVCr2LtaiT65U",
  authDomain: "mern-book-inventory-b1135.firebaseapp.com",
  projectId: "mern-book-inventory-b1135",
  storageBucket: "mern-book-inventory-b1135.appspot.com",
  messagingSenderId: "323759294757",
  appId: "1:323759294757:web:4ad601e03fb57c16b5b2cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;