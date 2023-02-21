// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX9CUL7GnGZrmV_OqkRWELT6-rK_ICFBo",
  authDomain: "smoothy-2-demo.firebaseapp.com",
  projectId: "smoothy-2-demo",
  storageBucket: "smoothy-2-demo.appspot.com",
  messagingSenderId: "585561372295",
  appId: "1:585561372295:web:1e6f83228fa2326744ea22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app };
export default db;