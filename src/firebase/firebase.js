import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this

const firebaseConfig = {
  apiKey: "AIzaSyAp9me3eLaULrKEKlknMPscpuqhhlewtYk",
  authDomain: "travelsite-6d71c.firebaseapp.com",
  projectId: "travelsite-6d71c",
  storageBucket: "travelsite-6d71c.firebasestorage.app",
  messagingSenderId: "479418044829",
  appId: "1:479418044829:web:7355767e64501d82f0df74",
  measurementId: "G-BCQY41B76N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export both