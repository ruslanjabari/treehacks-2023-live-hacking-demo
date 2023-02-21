
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCX9CUL7GnGZrmV_OqkRWELT6-rK_ICFBo",
  authDomain: "smoothy-2-demo.firebaseapp.com",
  projectId: "smoothy-2-demo",
  storageBucket: "smoothy-2-demo.appspot.com",
  messagingSenderId: "585561372295",
  appId: "1:585561372295:web:1e6f83228fa2326744ea22"
};

const app = firebase.initializeApp(config);

const db = app.firestore();

const auth = firebase.auth(app);

const fetchUsers = async () => {
  try {
    auth.createUserWithEmailAndPassword("nbhak@stanford.edu", "password").then(async(userCredential) => {
      const doc = await db.collection('users').get();
      doc.forEach((doc) => {
        console.log(doc.data());
      })
    })
  } catch (err) {
    console.log(err);
  }
}


async function main() {
  await fetchUsers();
}

main();