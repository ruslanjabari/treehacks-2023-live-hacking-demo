import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBf_NKXi0wQlBzmv82xgk-jyTGlaCjfVJU",
  authDomain: "smoothy-1-demo.firebaseapp.com",
  projectId: "smoothy-1-demo",
  storageBucket: "smoothy-1-demo.appspot.com",
  messagingSenderId: "323471488751",
  appId: "1:323471488751:web:2e8140e7ec9c4f64400d1a"
};

const app = firebase.initializeApp(config);

const db = app.firestore();

const fetchUsers = async () => {
  try {
    const doc = await db.collection('users').get();
    doc.forEach((doc) => {
      console.log(doc.data());
    })
  } catch (err) {
    console.log(err);
  }
}


async function main() {
  await fetchUsers();
}

main();