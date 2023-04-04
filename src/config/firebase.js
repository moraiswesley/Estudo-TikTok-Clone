import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAcIGwf3BBzBlmhnOnkizmZfwbIFGLKujo",
  authDomain: "tiktak-8c833.firebaseapp.com",
  projectId: "tiktak-8c833",
  storageBucket: "tiktak-8c833.appspot.com",
  messagingSenderId: "463561700628",
  appId: "1:463561700628:web:18186a08b69d536812fe01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;