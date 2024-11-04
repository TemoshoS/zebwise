// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4XPTIUg3AdFsZyoKpIr-Y-tpZxDb4zZA",
  authDomain: "zebwise-b7d25.firebaseapp.com",
  projectId: "zebwise-b7d25",
  storageBucket: "zebwise-b7d25.firebasestorage.app",
  messagingSenderId: "356172748830",
  appId: "1:356172748830:web:cc2c121506d15e21c1b60f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

export { auth, db };