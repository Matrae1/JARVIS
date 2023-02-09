import { getApp, getApps, initializeApp } from "firebase/app" ;
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi0NGATdUi_HNiGjIN8vA7ZQFWKXlnD0c",
  authDomain: "jarvis-8aab4.firebaseapp.com",
  projectId: "jarvis-8aab4",
  storageBucket: "jarvis-8aab4.appspot.com",
  messagingSenderId: "760887595012",
  appId: "1:760887595012:web:b0dec5278aaafa91036551"
};

// Initialize Firebase;
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db };