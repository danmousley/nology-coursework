// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAObRPDEAH8kCNRmBFY7NnDhkMjxtLRCvc",
  authDomain: "fir-test-c6f11.firebaseapp.com",
  projectId: "fir-test-c6f11",
  storageBucket: "fir-test-c6f11.appspot.com",
  messagingSenderId: "19309037051",
  appId: "1:19309037051:web:11039b29973255fb44375e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore }