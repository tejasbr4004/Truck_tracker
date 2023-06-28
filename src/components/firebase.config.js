// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxWjjzLvOcbDjpbsUIIPoEz3xEEEOIhHw",
  authDomain: "authentication-b8d4b.firebaseapp.com",
  projectId: "authentication-b8d4b",
  storageBucket: "authentication-b8d4b.appspot.com",
  messagingSenderId: "1016254757797",
  appId: "1:1016254757797:web:c5d4258efd45a1b532864c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Use "db" instead of "firestore" for the Firestore instance

// Example usage of the "collection" method
collection(db, "customers");
