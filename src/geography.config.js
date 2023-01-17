// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbDY0C8IX0mD60HGGJtYldTqptvLkzDjo",
  authDomain: "shop24h-97a58.firebaseapp.com",
  projectId: "shop24h-97a58",
  storageBucket: "shop24h-97a58.appspot.com",
  messagingSenderId: "648821769122",
  appId: "1:648821769122:web:1e2d8c7d81afbac295e8fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;