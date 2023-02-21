// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf_NKXi0wQlBzmv82xgk-jyTGlaCjfVJU",
  authDomain: "smoothy-1-demo.firebaseapp.com",
  projectId: "smoothy-1-demo",
  storageBucket: "smoothy-1-demo.appspot.com",
  messagingSenderId: "323471488751",
  appId: "1:323471488751:web:2e8140e7ec9c4f64400d1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
