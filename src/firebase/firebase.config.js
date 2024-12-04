// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFvKOFPVXC2ysGt-QDv_GR5iKRCz-doJI",
  authDomain: "crud-cafe-bc2a2.firebaseapp.com",
  projectId: "crud-cafe-bc2a2",
  storageBucket: "crud-cafe-bc2a2.firebasestorage.app",
  messagingSenderId: "867191591214",
  appId: "1:867191591214:web:59dc24a74565ad62d6aabf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;